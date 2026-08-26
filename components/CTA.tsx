import Link from "next/link";
import {
  IoBoatOutline,
  IoRestaurantOutline,
  IoWaterOutline,
  IoWifiOutline,
} from "react-icons/io5";

const CTA = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4 text-center">
      <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
        The Melura Experience
      </span>

      <h2 className="font-playfair text-4xl md:text-5xl font-normal text-taupe-900 mt-3 mb-14">
        More Than a Stay
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mb-16">
        <div>
          <IoBoatOutline className="size-6 text-taupe-600 mx-auto mb-3" />
          <p className="text-sm text-taupe-700">Lake Access</p>
        </div>
        <div>
          <IoRestaurantOutline className="size-6 text-taupe-600 mx-auto mb-3" />
          <p className="text-sm text-taupe-700">Lakeside Dining</p>
        </div>
        <div>
          <IoWaterOutline className="size-6 text-taupe-600 mx-auto mb-3" />
          <p className="text-sm text-taupe-700">Spa &amp; Wellness</p>
        </div>
        <div>
          <IoWifiOutline className="size-6 text-taupe-600 mx-auto mb-3" />
          <p className="text-sm text-taupe-700">Every Comfort</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-10">
        <span className="h-px w-16 bg-taupe-300" />
        <span className="w-1.5 h-1.5 rotate-45 border border-taupe-400" />
        <span className="h-px w-16 bg-taupe-300" />
      </div>

      <p className="text-taupe-600 leading-relaxed mb-8">
        Your quiet corner of Lake Como is waiting.
      </p>

      <Link
        href="/room"
        className="inline-block px-8 py-3 border border-taupe-800 text-taupe-800 rounded-full text-sm font-medium hover:bg-taupe-800 hover:text-taupe-50 transition-colors duration-200"
      >
        Book Your Stay
      </Link>
    </div>
  );
};

export default CTA;