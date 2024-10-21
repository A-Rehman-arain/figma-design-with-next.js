import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";

const Navbar = ()=> {
    return(
   <div className="bg-white z-50 sticky top-0">
       <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
          src={require("../../../public/assests/picture/logo.svg")}
          width={100}
          height={100}
          alt="abdul rehman"
          className="h-12"
          />
              <span className="ml-3 text-xl">Abdul Rehman</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"}  className="mr-5 cursor-pointer hover:text-gray-900">Home</Link>
          <Link href={"#"} className="mr-5 cursor-pointer hover:text-gray-900">About</Link>
          <Link href={"#"} className="mr-5 cursor-pointer hover:text-gray-900">Skills</Link>
          <Link href={"#"} className="mr-5 cursor-pointer hover:text-gray-900">Projects</Link>
          <Link href={"#Contact"} className="mr-5 cursor-pointer hover:text-gray-900">Contact</Link>
        </nav>
        <a >
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Download CV
          <IoMdDownload className="ml-1 text-xl"/>
        </button>
        </a>
        </div>
    </header>
 </div>
);
};
export default  Navbar