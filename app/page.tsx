import Image from "next/image";
import { Inter } from "@next/font/google";
import { GradientButton } from "@/components/GradientButton";
import selfie from "../public/images/selfie.jpeg";
const inter = Inter({ subsets: ["latin"] });
import { Projects, Contact, Skills } from "../components/Mains";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <section
          id="About"
          data-testid="name-and-description-block"
          className="min-h-full flex flex-col justify-center items-center sm:flex-row "
        >
          <div
            data-testid="left-landing-page-container"
            className="min-w-full flex flex-col justify-center items-center sm:min-w-0"
          >
            <h3 className="text-lg">Software Engineer</h3>
            <h1 className="bold text-4xl my-2">Chloe Courtois</h1>
            <p className="w-24 min-w-full px-6">
              Hello! I am glad you took and interest to visit my site! I built
              it with Next.js 13 and Tailwind CSS. I love learning and
              leveraging the newest technology in our field to find more
              efficient ways to provide cutting edge products to clients.
            </p>
            <GradientButton />
          </div>
          <Image src={selfie} alt="Chloe Courtois" width="300" />
        </section>
      </main>
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
