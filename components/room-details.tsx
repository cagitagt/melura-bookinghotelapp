import { getRoomDetailById, getDisableRoomById } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IoCheckmark, IoPeopleOutline } from "react-icons/io5";
import { formatCurrency } from "@/lib/utils";
import ReserveForm from "./reserve-form";

const RoomDetail = async ({ roomId }: { roomId: string }) => {
  const [room, disabledDate] = await Promise.all([
    getRoomDetailById(roomId), 
    getDisableRoomById(roomId)
  ]);
  if (!room || !disabledDate) return notFound();
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={room.image}
            alt={room.name}
            fill
            priority
            className="object-cover"
          />
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-taupe-400">
          Room
        </span>
        <h1 className="font-playfair text-4xl md:text-5xl font-normal text-taupe-900 mt-3 mb-6">
          {room.name}
        </h1>
        <p className="text-taupe-600 leading-relaxed">{room.description}</p>

        <div className="mt-10 pt-8 border-t border-taupe-100">
          <h5 className="text-xs uppercase tracking-[0.2em] text-taupe-400 mb-5">
            Amenities
          </h5>
          <div className="grid md:grid-cols-3 gap-y-3">
            {room.RoomAmenities.map((item) => (
              <div key={item.id} className="flex items-center gap-2 text-taupe-700">
                <IoCheckmark className="size-4 text-taupe-500" />
                <span className="text-sm">{item.Amenities.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-4">
        <div className="sticky top-24 bg-white border border-taupe-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-taupe-100">
            <div className="flex items-center gap-2 text-taupe-600">
              <IoPeopleOutline className="size-4" />
              <span className="text-sm">
                {room.capacity} {room.capacity === 1 ? "person" : "people"}
              </span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-playfair text-taupe-900">
                {formatCurrency(room.price)}
              </span>
              <span className="text-taupe-400 text-sm"> / night</span>
            </div>
          </div>
          {/* Reservation Form */}
          <ReserveForm room={room} disabledDate={disabledDate}/>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;