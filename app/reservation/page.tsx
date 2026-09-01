import { Metadata } from "next";
import { auth } from "@/auth";
import ReserveList from "@/components/reserve-list";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Reservation"
}
const ReservationPage = async() => {
  const session = await auth();
  if(!session || !session.user) redirect("/signin")
  return (
    <div className="min-h-screen bg-taupe-50">
      <div className="max-w-5xl mx-auto mt-10 py-20 px-4">

        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
            Melura Hotel — Lake Como, Italy
          </span>
        </div>
        <h1 className="font-playfair text-4xl md:text-5xl font-normal text-taupe-900 text-center mb-2">
          Hi, {session.user.name}
        </h1>
        <p className="text-taupe-500 text-sm text-center mb-16">
          Here&apos;s your booking history
        </p>

        <ReserveList/>
      </div>
    </div>
  )
}

export default ReservationPage