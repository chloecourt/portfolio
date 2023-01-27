import Image from "next/image";

import { ResumeButton } from "@/components/ResumeButton";
import selfie from "../public/images/selfie.jpeg";
import { Projects, Contact, Skills } from "../components/Mains";
import papaya from "../public/images/papaya.svg";
import mango from "../public/images/mango.svg";
import leaves from "../public/images/leaves.svg";
import blade from "../public/images/blade.svg";
import linkedin from "../public/images/linkedin-icon.png";
import linkedin2 from "../public/images/linkedin-icon2.png";
import linkedin4 from "../public/images/linkedin-icon4.png";
import github from "../public/images/github-icon.png";
import papayaSeedLower from "../public/images/papaya-seed-lower.svg";
import papayaSeedHigher from "../public/images/papaya-seed-higher.svg";

const resumeLink =
  "https://docs.google.com/document/d/1UVMpDh66Ryz5IuGTqL4s3aROveyd9UILzqyFgAcNYJg/edit?usp=sharing";

export default function Home() {
  return (
    <>
      <main
        className="relative h-[90vh] w-[100vw]
        flex flex-col justify-start items-center 
        hover:bg-yellow-200 transition-colors duration-500 delay-1000"
      >
        <div className="w-full h-1/4 flex justify-between relative pb-5 px-5">
          <Image
            src={papaya}
            alt="papaya-art"
            className="w-1/4 h-full animate-fruits-down"
          />
          <span>
            <Image
              src={papayaSeedHigher}
              alt="papaya-seed-higher"
              className="animate-bounce"
            />
            <Image
              src={papayaSeedLower}
              alt="papaya-seed-lower"
              className="animate-secondSeed-bounce"
            />
          </span>
          <Image
            src={blade}
            alt="blade-art"
            className="w-1/4 h-full animate-mango-enter"
          />
        </div>
        <section
          id="About"
          data-testid="name-and-description-block"
          className="bg-transparent flex-1 h-1/2 flex flex-col justify-center items-center lg:flex-row lg:justify-between"
        >
          <div
            data-testid="white-personal-info-box"
            className="relative z-10 w-full mb-8 max-w-sm p-6 bg-white rounded-lg shadow-xl space-y-3 flex flex-col justify-center items-center lg:mb-0 lg:mr-20"
          >
            <h3 className=" text-base sm:text-lg text-center">
              Software Engineer
            </h3>
            <h1 className="font-abc bold text-4xl sm:text-6xl text-center hover:-translate-y-1 ease-in duration-200">
              Chloe Courtois
            </h1>

            <p className="items-center px-4 mb-3 max-w-sm hidden md:block">
              Hello! Thank you for visiting my site, I built it with Next.js 13
              and Tailwind CSS. I love learning the newest technology and
              providing cutting edge products to clients.
            </p>
            <ResumeButton href={resumeLink} />
          </div>
          <Image
            src={selfie}
            className="z-10 animate-roll-in rounded-full w-40 sm:w-60 md:w-72 md:mt-0"
            alt="Chloe Courtois"
          />
        </section>

        <div className="w-full h-1/4 flex justify-between items-end relative pb-5 px-5">
          <Image
            src={mango}
            className="w-1/4 h-full animate-mango-enter"
            alt="mango art"
          />
          <div className="flex gap-3">
            <Image src={linkedin4} width={30} alt="linkedin-icon" />
            <Image src={github} width={30} alt="github-icon" />
          </div>
          <Image
            src={leaves}
            className="w-1/4 h-full animate-waving-hand"
            alt="leaves art"
          />
        </div>
      </main>
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
/*'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      */
