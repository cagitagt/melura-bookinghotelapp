import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { HiCheckCircle } from "react-icons/hi2";

export const metadata: Metadata = {
    title: "Payment Successful",
}
const PaymentSuccess = async({
    searchParams,
} : {
    searchParams: Promise<{transaction_status: string}>;
}) => {
    const paymentStatus = (await searchParams).transaction_status;
    if (paymentStatus === "pending") redirect("/payment/pending");
    if (paymentStatus === "failure") redirect("/payment/failure");

  return (
    <div className="min-h-screen bg-taupe-50 flex items-center">
        <div className="max-w-md mx-auto px-4 py-20 text-center">
            <HiCheckCircle className="w-10 h-10 mx-auto mb-8 text-taupe-700" strokeWidth={0.5}/>

            <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
                Melura Hotel
            </span>
            <h3 className="font-playfair text-3xl font-normal text-taupe-900 mt-3 mb-6">
                Payment Done
            </h3>
            <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-px w-10 bg-taupe-300" />
                <span className="w-1.5 h-1.5 rotate-45 border border-taupe-400" />
                <span className="h-px w-10 bg-taupe-300" />
            </div>

            <p className="text-taupe-500 text-sm leading-relaxed">
                Thank you for completing your secure online payment.
            </p>
            <p className="text-taupe-500 text-sm mb-10">Have a great day.</p>

            <Link
                href="/reservation"
                className="inline-block px-8 py-3 text-xs uppercase tracking-wide border border-taupe-900 text-taupe-900 hover:bg-taupe-900 hover:text-white transition-colors duration-200"
            >
                Go To My Reservation
            </Link>
        </div>
    </div>
  )
}

export default PaymentSuccess