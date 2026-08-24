import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-taupe-50 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between md:px-12 py-2 px-5">
        <Link href="/">
          <Image
            src="/assets/svg/cagitalogoblack.svg"
            alt="Cagita Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
        <Navlink />
      </div>
    </div>
  );
};

export default Navbar;
