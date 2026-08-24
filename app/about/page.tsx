import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";
import Link from "next/link";
import {
  IoEyeOutline,
  IoCompassOutline,
  IoBoatOutline,
  IoLeafOutline,
  IoSparklesOutline,
} from "react-icons/io5";

const Page = () => {
  return (
    <div>
      <HeaderSection
        title="About Us"
        subTitle="A story of comfort, elegance, and timeless hospitality on the shores of Lake Como."
      />

      <div className="max-w-5xl mx-auto py-20 px-4">
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
            Est. Melura Hotel — Lake Como, Italy
          </span>
        </div>
        <h1 className="font-playfair text-4xl md:text-5xl font-normal text-taupe-900 text-center mb-6">
          Who We Are
        </h1>
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className="h-px w-16 bg-taupe-300" />
          <span className="w-2 h-2 rotate-45 border border-taupe-400" />
          <span className="h-px w-16 bg-taupe-300" />
        </div>

        <div className="relative h-72 md:h-96 overflow-hidden mb-4 border-8 border-white shadow-lg mx-auto max-w-3xl">
          <Image
            src="/assets/img/gardenn.png"
            alt="Melura garden view "
            fill
            className="object-cover object-center"
          />
        </div>

        <p className="text-center font-playfair italic text-taupe-500 text-sm mb-16">
          Melura garden view 
        </p>

        <p className="text-taupe-600 leading-relaxed text-center max-w-2xl mx-auto mb-20 first-letter:font-playfair first-letter:text-6xl first-letter:font-normal first-letter:text-taupe-900 first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
          Set along the quiet shoreline of Lake Como, Melura was built on
          a simple conviction: that a place shaped by such beauty deserved
          hospitality of equal grace. Here, terraced gardens meet still
          water, and the surrounding mountains stand like old guardians
          over every guest who arrives. Within our walls, that same
          stillness is carried through in the pace of service, the
          quiet of the rooms, and the warmth of a welcome that never
          feels rushed.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-taupe-200 border border-taupe-200 max-w-3xl mx-auto">
          <div className="bg-taupe-50 p-10 text-center">
            <IoEyeOutline className="size-7 text-taupe-700 mx-auto my-4" />
            <h4 className="text-xl font-playfair text-taupe-900 mb-3">
              Our Vision
            </h4>
            <p className="text-taupe-600 leading-relaxed text-sm">
              To be as timeless as the lake itself. a place guests
              return to, season after season.
            </p>
          </div>

          <div className="bg-taupe-50 p-10 text-center">
            <IoCompassOutline className="size-7 text-taupe-700 mx-auto my-4" />
            <h4 className="text-xl font-playfair text-taupe-900 mb-3">
              Our Mission
            </h4>
            <p className="text-taupe-600 leading-relaxed text-sm">
              To care for every guest the way this shoreline has always
              cared for those who find their way to it.
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-taupe-800 py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-taupe-50">
            <span className="text-xs uppercase tracking-[0.4em] text-taupe-400">
              Our Setting
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-normal mt-3 mb-6">
              On the Shores of Lake Como
            </h2>
            <p className="text-taupe-300 leading-relaxed mb-6">
              Tucked between the water and the hills of northern Italy,
              Melura sits in one of the country&apos;s most storied
              corners a region long favored by those seeking quiet
              beauty over noise. Villages in pastel hues rise from the
              shoreline, ferries cross the lake at their own unhurried
              pace, and every view seems arranged by hand.
            </p>
            <p className="text-taupe-300 leading-relaxed">
              From our terrace, guests wake to mountains reflected in
              still water. a setting Melura was built to honor, not
              compete with.
            </p>
          </div>

          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden">
            <Image
              src="/assets/img/garden.jpg"
              alt="Lake Como view near Melura Hotel"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto py-20 px-4">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
            Why Melura
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-normal text-taupe-900 mt-3">
            What Sets Us Apart
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <IoBoatOutline className="size-8 text-taupe-700 mx-auto mb-4" />
            <h4 className="font-playfair text-lg text-taupe-900 mb-2">
              Lakefront Living
            </h4>
            <p className="text-taupe-600 text-sm leading-relaxed">
              Steps from the water, with private access to the lake and
              views that change gently with the hour.
            </p>
          </div>
          <div className="text-center">
            <IoLeafOutline className="size-8 text-taupe-700 mx-auto mb-4" />
            <h4 className="font-playfair text-lg text-taupe-900 mb-2">
              A Peaceful Retreat
            </h4>
            <p className="text-taupe-600 text-sm leading-relaxed">
              Terraced gardens and mountain air offer a quiet distance
              from the pace of everyday life.
            </p>
          </div>
          <div className="text-center">
            <IoSparklesOutline className="size-8 text-taupe-700 mx-auto mb-4" />
            <h4 className="font-playfair text-lg text-taupe-900 mb-2">
              Genuine Hospitality
            </h4>
            <p className="text-taupe-600 text-sm leading-relaxed">
              Our staff greets every guest not as a booking, but as
              someone worth truly taking care of.
            </p>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="mx-4 mb-20">
        <div className="max-w-5xl mx-auto relative h-72 rounded-3xl overflow-hidden">
          <Image
            src="/assets/img/building.jpg"
            alt="Book your stay at Melura, Lake Como"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-white">
            <h3 className="font-playfair text-3xl md:text-4xl mb-6">
              Come see it for yourself.
            </h3>
            <Link
              href="/room"
              className="px-8 py-3 bg-taupe-50 text-taupe-900 rounded-full text-sm font-medium hover:bg-white transition-colors duration-200"
            >
              View Our Rooms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;