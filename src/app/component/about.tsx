import Image from "next/image";
import Link from "next/link";
import React from "react";
import mohsinImage from '../../../public/picture/mohsinraza.jpeg';

const About = () => {
  return (
    <div id="about" className="bg-gray-500">
      <section className="text-white body-font font-bold">
        <div className="container e-mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src={mohsinImage}
              width={300}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              About me
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              &quot;My name is Mohsin, and I am a frontend developer. You can reach
              me at my phone number, 0345-2615590, or via email at
              mohsinraza22@gmail.com.&quot;
            </p>
            <p className="mb-8 leading-relaxed">
              I am a passionate and skilled front-end developer with expertise
              in crafting responsive, user-friendly web applications. My
              experience spans across HTML, CSS, JavaScript, React, and Next.js,
              with a deep understanding of UI/UX principles and design
              aesthetics. I am proficient in building reusable components,
              integrating Tailwind CSS for responsive design, and optimizing
              performance for seamless user experiences.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">
                <Link href={"https://mohsinraza23.github.io/My-CV/"}>
                  View CV
                </Link>
              </button>
              <button className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">
                Whats up
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

