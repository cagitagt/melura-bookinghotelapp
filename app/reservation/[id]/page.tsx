import ReservationDetail from "@/components/reservation-detail";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Reservation Detail",
};

const MyReservationDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const reservationId = (await params).id;
  return (
    <div className="min-h-screen bg-taupe-50">
      <div className="max-w-5xl mx-auto mt-10 py-20 px-4">

        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
            Melura Hotel — Lake Como, Italy
          </span>
        </div>
        <h1 className="font-playfair text-4xl md:text-5xl font-normal text-taupe-900 text-center mb-14">
          Reservation Detail
        </h1>

        {/* Reservation detail */}
        <Suspense fallback={<p className="text-center text-taupe-500 text-sm">Loading...</p>}>
          <ReservationDetail reservationId={reservationId} />
        </Suspense>
      </div>
    </div>
  );
};

export default MyReservationDetail;