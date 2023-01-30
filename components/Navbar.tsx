import hamburger from "../public/images/hamburger.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <nav
        aria-label="Site Nav"
        className="z-20 h-[10vh] mx-auto flex w-screen justify-center items-center p-4 sticky top-0"
      >
        <span></span>
        <ul className="flex items-center gap-2 text-base font-medium text-gray-600">
          <li className="hidden md:block md:rounded-lg md:px-2 md:py-3">
            <a className=" hidden md:block md:rounded-lg" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="rounded-lg px-3 py-2" href="#Projects">
              Projects
            </a>
          </li>
          <li>
            <a className="rounded-lg px-3 py-2" href="#Skills">
              Skills
            </a>
          </li>
          <li>
            <a className="rounded-lg px-3 py-2" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
