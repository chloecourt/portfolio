import Image from "next/image";

import { ResumeButton } from "@/components/ResumeButton";
import selfie2 from "../public/images/selfie2.png";
import { Projects, Contact, Skills } from "../components/Mains";
import linkedin4 from "../public/images/linkedin-icon4.png";
import github2 from "../public/images/github-icon2.png";
import bee from "../public/images/bee.svg";
import shrub from "../public/images/shrub.svg";
import threeLeaves from "../public/images/threeLeaves.svg";
import redFlowers from "../public/images/redFlowers.svg";
import yellowFlowers from "../public/images/yellowFlowers.svg";

const resumeLink =
  "https://docs.google.com/document/d/1UVMpDh66Ryz5IuGTqL4s3aROveyd9UILzqyFgAcNYJg/edit?usp=sharing";

export default function Home() {
  return (
    <>
      <main
        className="relative h-[88vh] w-[100vw]
        flex flex-col justify-start items-center overflow-hidden"
        id="Home"
      >
        <Image
          src={bee}
          alt="bee"
          className="absolute top-80 left-1 pl-3 animate-bounce delay-300 w-8 h-4 md:w-10 md:h-6 lg:w-10"
        />
        <Image
          src={bee}
          alt="papaya seed"
          className="absolute top-60 right-0 pr-3 animate-bounce delay-300 w-8 h-4 md:w-10 md:h-6 lg:w-10"
        />
        <div className="w-full h-1/4 flex justify-between items-start relative px-4">
          <Image
            src={shrub}
            alt="papaya-art"
            className="w-1/4 h-full animate-fruits-down object-contain"
          />
          <span data-testid="jumping-seeds-span" className="mt-5">
            <Image
              src={bee}
              alt="bee"
              className="animate-bounce delay-300 ml-3 pl-3 w-8 h-4 md:w-10 md:h-6 lg:w-10"
            />
            <Image
              src={bee}
              alt="bee image"
              className="animate-secondSeed-bounce delay-300 mr-3 pr-3 w-8 h-4 md:w-10 md:h-6 lg:w-10"
            />
          </span>
          <Image
            src={redFlowers}
            alt="blade-art"
            className="w-1/4 h-full animate-mango-enter"
          />
        </div>
        <section
          id="About"
          data-testid="name-and-description-block"
          className="bg-transparent flex-1 h-1/2 flex flex-col justify-evenly items-center lg:flex-row lg:justify-between"
        >
          <div
            data-testid="white-personal-info-box"
            className="relative z-10 w-full max-w-sm p-5 flex flex-col justify-center items-center lg:mb-0 lg:mr-20 gap-2"
          >
            <h3 className="text-base text-zinc-800 md:text-lg text-center">
              Software Engineer
            </h3>
            <h1 className="font-abc py-1 bold text-zinc-800 text-4xl sm:text-5xl lg:text-6xl text-center hover:-translate-y-1 ease-in duration-200">
              Chloe Courtois
            </h1>
            <p className="items-center text-zinc-900 p-2 mb-3 max-w-sm hidden md:block">
              Hello! Thank you for visiting my site.
              <br></br>I built it with Next.js 13, Tailwind CSS and created the
              artwork with Figma.
            </p>
            <ResumeButton href={resumeLink} />
          </div>
          <Image
            src={selfie2}
            className="z-10 hover:animate-roll-in rounded-full w-44 lg:w-70 sm:w-60  md:mt-0"
            alt="Chloe Courtois"
          />
        </section>
        <Image
          src={bee}
          alt="greenish-seed"
          className="absolute bottom-60 right-8 pl-3 animate-bounce delay-300 w-8 h-4 md:w-10 md:h-6 lg:w-10"
        />
        <Image
          src={bee}
          alt="bee"
          className="absolute bottom-14 left-[110px] md:left-96 pl-3 animate-secondSeed-bounce delay-300 w-8 h-4 md:w-10 md:h-6 lg:w-10"
        />
        <div className="w-full h-1/4 flex justify-between items-start relative pb-4 px-4">
          <Image
            src={yellowFlowers}
            className="w-1/4 h-full animate-mango-enter"
            alt="yellow flower"
          />
          <div
            data-testid="social-media-icons"
            className="h-full flex items-center md:items-end lg:items-center gap-3 sm:items-center"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/chloe-courtois/"
            >
              <Image src={linkedin4} width={30} alt="linkedin-icon" />
            </a>
            <a
              href="https://github.com/chloecourt"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={github2} width={30} alt="github-icon" />
            </a>
          </div>
          <Image
            src={threeLeaves}
            className="w-1/4 h-full animate-waving-hand delay-500"
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
