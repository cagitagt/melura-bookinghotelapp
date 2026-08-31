import { getReservationById } from "@/lib/data";
import Image from "next/image";  
import { formatDate, formatCurrency } from "@/lib/utils";
import {differenceInCalendarDays} from "date-fns";
import PaymentButton from "./payment-button";

const CheckoutDetail = async ({reservationId}: {reservationId: string}) => {
    const reservation = await getReservationById(reservationId);
    if(!reservation || !reservation.Payment) 
        return <h1 className="font-playfair text-2xl text-taupe-900 text-center">No Reservation Found</h1>
    
    const duration = differenceInCalendarDays(reservation.endDate, reservation.startDate)

  return (
    <div className="grid md:grid-cols-2 gap-12">
        <div className="order-2">
            <div className="relative aspect-4/3 mb-5">
                <Image src={reservation.Room.image} alt="Image" fill className="object-cover"/>
            </div>
            <h5 className="font-playfair text-3xl font-normal text-taupe-900 mb-1">
                {reservation.Room.name}
            </h5>
            <p className="text-base text-taupe-500">
                {formatCurrency(reservation.price)} / Night
            </p>
            {/* Payment Button */}
            <PaymentButton reservation={reservation}/>
        </div>

        <div>
            <span className="text-xs uppercase tracking-[0.3em] text-taupe-500">
                Booking Details
            </span>
            <div className="h-px w-full bg-taupe-200 mt-4 mb-2" />

            <table className="w-full">
                <tbody>
                    <tr className="border-b border-taupe-200">
                        <td className="py-3 text-sm text-taupe-500">Reservation Id</td>
                        <td className="py-3 text-right truncate text-sm text-taupe-900">#{reservation.id}</td>
                    </tr>
                    <tr className="border-b border-taupe-200">
                        <td className="py-3 text-sm text-taupe-500">Name</td>
                        <td className="py-3 text-right truncate text-sm text-taupe-900">{reservation.User.name}</td>
                    </tr>
                    <tr className="border-b border-taupe-200">
                        <td className="py-3 text-sm text-taupe-500">Email</td>
                        <td className="py-3 text-right truncate text-sm text-taupe-900">{reservation.User.email}</td>
                    </tr>
                    <tr className="border-b border-taupe-200">
                        <td className="py-3 text-sm text-taupe-500">Phone Number</td>
                        <td className="py-3 text-right truncate text-sm text-taupe-900">{reservation.User.phone}</td>
                    </tr>
                    <tr className="border-b border-taupe-200">
                        <td className="py-3 text-sm text-taupe-500">Arrival</td>
                        <td className="py-3 text-right truncate text-sm text-taupe-900">{formatDate(reservation.startDate.toISOString())}</td>
                    </tr>
                    <tr className="border-b border-taupe-200">
                        <td className="py-3 text-sm text-taupe-500">Departure</td>
                        <td className="py-3 text-right truncate text-sm text-taupe-900">{formatDate(reservation.endDate.toISOString())}</td>
                    </tr>
                    <tr className="border-b border-taupe-200">
                        <td className="py-3 text-sm text-taupe-500">Duration</td>
                        <td className="py-3 text-right truncate text-sm text-taupe-900">
                            <span>
                                {duration} {duration <= 1 ? "Night" : "Nights"}
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-taupe-200">
                        <td className="py-3 text-sm text-taupe-500">Status</td>
                        <td className="py-3 text-right truncate text-sm text-taupe-900">
                            {reservation.Payment.status}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="flex items-center justify-between pt-5">
                <span className="text-sm text-taupe-500">Amount in Rupiah</span>
                <span className="font-playfair text-2xl text-taupe-900">
                    {formatCurrency(reservation.Payment.amount)}
                </span>
            </div>
        </div>
    </div>
  )
}

export default CheckoutDetail