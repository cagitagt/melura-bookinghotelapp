"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-taupe-800 rounded-md md:hidden hover:bg-gray-100"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>

      {/* navlink */}
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm p-4 mt-4 rounded-sm bg-taupe-50 md:flex-row md:items-center md:space-x-8 md:p-0 md:mt-0 md:border-0 md:bg-taupe-50">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-taupe-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 px-3 text-taupe-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/room"
              className="block py-2 px-3 text-taupe-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-3 text-taupe-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/Reservation"
              className="block py-2 px-3 text-taupe-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Reservation
            </Link>
          </li>
          <li>
            <Link
              href="/admin/dashboard"
              className="block py-2 px-3 text-taupe-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/room"
              className="block py-2 px-3 text-taupe-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Manage Rooms
            </Link>
          </li>  
          <li className="pt-2 md:pt-0">
            <Link href="/signin" className="py-2 px-6 bg-taupe-700 text-white hover:bg-taupe-800 rounded-4xl">Sign In</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navlink;
