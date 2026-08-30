"use server"

import { prisma } from "./prisma"
import { ContactSchema, RoomSchema, ReserveSchema } from "./zod"
import {redirect} from "next/navigation";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { error } from "console";
import { differenceInCalendarDays } from "date-fns";

export const ContactMessage = async(
    prevState:unknown, 
    formData: FormData
) => {
    const validatedFields = ContactSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {error:validatedFields.error.flatten().fieldErrors};
    }

    const {name, email, subject, message} = validatedFields.data;

    try {
        await prisma.contact.create({
            data:{
                name,
                email,
                subject,
                message
            }
        });
        return {message: "Thanks for contact us"}
    } catch (error) {
        console.log(error);
    }
}

export const saveRoom = async (image: string, preState: unknown, formData: FormData) => {
    if(!image) return {message: "Image is Required"}

    const rawData = {
        name: formData.get("name"),
        description: formData.get("description"),
        capacity: formData.get("capacity"),
        price: formData.get("price"), 
        amenities: formData.getAll("amenities")
    };

    const validatedFields = RoomSchema.safeParse(rawData);
    if(!validatedFields.success){
        return {error: validatedFields.error.flatten().fieldErrors}
    }

    const {name, description, price, capacity, amenities} = validatedFields.data;

    try {
        await prisma.room.create({
            data:{
                name,
                description,
                image,
                price,
                capacity,
                RoomAmenities:{
                    createMany:{
                        data: amenities.map((item) => ({
                            amenitiesId: item
                        }))
                    }
                }
            }
        })
    } catch (error) {
        console.log(error);
    }
    redirect("/admin/room");
}

// Delete Room
export const deleteRoom = async(id: string, image: string) => {
    try {
        await del(image);
        await prisma.room.delete({
            where:{id}
        })
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/admin/room");
}

// Update Room
export const updateRoom = async (image: string, roomId: string, preState: unknown, formData: FormData) => {
    if(!image) return {message: "Image is Required"}

    const rawData = {
        name: formData.get("name"),
        description: formData.get("description"),
        capacity: formData.get("capacity"),
        price: formData.get("price"), 
        amenities: formData.getAll("amenities")
    };

    const validatedFields = RoomSchema.safeParse(rawData);
    if(!validatedFields.success){
        return {error: validatedFields.error.flatten().fieldErrors}
    }

    const {name, description, price, capacity, amenities} = validatedFields.data;

    try {
        await prisma.$transaction([
            prisma.room.update({
                where: {id: roomId},
                data : {
                    name, 
                    description,
                    image,
                    price,
                    capacity,
                    RoomAmenities: {
                        deleteMany: {}
                    }
                }
            }),
            prisma.roomAmenities.createMany({
                data: amenities.map((item) => ({
                    roomId,
                    amenitiesId: item
                }))
            })
        ])
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/admin/room")
    redirect("/admin/room");
}

// CreateReserve
export const createReserve = async(
    roomId: string,
    price: number,
    startDate: Date,
    endDate: Date,
    prevState: unknown,
    formData: FormData
) => {
    const session = await auth();
    if(!session || !session.user || !session.user.id) redirect(`/signin?redirect_url=room/${roomId}`);

    const rawData = {
        name: formData.get("name"),
        phone: formData.get("phone"),
    }

    const validatedFields = ReserveSchema.safeParse(rawData);
    if(!validatedFields.success){
        return { error: validatedFields.error.flatten().fieldErrors }
    }

    const {name, phone} = validatedFields.data;

    const night = differenceInCalendarDays(endDate, startDate);
    if(night <= 0) return {messageDate: "Date must be at least one night"}

    const total = night * price;
    let reservationId: string | undefined;

    try {
        reservationId = await prisma.$transaction(async (tx) => {
            await tx.user.update({
                data: { name, phone },
                where: { id: session.user.id }
            });
            const reservation = await tx.reservation.create({
                data: {
                    startDate,
                    endDate,
                    price,
                    roomId,
                    userId: session.user.id as string,
                    Payment: { create: { amount: total } }
                }
            });
            return reservation.id; // <-- return langsung dari transaction
        });
    } catch (error) {
        console.error(error);
        return { message: "Something went wrong. Please try again." };
    }

    if (!reservationId) {
        return { message: "Reservation failed. Please try again." };
    }

    redirect(`/checkout/${reservationId}`);
}