import { Metadata } from "next";
import CheckoutDetail from "@/components/checkout-detail";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Reservation Summary"
}

const CheckoutPage = async ({params}: {params: Promise<{id: string}>}) => {
  const reservationId = (await params).id;

  return (
    <div className="max-w-5xl mx-auto mt-12 py-20 px-4">
      <div className="text-center mb-4">
        <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
          Melura Hotel — Lake Como, Italy
        </span>
      </div>
      <h1 className="font-playfair text-4xl md:text-5xl font-normal text-taupe-900 text-center mb-6">
        Reservation Summary
      </h1>
      <div className="flex items-center justify-center gap-4 mb-16">
        <span className="h-px w-16 bg-taupe-300" />
        <span className="w-2 h-2 rotate-45 border border-taupe-400" />
        <span className="h-px w-16 bg-taupe-300" />
      </div>

      <Suspense fallback={<p className="text-center text-taupe-500 text-sm">Loading...</p>}>
        <CheckoutDetail reservationId={reservationId}/>
      </Suspense>
    </div>
  )
}

export default CheckoutPage