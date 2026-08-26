import { object, string } from "zod";

export const ContactSchema = object({
    name: string().min(2, "Name at least 2 characters"),
    email: string().email("Please enter a valid email"),
    subject: string().min(5, "Subject at least 5 characters"),
    message: string().min(50, "Message at least 50 characters").max(200, "Message maximum 200 characters"),
})

