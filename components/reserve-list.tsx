import Image from "next/image"
import { getReservationByUserId } from "@/lib/data"
import { notFound } from "next/navigation";
import { formatCurrency, formatDate } from "@/lib/utils";
import {differenceInCalendarDays } from "date-fns";
import Link from "next/link";

const ReserveList = async () => {
    const reservation = await getReservationByUserId();
    if(!reservation) return notFound();
  return (
    <div className="flex flex-col gap-6">
        {reservation.map((item) => (
            <div key={item.id} className="border border-taupe-200 bg-white">

                <div className="flex items-center justify-between px-5 py-3 border-b border-taupe-200">
                    <h1 className="text-xs uppercase tracking-[0.2em] text-taupe-500 truncate">
                        Reservation #{item.id}
                    </h1>
                    <div className="flex items-center gap-1.5 text-xs">
                        <span className="text-taupe-400">Status</span>
                        <span className="uppercase tracking-wide text-taupe-900">{item.Payment?.status}</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="relative w-full h-56 md:h-auto md:w-1/3">
                        <Image src={item.Room.image} fill className="object-cover" alt=""/>
                    </div>

                    <div className="flex-1 px-6 py-5">
                        <table className="w-full">
                            <tbody>
                                <tr className="border-b border-taupe-100">
                                    <td className="py-2 text-sm text-taupe-500">Price</td>
                                    <td className="py-2 text-sm text-taupe-900 text-right">{formatCurrency(item.price)}</td>
                                </tr>
                                <tr className="border-b border-taupe-100">
                                    <td className="py-2 text-sm text-taupe-500">Arrival</td>
                                    <td className="py-2 text-sm text-taupe-900 text-right">{formatDate(item.startDate.toISOString())}</td>
                                </tr>
                                <tr className="border-b border-taupe-100">
                                    <td className="py-2 text-sm text-taupe-500">Departure</td>
                                    <td className="py-2 text-sm text-taupe-900 text-right">{formatDate(item.endDate.toISOString())}</td>
                                </tr>
                                <tr className="border-b border-taupe-100">
                                    <td className="py-2 text-sm text-taupe-500">Duration</td>
                                    <td className="py-2 text-sm text-taupe-900 text-right">
                                        {differenceInCalendarDays(item.endDate, item.startDate)} Night
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="flex items-center justify-between pt-4">
                            <div>
                                <span className="text-xs text-taupe-500 block mb-0.5">Sub Total</span>
                                <span className="font-playfair text-xl text-taupe-900">
                                    {item.Payment && formatCurrency(item.Payment.amount)}
                                </span>
                            </div>

                            {item.Payment?.status === "unpaid" ? (
                                <Link
                                    href={`/checkout/${item.id}`}
                                    className="px-5 py-2 text-xs uppercase tracking-wide border border-taupe-900 text-taupe-900 hover:bg-taupe-900 hover:text-white transition-colors duration-200"
                                >
                                    Pay Now
                                </Link>
                            ) : (
                                <Link
                                    href={`/reservation/${item.id}`}
                                    className="px-5 py-2 text-xs uppercase tracking-wide border border-taupe-300 text-taupe-600 hover:border-taupe-900 hover:text-taupe-900 transition-colors duration-200"
                                >
                                    View Detail
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ReserveList