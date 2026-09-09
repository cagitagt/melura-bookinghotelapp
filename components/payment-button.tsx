"use client"
import { useTransition } from "react"
import { reservationProps } from "@/types/reservation"
import { useRouter } form "next/navigation" //biar redirect ke page selanjutnya ngga ambigu arahnya

type SnapResult = { transaction_status?: string; order_id? string }; //buat logika pemanggilan typescript aja, biar kebaca fitur" yg di dalem window.snap.pay

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
                //checking awal fungsi snap.js dah redi atau belom
                if (typeof window.snap === "undefined") {
                    console.log("snap.js belum siap, coba sebentar lagi ya!!");
                    return;    //stop proses, biar ngga langsung redirect ke fetch token kalau emang belum redi
                }
                //request token transaksi ke api yang udah di buat
                const response = await fetch("/api/payment", {
                    method: "POST",
                    body: JSON.stringify(reservation)
                });
                const {token} = await response.json();
                //open popup snap bareng ma callback nya
                if(token) {
                    window.snap.pay(token
                        onSuccess: () => {
                            router.push("/payment/success");
                        },
                        onPending: () => {
                            router.push("/payment/pending");
                        },
                        onError: () => {
                            router.push("/payment/failure");
                        },
                        onClose: () => {
                            console.log("popup ditutup, pembayaran gagal");
                        },
                    });
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
