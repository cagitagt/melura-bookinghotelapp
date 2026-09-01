"use client"
import { useTransition } from "react"
import { reservationProps } from "@/types/reservation"

declare global {
    interface Window {
        snap: {
            pay: (token:string) => void;
        }
    }
}
const PaymentButton = ({
    reservation
}:{
    reservation: reservationProps
}) => {
    const [isPending, startTransition] = useTransition();
    const handlePayment = async () => {
        startTransition(async () => {
            try {
                const response = await fetch("/api/payment", {
                    method: "POST",
                    body: JSON.stringify(reservation)
                });
                const {token} = await response.json();
                if(token) {
                    window.snap.pay(token);
                }
            } catch (error) {
                console.log(error);
            }
        })
    }
  return (
    <button
        onClick={handlePayment}
        disabled={isPending}
        className="w-full mt-6 px-8 py-3 text-xs uppercase tracking-wide border border-taupe-900 text-taupe-900 hover:bg-taupe-900 hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
    >
        {isPending ? "Processing..." : "Process Payment"} 
    </button>
  )
}

export default PaymentButton