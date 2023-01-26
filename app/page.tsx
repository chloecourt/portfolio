import Image from "next/image";

import { ResumeButton } from "@/components/ResumeButton";
import selfie from "../public/images/selfie.jpeg";
import { Projects, Contact, Skills } from "../components/Mains";
import papaya from "../public/images/papaya.svg";
import mango from "../public/images/mango.svg";
import leaves from "../public/images/leaves.svg";
import blade from "../public/images/blade.svg";
import blade1 from "../public/images/blade1.svg";
import papayaSeedLower from "../public/images/papaya-seed-lower.svg";
import papayaSeedHigher from "../public/images/papaya-seed-higher.svg";

const resumeLink =
  "https://docs.google.com/document/d/1UVMpDh66Ryz5IuGTqL4s3aROveyd9UILzqyFgAcNYJg/edit?usp=sharing";

export default function Home() {
  return (
    <>
      <Image
        src={papaya}
        //hidden sm:block sm:w-1/3
        className="z-10 absolute left-4 top-12 sm:left-2 sm:top-0 w-1/3 max-w-[480px]"
        alt="papaya-art"
      />
      <div className="z-10 absolute top-44 left-1/3 hidden sm:block">
        <div className="relative h-full w-full">
          <Image
            src={papayaSeedHigher}
            alt="papaya-seed-higher"
            className="absolute left-8 top-4 animate-bounce"
          />
          <Image
            src={papayaSeedLower}
            alt="papaya-seed-lower"
            className="animate-secondSeed-bounce"
          />
        </div>
      </div>
      <Image
        src={blade1}
        alt="blade-art"
        //top-0 right-0 hidden sm:block sm:w-1/3
        className="z-10 absolute top-6 right-0 w-1/3 max-w-[480px]"
        width="550"
      />
      <main
        className="relative h-[90vh] flex flex-col justify-center items-center hover:bg-yellow-200 transition-colors duration-500 delay-1000"
        //flex flex-col justify-center items-center
      >
        <section
          id="About"
          data-testid="name-and-description-block"
          className="relative bg-transparent w-4/5 gap-8 m-auto flex flex-col justify-center items-center middle:flex-row"
        >
          <div
            data-testid="white-personal-info-box"
            className="relative z-10 w-full max-w-sm p-6 bg-white rounded-lg shadow-xl space-y-3 flex flex-col justify-center items-center middle:mr-16"
          >
            <h3 className=" text-base sm:text-lg text-center">
              Software Engineer
            </h3>
            <h1 className="font-abc bold text-4xl sm:text-6xl text-center hover:-translate-y-1 ease-in duration-200">
              Chloe Courtois
            </h1>
            <p className="items-center px-4 mb-3 hidden sm:block">
              Hello! Thank you for visiting my site, I built it with Next.js 13
              and Tailwind CSS. I love learning the newest technology and
              providing cutting edge products to clients.
            </p>
            <ResumeButton href={resumeLink} />
          </div>
          <Image
            src={selfie}
            className="z-10 animate-roll-in rounded-full w-52 sm:w-60 md:w-72 md:mt-0"
            alt="Chloe Courtois"
            // width="300"
          />
        </section>
        <div className="relative w-full">
          <Image
            src={mango}
            // className="absolute -bottom-16 -left-16 hidden md:block"
            // className="absolute bottom-20 left-0 hidden md:block"
            // className="absolute animate-papaya-entry bottom-10 -left-10 hidden middle:block"
            className="absolute w-36 animate-papaya-entry bottom-4 left-1 max-w-[800px] sm:w-1/3"
            alt="mango art"
          />
          <Image
            src={leaves}
            // className="absolute animate-waving-hand -bottom-12 -right-5"
            // className="absolute animate-waving-hand bottom-20 right-10"
            // className="w-[380px] absolute bottom-0 right-0 animate-waving-hand hidden middle:block" w-60 sm:w-80 lg:w-1/3 xl:w-[500px]
            className="absolute bottom-2 right-0 max-w-[500px] animate-waving-hand w-1/3"
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
