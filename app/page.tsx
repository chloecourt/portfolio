import Image from "next/image";

import { GradientButton } from "@/components/GradientButton";
import selfie from "../public/images/selfie.jpeg";
// import { Londrina_Outline } from "@next/font/google";
// const londrina = Londrina_Outline({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-londrina",
// });
import { Projects, Contact, Skills } from "../components/Mains";
import papaya from "../public/images/papaya.svg";
import mango from "../public/images/mango.svg";
import leaves from "../public/images/leaves.svg";
import blade from "../public/images/blade.svg";
import blade1 from "../public/images/blade1.svg";
import papayaSeedLower from "../public/images/papaya-seed-lower.svg";
import papayaSeedHigher from "../public/images/papaya-seed-higher.svg";

export default function Home() {
  return (
    <>
      <Image
        src={papaya}
        // className="z-10 absolute -top-32 -left-38"
        className="z-10 absolute left-0 top-0 hidden middle:block"
        alt="papaya-art"
      />
      <div className="z-10 absolute top-44 left-1/3 hidden middle:block">
        <div className="relative h-full w-full">
          <Image
            src={papayaSeedHigher}
            alt="papaya-seed-higher"
            className="absolute left-8 top-4 animate-bounce"

            // className="animate-bounce"
            // className="z-10 absolute top-72 left-10 animate-bounce"
          />
          <Image
            src={papayaSeedLower}
            alt="papaya-seed-lower"
            className="animate-secondSeed-bounce"
            // className="animate-bounce z-10 absolute top-64 left-20"
          />
        </div>
      </div>
      <Image
        src={blade1}
        alt="blade-art"
        // className="z-10 absolute top-0 -right-28 hidden md:block"
        className="z-10 absolute top-0 right-0 hidden middle:block"
        width="550"
      />
      <main
        className="relative h-[90vh] flex flex-col justify-center items-center hover:bg-yellow-200 transition-colors duration-500 delay-1000"
        //flex flex-col justify-center items-center
      >
        <section
          id="About"
          data-testid="name-and-description-block"
          className="relative bg-transparent w-3/4 m-auto flex flex-col justify-evenly items-center middle:flex-row"
        >
          <div
            data-testid="left-landing-page-container"
            className="z-10 p-3 bg-white rounded-md shadow-md w-96 flex flex-col justify-evenly items-center middle:min-w-96 middle:justify-evenly middle:mr-16"
          >
            <h3 className="text-lg mt-5">Software Engineer</h3>
            <h1 className="px-3 font-abc bold text-6xl my-2 hover:-translate-y-1 ease-in duration-200">
              Chloe Courtois
            </h1>
            <p className="px-5 pb-5 items-center hidden sm:block">
              Hello! Thank you for visiting my site, I built it with Next.js 13
              and Tailwind CSS. I love learning the newest technology and
              providing cutting edge products to clients.
            </p>
            <GradientButton />
          </div>
          <Image
            src={selfie}
            className="z-10 animate-roll-in rounded-full mt-10 middle:mt-0"
            alt="Chloe Courtois"
            width="300"
          />
        </section>
        <div className="block relative w-full">
          <Image
            src={mango}
            // className="absolute -bottom-16 -left-16 hidden md:block"
            // className="absolute bottom-20 left-0 hidden md:block"
            // className="absolute animate-papaya-entry bottom-10 -left-10 hidden middle:block"
            className="absolute animate-papaya-entry -bottom-12 -left-12 hidden middle:block"
            alt="mango art"
          />

          <Image
            src={leaves}
            // className="absolute animate-waving-hand -bottom-12 -right-5"
            // className="absolute animate-waving-hand bottom-20 right-10"
            className="w-[380px] absolute bottom-0 right-0 animate-waving-hand hidden middle:block"
            alt="leaves art"
            sizes=""
          />
        </div>
      </main>
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
