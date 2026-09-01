import { getReservation } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";

const ReservationList = async () => {
  const reservation = await getReservation();
  if (!reservation)
    return <p className="text-taupe-500 text-sm mt-5">No Reservation Found</p>;

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-taupe-300">
          <th className="py-3 w-24 text-xs font-medium text-taupe-500 uppercase tracking-[0.15em] text-left"></th>
          <th className="py-3 text-xs font-medium text-taupe-500 uppercase tracking-[0.15em] text-left">
            Customer
          </th>
          <th className="py-3 text-xs font-medium text-taupe-500 uppercase tracking-[0.15em] text-left">
            Arrival
          </th>
          <th className="py-3 text-xs font-medium text-taupe-500 uppercase tracking-[0.15em] text-left">
            Departure
          </th>
          <th className="py-3 text-xs font-medium text-taupe-500 uppercase tracking-[0.15em] text-left">
            Room
          </th>
          <th className="py-3 text-xs font-medium text-taupe-500 uppercase tracking-[0.15em] text-left">
            Price
          </th>
          <th className="py-3 text-xs font-medium text-taupe-500 uppercase tracking-[0.15em] text-left">
            Contact
          </th>
          <th className="py-3 text-xs font-medium text-taupe-500 uppercase tracking-[0.15em] text-left">
            Date
          </th>
          <th className="py-3 text-xs font-medium text-taupe-500 uppercase tracking-[0.15em] text-right">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-taupe-100">
        {reservation.map((reserve) => (
          <tr key={reserve.id}>
            <td className="py-4">
              <div className="h-14 w-20 relative">
                <Image
                  src={reserve.Room.image}
                  fill
                  sizes="20vw"
                  alt="Room Image"
                  className="object-cover"
                />
              </div>
            </td>
            <td className="py-4 text-taupe-800">{reserve.User.name}</td>
            <td className="py-4 text-taupe-500 text-sm">
              {formatDate(reserve.startDate.toISOString())}
            </td>
            <td className="py-4 text-taupe-500 text-sm">
              {formatDate(reserve.endDate.toISOString())}
            </td>
            <td className="py-4 text-taupe-800">{reserve.Room.name}</td>
            <td className="py-4 text-taupe-800">
              {formatCurrency(reserve.Room.price)}
            </td>
            <td className="py-4 text-taupe-500 text-sm">{reserve.User.phone}</td>
            <td className="py-4 text-taupe-500 text-sm">
              {formatDate(reserve.createdAt.toString())}
            </td>
            <td className="py-4 text-right">
              <span className="text-xs uppercase tracking-wide text-taupe-700">
                {reserve.Payment?.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReservationList;