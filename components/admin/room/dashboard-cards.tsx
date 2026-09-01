import { getRevenueandReserve, getTotalCustomers } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { notFound } from "next/navigation";
import { LuChartArea, LuShoppingCart, LuUsers } from "react-icons/lu";

const DashboardCards = async () => {
  const [data, customer] = await Promise.all([
    getRevenueandReserve(),
    getTotalCustomers(),
  ]);

  if (!data || !customer) return notFound();
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-10">
      <div className="bg-taupe-50 border-l-2 border-taupe-800 py-6 px-6">
        <div className="flex items-center gap-2 text-taupe-500 mb-3">
          <LuChartArea className="size-4" />
          <h3 className="text-xs uppercase tracking-[0.2em]">Total Revenue</h3>
        </div>
        <p className="text-3xl font-playfair font-normal text-taupe-900">
          {formatCurrency(data.revenue)}
        </p>
      </div>
      <div className="bg-taupe-50 border-l-2 border-taupe-800 py-6 px-6">
        <div className="flex items-center gap-2 text-taupe-500 mb-3">
          <LuShoppingCart className="size-4" />
          <h3 className="text-xs uppercase tracking-[0.2em]">Total Reservation</h3>
        </div>
        <p className="text-3xl font-playfair font-normal text-taupe-900">
          {data.reserve}
        </p>
      </div>
      <div className="bg-taupe-50 border-l-2 border-taupe-800 py-6 px-6">
        <div className="flex items-center gap-2 text-taupe-500 mb-3">
          <LuUsers className="size-4" />
          <h3 className="text-xs uppercase tracking-[0.2em]">Total Customers</h3>
        </div>
        <p className="text-3xl font-playfair font-normal text-taupe-900">
          {customer.length}
        </p>
      </div>
    </div>
  );
};

export default DashboardCards;