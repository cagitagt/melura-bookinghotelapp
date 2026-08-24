import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className="group grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-taupe-100 hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-72 md:h-full min-h-80 overflow-hidden">
        <Image
          src="/assets/img/building.jpg"
          alt="Room"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-taupe-800 flex items-center gap-1.5">
          <IoPeopleOutline className="text-sm" />
          2 people
        </span>
      </div>

      <div className="p-8 md:p-10 flex flex-col justify-center">
        <span className="text-xs uppercase tracking-[0.3em] text-taupe-400 mb-3">
          Room Type
        </span>

        <h4 className="text-3xl font-playfair text-taupe-900 mb-4">
          <Link href="#" className="hover:text-taupe-600 transition-colors duration-200">
            Luxury Room
          </Link>
        </h4>

        <p className="text-taupe-600 leading-relaxed mb-6">
          A spacious retreat featuring handcrafted furniture, premium
          linens, and a private view. Designed for comfort, refined for
          those who appreciate timeless elegance.
        </p>

        <div className="flex items-center justify-between border-t border-taupe-100 pt-6">
          <div>
            <span className="text-2xl font-semibold text-taupe-800">
              Rp 2.100.000
            </span>
            <span className="text-taupe-400 text-sm"> / night</span>
          </div>

          <Link
            href="#"
            className="px-6 py-2.5 text-sm font-medium text-taupe-50 bg-taupe-800 rounded-full hover:bg-taupe-700 transition-colors duration-200"
          >
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;