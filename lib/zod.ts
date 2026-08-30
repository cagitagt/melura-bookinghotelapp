import { object, string, coerce, array } from "zod";

export const RoomSchema = object({
    name: string().min(1, "Room name is required"),
    description: string().min(50, "Description must be at least 50 characters"),
    capacity: coerce.number().gt(0, "Capacity must be greater than 0"),
    price: coerce.number().gt(0, "Price must be greater than 0"),
    amenities: array(string()).nonempty("Please select at least one amenity"),
});



export const ContactSchema = object({
    name: string().min(2, "Name at least 2 characters"),
    email: string().email("Please enter a valid email"),
    subject: string().min(5, "Subject at least 5 characters"),
    message: string().min(50, "Message at least 50 characters").max(200, "Message maximum 200 characters"),
})

export const ReserveSchema = object({
    name: string().min(1, "Name is required"),
    phone: string().min(10, "Phone number must be greater than 9")
});

