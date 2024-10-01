import Image from "next/image";
import Link from "next/link";
import React from "react";
import timerImage from '../../../public/project/timer.webp'; // ES6 import
import cliImage from '../../../public/project/cli.webp'; // ES6 import
import portfolioImage from '../../../public/project/prot.webp'; // ES6 import
import atmImage from '../../../public/project/atm.jpeg'; // ES6 import

const Project = () => {
  return (
    <div id="project" className="bg-gray-500">
      <section className="text-white body-font font-bold">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white ">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              I&apos;ve successfully completed 6 projects that reflect the skills and
              knowledge I&apos;ve gained over time. These projects range from web
              development to interactive programming, showcasing my growth as a
              developer. Here’s a brief overview: Countdown Timer: Built with
              HTML, CSS, and JavaScript. Adventure-Game: A fun and engaging game
              using core web technologies. CLI Number Guessing Game: A
              command-line project focusing on logic and algorithms. Portfolio
              Website: Created using HTML, CSS, and JavaScript, featuring
              responsive design. Interactive Web App: Utilized JavaScript to
              create a dynamic user experience. Full Website Project: Built from
              scratch, incorporating various front-end technologies.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Countdown Timer Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={timerImage} // Use imported image
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Countdown Timer
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-black">
                    Countdown Timer: Built a countdown timer project using HTML,
                    CSS, and JavaScript.
                  </p>
                  <Link
                    href={
                      "https://github.com/Mohsinraza23/count-down-timer.git"
                    }
                  >
                    <p className="leading-relaxed text-red-500 hover:underline">
                      View Project ...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* CLI Number Guessing Game Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={cliImage} // Use imported image
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    CLI Number Guessing Game
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-black">
                    CLI Number Guessing Game: A command-line interface game
                    where the user guesses a number.
                  </p>
                  <Link
                    href={
                      "https://github.com/Mohsinraza23/CLI_Number_Guessing_Game.git"
                    }
                  >
                    <p className="leading-relaxed text-red-500 hover:underline">
                      View Project ...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Portfolio Website Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={portfolioImage} // Use imported image
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Portfolio Website
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-black">
                    Portfolio Website: Working on creating a beautiful portfolio
                    website using Next.js, Tailwind CSS, HTML, CSS, and a
                    personal photo.
                  </p>
                  <Link href={"https://mohsinraza23.github.io/"}>
                    <p className="leading-relaxed text-red-500 hover:underline">
                      View Project ...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* ATM Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={atmImage} // Use imported image
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    ATM
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-black">
                    ATM: I am working on an ATM project.
                  </p>
                  <Link href={"https://github.com/Mohsinraza23/ATM.git"}>
                    <p className="leading-relaxed text-red-500 hover:underline">
                      View Project ...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

