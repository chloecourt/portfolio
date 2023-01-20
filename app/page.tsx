import Image from "next/image";
import { Inter } from "@next/font/google";
import { GradientButton } from "@/components/GradientButton";
import selfie from "../public/images/selfie.jpeg";
const inter = Inter({ subsets: ["latin"] });
import { Projects, Contact, Skills } from "../components/Mains";

export default function Home() {
  return (
    <>
      <main className="h-screen justify-center items-center">
        {/* <div data-testid="main-landing-container" className="flex flex-row"> */}
        <section
          id="About"
          data-testid="name-and-description-block"
          className="mt-16 flex flex-row justify-center items-center"
        >
          <div data-testid="left-landing-page-container" className="p-8 w-2/5">
            <h3 className="text-sm">Software Engineer</h3>
            <h1 className="bold text-xl">Chloe Courtois</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eu velit ultricies, tincidunt metus sit amet, sollicitudin dolor.
              Vivamus dignissim nunc a aliquet facilisis. Vivamus ac orci eu dui
              vestibulum sodales eget elementum risus. Vestibulum neque tellus,
              consequat ac ante id, tempus congue velit. Quisque sodales, tellus
              id euismod euismod, augue ligula euismod mauris, vitae gravida
              ipsum ligula id erat. Quisque at urna et purus fermentum dapibus
              eu sit amet elit.
            </p>
            <GradientButton />
          </div>
          <Image src={selfie} alt="Chloe Courtois" width="300" />
        </section>
        {/* <WindowMockUp /> */}
      </main>
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
