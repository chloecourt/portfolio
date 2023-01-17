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
        <div className="max-w-2xl transition-colors ease-linear shadow-md">
          <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
            <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
            <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
            <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
          </div>
          {/* <div className="bg-gray-100 dark:bg-gray-700 border-t-0 w-full h-96 rounded-b-lg"> */}
          <iframe
            className="border-t-0 w-full h-96 rounded-b-lg"
            src="http://boost-excel.s3-website-us-east-1.amazonaws.com/"
            width="650"
          />
          {/* </div> */}
        </div>
      </div>
      <Image src={selfie} alt="Chloe Courtois" width="300" />
    </main>
  );
}
