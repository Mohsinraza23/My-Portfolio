"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import mohsinImage from '../../../public/picture/mohsinraza.jpeg'; // Import the image here

const Hero = () => {
  return (
    <section className="text-white body-font bg-fixed bg-cover bg-center custom-image font-semibold">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "front-end developer",
                  "UI/UX Designer",
                  "AI Programmer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-red-500"></div>
          <p className="mb-8 leading-relaxed">
            I am a passionate and skilled front-end developer with expertise in
            crafting responsive, user-friendly web applications. My experience
            spans across HTML, CSS, JavaScript, React, and Next.js, with a deep
            understanding of UI/UX principles and design aesthetics. I am
            proficient in building reusable components, integrating Tailwind CSS
            for responsive design, and optimizing performance for seamless user
            experiences. With a focus on delivering high-quality code and
            staying updated with the latest trends in web development, I am
            dedicated to creating innovative solutions that enhance user
            interaction and engagement.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto"
            alt="hero"
            width={300}
            height={500}
            src={mohsinImage} // Use the imported image here
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

