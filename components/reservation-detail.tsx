import { getReservationById } from "@/lib/data"
import { formatCurrency,formatDate } from "@/lib/utils";
import { differenceInCalendarDays } from "date-fns";
import { notFound } from "next/navigation";
    

const ReservationDetail = async ({reservationId}: {reservationId: string}) => {
    const reservation = await getReservationById(reservationId);
    if(!reservation) return notFound();

  return (
    <div className="w-full border border-taupe-200 bg-white px-6 py-8 md:px-10 md:py-10">

        <span className="text-xs uppercase tracking-[0.3em] text-taupe-500">
            Reservation Detail
        </span>
        <div className="h-px w-full bg-taupe-200 mt-4 mb-2" />

        <div className="grid md:grid-cols-2 md:gap-x-10">
            <ul>
                <li className="py-3 border-b border-taupe-200 flex items-center justify-between">
                    <span className="text-sm text-taupe-500">Reservation Id</span>
                    <span className="text-sm text-taupe-900">#{reservation.id}</span>
                </li>
                <li className="py-3 border-b border-taupe-200 flex items-center justify-between">
                    <span className="text-sm text-taupe-500">Book Date</span>
                    <span className="text-sm text-taupe-900">{formatDate(reservation.createdAt.toISOString())}</span>
                </li>
                <li className="py-3 border-b border-taupe-200 flex items-center justify-between md:border-b-0">
                    <span className="text-sm text-taupe-500">Name</span>
                    <span className="text-sm text-taupe-900">{reservation.User.name}</span>
                </li>
                <li className="py-3 border-b border-taupe-200 flex items-center justify-between md:border-b-0">
                    <span className="text-sm text-taupe-500">Email</span>
                    <span className="text-sm text-taupe-900">{reservation.User.email}</span>
                </li>
            </ul>
            <ul>
                <li className="py-3 border-b border-taupe-200 flex items-center justify-between">
                    <span className="text-sm text-taupe-500">Phone Number</span>
                    <span className="text-sm text-taupe-900">{reservation.User.phone}</span>
                </li>
                <li className="py-3 border-b border-taupe-200 flex items-center justify-between">
                    <span className="text-sm text-taupe-500">Payment Method</span>
                    <span className="text-sm text-taupe-900 capitalize">{reservation.Payment?.method ? reservation.Payment.method.replace("_", " "): null}</span>
                </li>
                <li className="py-3 flex items-center justify-between">
                    <span className="text-sm text-taupe-500">Payment Status</span>
                    <span className="text-sm text-taupe-900 uppercase tracking-wide">{reservation.Payment?.status}</span>
                </li>
            </ul>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto mt-10">
            <span className="text-xs uppercase tracking-[0.3em] text-taupe-500">
                Stay
            </span>
            <div className="h-px w-full bg-taupe-200 mt-4 mb-2" />

            <table className="w-full text-sm text-left">
                <thead className="text-xs text-taupe-500 uppercase tracking-wide">
                    <tr>
                        <th className="py-3 font-normal">Room</th>
                        <th className="py-3 font-normal min-w-40 md:min-w-0">Arrival</th>
                        <th className="py-3 font-normal">Departure</th>
                        <th className="py-3 font-normal">Duration</th>
                        <th className="py-3 font-normal text-right">Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t border-taupe-200">
                        <td className="py-4">
                            <div className="flex flex-col">
                                <span className="font-medium text-taupe-900 whitespace-nowrap">{reservation.Room.name}</span>
                                <span className="text-taupe-500 text-xs mt-0.5">Price: {formatCurrency(reservation.price)}</span>
                            </div>
                        </td>
                        <td className="py-4 text-taupe-700">{formatDate(reservation.startDate.toISOString())}</td>
                        <td className="py-4 text-taupe-700">{formatDate(reservation.endDate.toISOString())}</td>
                        <td className="py-4 text-taupe-700">{differenceInCalendarDays(reservation.endDate, reservation.startDate)} Night</td>
                        <td className="py-4 text-right text-taupe-900">{reservation.Payment && formatCurrency(reservation.Payment.amount)}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="border-t border-taupe-200">
                        <td className="py-4 text-taupe-500 text-xs uppercase tracking-wide" colSpan={4}>Total</td>
                        <td className="py-4 text-right font-playfair text-xl text-taupe-900" colSpan={1}>{reservation.Payment && formatCurrency(reservation.Payment.amount)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}

export default ReservationDetail