import { getRooms } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";
import { DeleteButton, EditButton } from "./button";

const RoomTable = async () => {
  const rooms = await getRooms();
  if (!rooms?.length)
    return <p className="text-taupe-500 text-sm mt-5">No Room Found</p>;

  return (
    <div className="bg-white rounded-2xl border border-taupe-100 mt-5 overflow-hidden">
      <table className="w-full divide-y divide-taupe-100">
        <thead>
          <tr>
            <th className="px-6 py-4 w-32 text-xs font-medium text-taupe-400 uppercase tracking-wide text-left">
              Image
            </th>
            <th className="px-6 py-4 text-xs font-medium text-taupe-400 uppercase tracking-wide text-left">
              Room Name
            </th>
            <th className="px-6 py-4 text-xs font-medium text-taupe-400 uppercase tracking-wide text-left">
              Price
            </th>
            <th className="px-6 py-4 text-xs font-medium text-taupe-400 uppercase tracking-wide text-left">
              Created At
            </th>
            <th className="px-6 py-4 text-xs font-medium text-taupe-400 uppercase tracking-wide">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-taupe-100">
          {rooms.map((room) => (
            <tr
              key={room.id}
              className="hover:bg-taupe-50 transition-colors duration-150"
            >
              <td className="px-6 py-4">
                <div className="h-16 w-24 relative rounded-lg overflow-hidden">
                  <Image
                    src={room.image}
                    fill
                    sizes="20vw"
                    alt="Room Image"
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="px-6 py-4 text-taupe-800 font-medium">
                {room.name}
              </td>
              <td className="px-6 py-4 text-taupe-600">
                {formatCurrency(room.price)}
              </td>
              <td className="px-6 py-4 text-taupe-500 text-sm">
                {formatDate(room.createdAt.toString())}
              </td>
              <td className="px-6 py-4  ">
                <div className="flex items-center justify-center gap-1">
                  <EditButton id={room.id} />
                  <DeleteButton id={room.id} image={room.image} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;
