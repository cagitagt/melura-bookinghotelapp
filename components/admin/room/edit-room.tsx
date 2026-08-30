import EditForm from "./edit-form";
import { getAmenities, getRoomById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditRoom = async ({roomId}: {roomId:string}) => {
    const [amenities, room] = await Promise.all([getAmenities(), getRoomById(roomId)]);
  if (!amenities || !room) return notFound();

  return (
    <div>
      <h1 className="text-2xl font-playfair font-normal text-taupe-900 mb-6">
        Edit Room
      </h1>
      <EditForm amenities={amenities} room={room}/>
    </div>
  );
};

export default EditRoom;