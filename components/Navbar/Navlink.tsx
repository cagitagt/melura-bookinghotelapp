"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { useSession, signOut } from "next-auth/react";

const Navlink = () => {
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();
  return (
    <>
      {/* conditional rendering button signout & avatar untuk user*/}
      {session?.user ? (
        <div className="flex items-center justify-end md:order-2">
          <div className="hidden text-sm bg-taupe-100 border rounded-full md:me-0 md:block focus:ring-4 focus:ring-taupe-800">
            <Image
              src={session.user.image || "/assets/img/avatar.jpeg"}
              alt="avatar"
              width={35}
              height={35}
              className="rounded-full"
            />
          </div>

          <div className="flex items-center">
            <button
              onClick={() => signOut()}
              className="md:block hidden py-2 px-4 bg-taupe-50 text-taupe-800 hover:bg-taupe-100 rounded-full cursor-pointer ml-2"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : null}

      {/* hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-taupe-800 rounded-full md:hidden hover:bg-taupe-100 transition-colors duration-200"
      >
        {!open ? <IoMenu className="size-7" /> : <IoClose className="size-7" />}
      </button>

      {/* navlink */}
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col text-sm p-6 mt-4 rounded-2xl bg-taupe-50 shadow-sm border border-taupe-100 md:flex-row md:items-center md:gap-1 md:p-0 md:mt-0 md:border-0 md:shadow-none md:bg-transparent">
          <li>
            <Link
              href="/"
              className="block py-2.5 px-4 text-taupe-700 hover:text-taupe-900 rounded-full md:hover:bg-taupe-100 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2.5 px-4 text-taupe-700 hover:text-taupe-900 rounded-full md:hover:bg-taupe-100 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/room"
              className="block py-2.5 px-4 text-taupe-700 hover:text-taupe-900 rounded-full md:hover:bg-taupe-100 transition-colors duration-200"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2.5 px-4 text-taupe-700 hover:text-taupe-900 rounded-full md:hover:bg-taupe-100 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
          {/* conditional rendering login only*/}
          {session && (
            <>
              {/* conditional rendering for user */}
              <li>
                <Link
                  href="/reservation"
                  className="block py-2.5 px-4 text-taupe-700 hover:text-taupe-900 rounded-full md:hover:bg-taupe-100 transition-colors duration-200"
                >
                  Reservation
                </Link>
              </li>
              {/* conditional rendering for admin */}
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link
                      href="/admin/dashboard"
                      className="block py-2.5 px-4 text-taupe-700 hover:text-taupe-900 rounded-full md:hover:bg-taupe-100 transition-colors duration-200"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/room"
                      className="block py-2.5 px-4 text-taupe-700 hover:text-taupe-900 rounded-full md:hover:bg-taupe-100 transition-colors duration-200"
                    >
                      Manage Rooms
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
          {/* conditional rendering -> jika ada session render signout jika tdk sign in */}
          {session ? (
            <li className="pt-3 md:pt-0 md:ml-3">
              <button
                onClick={() => signOut()}
                className="md:hidden block text-center py-2.5 px-6 bg-red-800 text-taupe-50 hover:bg-red-700 rounded-full text-sm font-medium transition-colors cursor-pointer duration-200"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li className="pt-3 md:pt-0 md:ml-3">
              <Link
                href="/signin"
                className="block text-center py-2.5 px-6 bg-taupe-800 text-taupe-50 hover:bg-taupe-700 rounded-full text-sm font-medium transition-colors duration-200"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navlink;
