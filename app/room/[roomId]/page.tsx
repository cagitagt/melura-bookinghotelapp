import { Metadata } from "next";
import RoomDetail from "@/components/room-details";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Romm Detail",
};

const RoomDetailPage = async ({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) => {
  const roomId = (await params).roomId;
  return (
    <div className="mt-16">
      <Suspense fallback={<p>Loading...</p>}>
        <RoomDetail roomId={roomId} />
      </Suspense>
    </div>
  );
};

export default RoomDetailPage;
