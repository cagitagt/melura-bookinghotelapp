import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-taupe-900 text-taupe-50">
      <div className="mx-auto max-w-7xl px-8 py-14 md:px-10 md:py-16">
        {/* Top */}
        <div className="flex flex-col gap-12 border-b border-taupe-700/50 pb-12 md:flex-row md:items-start md:justify-between">
          
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/svg/cagitalogowhite.svg"
                alt="Melura"
                width={110}
                height={45}
              />
            </Link>

            <p className="mt-6 text-3xl font-light leading-snug tracking-tight md:text-4xl">
              Your stay,
              <br />
              <span className="text-taupe-300">your comfort.</span>
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-taupe-300">
              Discover comfortable stays and make every moment of your journey
              feel like home.
            </p>

            <a
              href="mailto:cagitadianayunin@gmail.com"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-taupe-50 px-6 py-3 text-sm font-medium text-taupe-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-taupe-200"
            >
              Get in touch
            </a>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-16 sm:gap-24 md:pt-2">
            
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-taupe-400">
                Explore
              </p>

              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-taupe-300"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-taupe-300"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/room"
                    className="transition-colors hover:text-taupe-300"
                  >
                    Our Rooms
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-taupe-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-taupe-400">
                Support
              </p>

              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="transition-colors hover:text-taupe-300"
                  >
                    Terms
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="transition-colors hover:text-taupe-300"
                  >
                    Payment
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="transition-colors hover:text-taupe-300"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-6 text-xs text-taupe-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Melura. All rights reserved.</p>

          <a
            href="https://www.instagram.com/caaagt/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 transition-colors hover:text-taupe-50"
          >
            <span className="text-base transition-transform group-hover:-translate-y-0.5">
              ♡
            </span>
            Cagita Dian
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;