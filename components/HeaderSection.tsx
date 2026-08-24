import Image from "next/image";

const HeaderSection = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <header className="mx-4 mt-20 mb-8 bg-taupe-50 rounded-4xl p-3 md:p-4">
      <div className="relative h-88 md:h-96 rounded-3xl overflow-hidden text-white">
        <Image
          src="/assets/img/building.jpg"
          alt="Header Image"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <span className="text-xs uppercase tracking-[0.4em] text-white/70">
            Melura Hotel
          </span>

          <h1 className="font-playfair text-4xl md:text-5xl font-normal leading-tight capitalize mt-4">
            {title}
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-px w-10 bg-white/40" />
            <span className="w-1.5 h-1.5 rotate-45 border border-white/60" />
            <span className="h-px w-10 bg-white/40" />
          </div>

          <p className="text-base text-white/80 mt-6 max-w-sm">
            {subTitle}
          </p>
        </div>

        <span className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/50" />
        <span className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/50" />
        <span className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/50" />
        <span className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/50" />
      </div>
    </header>
  );
};

export default HeaderSection;