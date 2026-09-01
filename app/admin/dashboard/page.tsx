import DashboardCards from "@/components/admin/room/dashboard-cards";
import ReservationList from "@/components/admin/room/reservation-list";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return (
    <div className="max-w-6xl px-4 py-16 mt-10 mx-auto">
      <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
        Overview
      </span>
      <h1 className="font-playfair text-4xl font-normal text-taupe-900 mt-2 mb-10">
        Dashboard
      </h1>
      <Suspense fallback={<p className="text-taupe-500 text-sm">Loading card...</p>}>
        <DashboardCards />
      </Suspense>
      <Suspense fallback={<p className="text-taupe-500 text-sm">Loading card...</p>}>
        <ReservationList />
      </Suspense>
    </div>
  );
};

export default DashboardPage;