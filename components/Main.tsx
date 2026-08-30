import { notFound } from "next/navigation";
import Card from "./Card";
import { getRooms } from "@/lib/data";

const Main = async () => {
  const rooms = await getRooms();
  if(!rooms) return notFound();
   
  return (
    <div className="max-w-6xl py-6 pb-20 px-4 mx-auto">
      <div className="flex flex-col gap-12">
        {rooms.map((room) => (
          <Card room={room} key={room.id}/>
        ))}
        
      </div>
    </div>
  );
};

export default Main;