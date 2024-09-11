"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const data = usePathname();

  return (
    <div className="flex justify-center items-center">
      <div className="container max-w-full">
        <nav className="bg-[#5b7bb8] dark:bg-gray-900 w-full z-20 top-0 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/images/navlogo (2).png"
                height={80}
                width={75}
                alt="Logo"
              />
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link
                href="/contentus/"
                aria-current="page"
                className="bg-white hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Contect us
              </Link>
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between w-full md:flex md:w-auto ${
                isOpen ? "" : "hidden"
              }`}
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/contentus/"
                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                    aria-current="page"
                  >
                    Company
                  </Link>
                </li>

                <li className="relative">
                  <button
                    onClick={toggleServices}
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-expanded={isServicesOpen}
                  >
                    Services
                  </button>
                  {isServicesOpen && (
                    <ul className="absolute bg-white text-gray-800 rounded-md shadow-md z-10">
                      <li>
                        <Link
                          href="/digital/"
                          className="block py-2 px-3 hover:bg-gray-100"
                        >
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-2 px-3 hover:bg-gray-100"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-2 px-3 hover:bg-gray-100"
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    href="/consulting/"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Consulting
                  </Link>
                </li>
                {data != "/contentus" && (
                  <li>
                    <Link
                      href="/career/"
                      className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Careers
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href="/blogpages/"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
