"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Lestcheatfooter = () => {
  const getYear = new Date().getFullYear();
  return (
    <div className=" pb-3 flex justify-center md:px-20 items-center flex-col bg-[#be0002] text-white">
      <div className=" container border-b-2 border-blue-200 shadow-sm min-h-screen flex justify-start flex-col">
        <div className="flex flex-col items-center md:flex-row pt-5 md:pt-24 ">
          <img className=" pr-10" src="/images/FooterLogo.png" alt="" />
          <h1 className="pt-8 md:pt-0 uppercase text-2xl md:text-7xl font-extrabold text-center md:text-left">
            Let's chat?
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-y-0 font-extralight pt-5 md:pt-20">
          <div className="flex flex-col pl-3 md:pl-0">
            <h1 className="font-bold text-2xl pb-4">Quick Links</h1>
            <ul className=" text-xl gap-5">
              <li>Company</li>
              <li>Services</li>
              <li>Solution</li>
              <li>Consulting</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col pl-3 md:pl-0">
            <h1 className="font-bold text-2xl pb-4">Services</h1>
            <ul className="text-lg gap-2">
              <li className=" underline">
                <Link href="https://mobitisinginc.com/mobile-app-development/">
                  Mobile App Development
                </Link>
              </li>
              <li className=" underline">
                <Link href="https://mobitisinginc.com/careers/">
                  Web Development
                </Link>
              </li>
              <li className=" underline">
                <Link href="https://www.figma.com/exit?url=https%3A%2F%2Fgfsitsolutions.com%2FServices%2FUIUXService.html">
                  UI/UX Design
                </Link>
              </li>
              <li className=" underline">
                <Link href="https://www.figma.com/exit?url=https%3A%2F%2Fgfsitsolutions.com%2FServices%2FEcommerceDevService.html">
                  Ecommerce Development
                </Link>
              </li>
              <li className=" underline">
                <Link href="https://mobitisinginc.com/">Game Development</Link>
              </li>
              <li className=" underline">
                <Link href="https://www.figma.com/exit?url=https%3A%2F%2Fgfsitsolutions.com%2FServices%2FBlockChainService.html">
                  Blockchain Development
                </Link>
              </li>
              <li className="underline">
                <Link href="https://mobitisinginc.com/digital-marketing-services/">
                  Digital Marketing Development
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 pl-3 md:pl-0">
            <h1 className="font-bold text-2xl pb-2">Contact Us</h1>
            <p className="flex items-center text-lg">
              <img
                src="/images/Emaillogo.png"
                alt=""
                className="mr-4 h-4 w-18"
              />
              info@Mobitisinginc.com
            </p>
            <p className="flex items-center text-lg">
              <img
                src="/images/CallLogo.png"
                alt=""
                className="mr-4 h-4 w-18"
              />
              +92-2134322370
            </p>
            <p className="flex items-center text-lg">
              <img
                src="/images/LocationLogo.png"
                alt=""
                className="mr-4 h-4 w-18"
              />
              Karachi, Pakistan
            </p>
          </div>
          <div className="flex flex-col px-3 md:px-0">
            <h1 className="font-bold text-2xl pb-4">Follow Us</h1>
            <div className="flex gap-2 pb-5">
              <Link href="https://www.facebook.com/MobiTising/" passHref>
                <Image
                  src="/images/FacebookLogo.png"
                  alt="Facebook Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <Image
                src="/images/InstagramLogo.png"
                alt="Instagram Logo"
                width={50}
                height={50}
              />
              <Link
                href="https://www.linkedin.com/company/mobitising/mycompany/"
                passHref
              >
                <Image
                  src="/images/LinkedinLogo.png"
                  alt="Linkedin Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCBmwijUXlNO5UhMIxfmMHyQ"
                passHref
              >
                <Image
                  src="/images/YoutubeLogo (1).png"
                  alt="Youtube Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className=" md:text-lg lg:text-xl font-sans font-thin pt-3">
          Copyright © {getYear} MOBITISING IT SOLUTIONS. All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Lestcheatfooter;
