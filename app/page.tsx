import Image from "next/image";
import { Inter } from "@next/font/google";
import { GradientButton } from "@/components/GradientButton";
import selfie from "../public/images/selfie.jpeg";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-row justify-center items-center">
      <div className="p-8 w-2/5">
        <h3 className="text-sm">Software Engineer</h3>
        <h1 className="bold text-xl">Chloe Courtois</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          velit ultricies, tincidunt metus sit amet, sollicitudin dolor. Vivamus
          dignissim nunc a aliquet facilisis. Vivamus ac orci eu dui vestibulum
          sodales eget elementum risus. Vestibulum neque tellus, consequat ac
          ante id, tempus congue velit. Quisque sodales, tellus id euismod
          euismod, augue ligula euismod mauris, vitae gravida ipsum ligula id
          erat. Quisque at urna et purus fermentum dapibus eu sit amet elit.
          Duis nulla turpis, laoreet sed cursus quis, varius id tortor. Fusce
          ante dolor, interdum sit amet facilisis in, laoreet vel ipsum. Donec
          semper tempus erat, sit amet posuere arcu tincidunt convallis. Vivamus
          dui velit, faucibus vitae eros sodales, malesuada placerat ipsum.
        </p>
        <GradientButton />
      </div>
      <Image src={selfie} alt="Chloe Courtois" width="300" />
    </main>
  );
}
