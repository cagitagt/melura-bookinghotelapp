import CreateForm from "./create-form";
import { getAmenities } from "@/lib/data";

const CreateRoom = async () => {
  const amenities = await getAmenities();
  if (!amenities) return null;

  return (
    <div>
      <h1 className="text-2xl font-playfair font-normal text-taupe-900 mb-6">
        Create New Room
      </h1>
      <CreateForm amenities={amenities} />
    </div>
  );
};

export default CreateRoom;