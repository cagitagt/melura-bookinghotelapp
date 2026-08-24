import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative mx-4 mt-20 mb-8 h-140 overflow-hidden rounded-4xl text-white md:mx-8 ">
      {/* Background */}
      <Image
        src="/assets/img/building.jpg"
        alt="Melura Hotel"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-between p-7 md:p-10">
        
        {/* Top */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/80">
            Melura Hotel
          </span>

          <span className="hidden text-xs text-white/70 sm:block">
            Comfort · Elegance · Experience
          </span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          
          {/* Headline */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/70">
              Your stay starts here
            </p>

            <h1 className="max-w-2xl font-playfair text-5xl font-normal leading-[1.05] md:text-7xl lg:text-8xl">
              Stay.
              <br />
              <span className="italic">Relax.</span>
              <br />
              Belong.
            </h1>
          </div>

          {/* Offer Card */}
          <div className="w-full max-w-xs rounded-2xl border border-white/30 bg-white/80 p-5 text-taupe-800 shadow-xl backdrop-blur-md">
            <p className=" text-sm font-medium leading-snug font-lato">
              Book your luxury room and make your stay <span className="font-extrabold">more special.</span>
            </p>

            <div className="mt-3 flex gap-2">
              <Link
                href="/room"
                className="flex-1 rounded-full bg-taupe-700 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-taupe-800"
              >
                Book now
              </Link>

              <Link
                href="/contact"
                className="flex-1 rounded-full border bg-taupe-200 border-taupe-500 px-4 py-2.5 text-center text-sm font-medium transition hover:bg-taupe-50"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;