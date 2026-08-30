import CardSkeleton from "./card-skeleton";

const RoomSkeleton = () => {
  return (
    <div className="max-w-6xl py-6 pb-20 px-4 mx-auto">
      <div className="flex flex-col">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

export default RoomSkeleton;