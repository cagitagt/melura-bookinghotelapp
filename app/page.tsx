import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Main from "@/components/Main";


export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mx-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between border-b border-taupe-200 pb-8 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
                Timeless elegance
              </span>
              <h1 className="mt-5 text-6xl md:text-7xl font-normal font-playfair text-taupe-900 leading-none">
                Rooms and Suites
              </h1>
            </div>
            <span className="hidden md:block font-playfair italic text-taupe-300 text-2xl">
              N&deg; 01
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            <p className="text-lg font-playfair italic text-taupe-700 leading-relaxed first-letter:text-6xl first-letter:font-playfair first-letter:font-normal first-letter:text-taupe-900 first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
              The rooms at Melura Hotel are thoughtfully designed, each
              featuring carefully selected furniture, premium soft linens,
              and refined details that create a truly comfortable stay.
              Every room offers a beautiful view, whether overlooking the
              garden, the city, or the peaceful surroundings.
            </p>

            <p className="text-base text-taupe-600 leading-relaxed">
              We continuously renovate our spaces to preserve a warm,
              timeless atmosphere paired with modern comfort. Each room is
              equipped with air conditioning, a flat-screen TV, minibar,
              safe, WiFi, and a private bathroom with a shower, separate
              toilet, and double sink.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20">
          <Main />
          <CTA/>
        </div>
      </div>
    </div>
  );
}