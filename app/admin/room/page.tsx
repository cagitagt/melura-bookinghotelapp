import Link from "next/link";
import RoomTable from "@/components/admin/room/room-table";
import { Suspense } from "react";

const RoomPage = () => {
  return (
    <div className="max-w-7xl px-4 py-16 mt-10 mx-auto">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-playfair font-normal text-taupe-900">
          Room List
        </h1>
        <Link
          href="/admin/room/create"
          className="bg-taupe-800 px-6 py-2.5 hover:bg-taupe-700 text-taupe-50 text-sm font-medium rounded-full transition-colors duration-200"
        >
          Create New
        </Link>
      </div>
      <Suspense fallback={<p className="text-taupe-500 text-sm mt-5">Loading data...</p>}>
        <RoomTable />
      </Suspense>
    </div>
  );
};

export default RoomPage;