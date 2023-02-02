import Image from "next/image";

import { ResumeButton } from "@/components/ResumeButton";
import selfie from "../public/images/selfie.jpeg";
import { Projects, Contact, Skills } from "../components/Mains";
import papaya from "../public/images/papaya.svg";
import mango from "../public/images/mango.svg";
import leaves from "../public/images/leaves.svg";
import blade from "../public/images/blade.svg";
import linkedin4 from "../public/images/linkedin-icon4.png";
import github2 from "../public/images/github-icon2.png";
import papayaSeedLower from "../public/images/papaya-seed-lower.svg";
import papayaSeedHigher from "../public/images/papaya-seed-higher.svg";
import papayaSeed from "../public/images/papayaSeed.svg";
import mangoSeedGreenish from "../public/images/mango-seed-greenish.svg";
import reddishSeed from "../public/images/reddishSeed.svg";
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
      >
        <Image
          // src={papayaSeedHigher}
          src={bee}
          alt="blade seed"
          className="absolute top-80 left-1 pl-3 animate-bounce delay-300 w-8 h-4 md:w-10 md:h-6 lg:w-12 lg:h-8"
        />
        <Image
          // src={papayaSeed}
          src={bee}
          alt="papaya seed"
          className="absolute top-60 right-0 pr-3 animate-bounce delay-300 w-8 h-4 md:w-10 md:h-6 lg:w-12 lg:h-8"
        />
        <div className="w-full h-1/4 flex justify-between items-start relative px-4">
          <Image
            // src={papaya}
            src={shrub}
            alt="papaya-art"
            className="w-1/4 h-full animate-fruits-down object-contain"
          />
          <span data-testid="jumping-seeds-span" className="mt-5">
            <Image
              // src={papayaSeedHigher}
              src={bee}
              alt="light-brown middle bouncing seed"
              className="animate-bounce delay-300 ml-3 pl-3 w-8 h-4 md:w-10 md:h-6 lg:w-12 lg:h-8"
            />
            <Image
              // src={papayaSeedLower}
              src={bee}
              alt="slate-colored middle bouncing seed"
              className="animate-secondSeed-bounce delay-300 mr-3 pr-3 w-8 h-4 md:w-10 md:h-6 lg:w-12 lg:h-8"
            />
          </span>
          <Image
            // src={blade}
            src={redFlowers}
            alt="blade-art"
            className="w-1/4 h-full animate-mango-enter"
          />
        </div>
        <section
          id="About"
          data-testid="name-and-description-block"
          className="bg-transparent flex-1 h-1/2 flex flex-col justify-between items-center lg:flex-row lg:justify-between"
        >
          <div
            data-testid="white-personal-info-box"
            className="relative z-10 w-full max-w-sm p-6 bg-white rounded-lg shadow-xl space-y-2 flex flex-col mb-3 justify-center items-center lg:mb-0 lg:mr-20"
          >
            <h3 className=" text-base md:text-lg text-center">
              Software Engineer
            </h3>
            <h1 className="font-abc bold text-4xl sm:text-5xl lg:text-6xl text-center hover:-translate-y-1 ease-in duration-200">
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
            className="z-10 hover:animate-roll-in rounded-full w-40 sm:w-60 md:w-72 md:mt-0"
            alt="Chloe Courtois"
          />
        </section>
        <Image
          // src={reddishSeed}
          src={bee}
          alt="greenish-seed"
          className="absolute bottom-60 right-8 pl-3 animate-bounce delay-300 w-8 h-4 md:w-10 md:h-6 lg:w-12 lg:h-8"
        />
        <Image
          // src={mangoSeedGreenish}
          src={bee}
          alt="greenish-seed"
          className="absolute bottom-14 left-[110px] md:left-96 pl-3 animate-secondSeed-bounce delay-300 w-8 h-4 md:w-10 md:h-6 lg:w-12 lg:h-8"
        />
        <div className="w-full h-1/4 flex justify-between items-start relative pb-4 px-4">
          <Image
            // src={mango}
            src={yellowFlowers}
            className="w-1/4 h-full animate-mango-enter"
            alt="mango art"
          />
          <div
            data-testid="social-media-icons"
            className="h-full flex items-center gap-3"
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
            // src={leaves}
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
