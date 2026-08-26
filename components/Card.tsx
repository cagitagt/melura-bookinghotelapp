import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className="group grid md:grid-cols-2 gap-10 md:gap-14 items-center py-10 border-b border-taupe-100">
      <div className="relative h-80 md:h-[420px] overflow-hidden rounded-sm">
        <Image
          src="/assets/img/building.jpg"
          alt="Room"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs uppercase tracking-[0.35em] text-taupe-400">
            Room Type
          </span>
          <span className="h-px flex-1 bg-taupe-200" />
          <span className="flex items-center gap-1.5 text-xs text-taupe-500">
            <IoPeopleOutline className="text-sm" />
            2 people
          </span>
        </div>

        <h4 className="text-4xl font-playfair font-normal text-taupe-900 mb-6">
          <Link href="#" className="hover:text-taupe-600 transition-colors duration-300">
            Luxury Room
          </Link>
        </h4>

        <p className="text-taupe-600 leading-relaxed mb-10 max-w-md">
          A spacious retreat featuring handcrafted furniture, premium
          linens, and a private view. Designed for comfort, refined for
          those who appreciate timeless elegance.
        </p>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-taupe-400 block mb-1">
              From
            </span>
            <span className="text-2xl font-playfair text-taupe-900">
              Rp 2.100.000
            </span>
            <span className="text-taupe-400 text-sm"> / night</span>
          </div>

          <Link
            href="#"
            className="text-sm font-medium text-taupe-900 border-b border-taupe-900 pb-0.5 hover:text-taupe-600 hover:border-taupe-600 transition-colors duration-300"
          >
            Book now →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;