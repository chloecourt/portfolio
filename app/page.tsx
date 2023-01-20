import Image from "next/image";
import { Inter } from "@next/font/google";
import { GradientButton } from "@/components/GradientButton";
import selfie from "../public/images/selfie.jpeg";
const inter = Inter({ subsets: ["latin"] });
import { Projects, Contact, Skills } from "../components/Mains";
import papaya from "../public/images/papaya.svg";
import mango from "../public/images/mango.svg";
import leaves from "../public/images/leaves.svg";
import blade from "../public/images/blade.svg";

export default function Home() {
  return (
    <>
      <Image
        src={papaya}
        className="absolute -top-32 -left-38"
        alt="papaya-art"
      />
      <Image
        src={blade}
        alt="blade-art"
        className="absolute top-0 -right-28"
        width="550"
      />
      <main className="min-h-screen flex flex-col justify-center items-center hover:bg-yellow-200 transition-colors duration-500 delay-1000">
        <section
          id="About"
          data-testid="name-and-description-block"
          className="bg-transparent min-h-full flex flex-col justify-between items-center sm:flex-row"
        >
          <div
            data-testid="left-landing-page-container"
            className="z-10 bg-white rounded-md shadow-md w-96 flex flex-col justify-start items-center sm:min-w-96 sm:justify-evenly sm:mr-16"
          >
            <h3 className="text-lg mt-5">Software Engineer</h3>
            <h1 className="bold text-4xl my-2 hover:-translate-y-1 ease-in duration-300">
              Chloe Courtois
            </h1>
            <p className="px-5 items-center">
              Hello! I am glad you took and interest to visit my site! I built
              it with Next.js 13 and Tailwind CSS. I love learning and
              leveraging the newest technology in our field to find more
              efficient ways to provide cutting edge products to clients.
            </p>
            <GradientButton />
          </div>
          <Image
            src={selfie}
            className="z-10 animate-waving-hand rounded-full mt-10 sm:mt-0"
            // className="animate-rolling-img"
            alt="Chloe Courtois"
            width="300"
          />
        </section>
      </main>
      <Image
        src={mango}
        className="absolute -bottom-16 -left-16"
        alt="mango art"
      />
      <Image
        src={leaves}
        className="absolute -bottom-1 right-1"
        alt="leaves art"
      />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
