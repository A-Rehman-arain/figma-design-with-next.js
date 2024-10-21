"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {
  return (
   <section className="text-gray-600 body-font">
    <div
      className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center"
      
    >
      <div
        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
       
      >
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          I am our Website
        </h1>
           
        <p className="mb-8 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere excepturi, nulla natus eveniet autem sit praesentium hic iusto, laudantium quidem temporibus velit, iure voluptate harum ipsam a libero quo fugit!
        </p>
        <div className="flex justify-center" >
          <Link href={"#Contact"}>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Contact
          </button></Link>


            </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
        <Image
          className="object-cover object-center rounded mx-auto w-[20rem]  h-[30px]"
          alt="pic"
          width={300}
          height={300}
          src={require("../../../public/assests/picture/IMG-20240709-WA0024.jpg")}
          quality={100}
          layout="intrinsic" 
          objectFit="cover"
        />
      </div>
    </div>
  </section>
  
  );
};

export default Hero