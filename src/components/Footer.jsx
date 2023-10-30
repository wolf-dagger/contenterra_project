import React from "react";
import Resume from "../assets/PRASHANT SHARMA.pdf";

const Footer = () => {
  return (
    <>
      <div className="bg-black rounded-xl sm:p-5 pt-5 break-words">
        <div className="sm:grid sm:grid-cols-1 lg:flex bg-black justify-evenly sm:text-center text-[white]  rounded-xl leading-8 text-center">
          <div>
            <h1>&copy; Made By Prashant Sharma</h1>
          </div>
          <div>
            <p>Email : prashantp5sharma.1998@gmail.com</p>
          </div>
          <div>
            <p>
              Git Repo:{" "}
              <span className="text-[red] hover:underline transition">
                <a
                  href="https://github.com/wolf-dagger/contenterra_project"
                  target="_blank"
                >
                  Click Here
                </a>
              </span>
            </p>
          </div>
          <div>
            <a
              href="https://prashant-sharma.netlify.app/"
              target="_blank"
              className="hover:text-[red] transition"
            >
              My Portfolio
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-5 pb-5">
          <a
            href={Resume}
            class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            download="Resume"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Download Resume
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
