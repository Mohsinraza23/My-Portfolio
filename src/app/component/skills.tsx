import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-500">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-semibold title-font text-white">
              My skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h2 className="text-black text-lg title-font font-bold">
                    Frontend Development
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-black">
                    HTML, CSS, JavaScript Tailwind CSS React (JSX, components,
                    responsive design) Next.js .....
                  </p>
                  <a className="mt-3 text-red-500 inline-flex items-center">
                    Learn More ...
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-black flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <h2 className="text-black text-lg title-font font-bold">
                    Backend Development
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-black">
                    Full-Stack Development experience (details not specified,
                    but likely includes backend technologies) .....
                  </p>
                  <a className="mt-3 text-red-500 inline-flex items-center">
                    Learn More ...
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-black flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx={6} cy={6} r={3} />
                      <circle cx={6} cy={18} r={3} />
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                    </svg>
                  </div>
                  <h2 className="text-black text-lg title-font font-bold">
                    Tools & Frameworks 
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-black">
                    GitHub Copilot TypeScript , Responsive Design Tools ........
                  </p>
                  <a className="mt-3 text-red-500 inline-flex items-center">
                    Learn More ...
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
