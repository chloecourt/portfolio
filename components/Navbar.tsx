import hamburger from "../public/images/hamburger.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <nav
        aria-label="Site Nav"
        className="z-20 max-h-[10vh] mx-auto flex w-screen justify-center pt-2 items-center sticky top-0"
      >
        <ul className="flex items-center gap-2 text-base font-medium text-gray-600 p-2">
          <li className="hidden md:block md:rounded-lg md:px-3 md:py-2">
            <a className=" hidden md:block md:rounded-lg" href="/#Home">
              Home
            </a>
          </li>
          <li>
            <a className="rounded-lg px-3 py-2" href="/#Projects">
              Projects
            </a>
          </li>
          <li>
            <a className="rounded-lg px-3 py-2" href="/#Skills">
              Skills
            </a>
          </li>
          <li>
            <a className="rounded-lg px-3 py-2" href="/#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
