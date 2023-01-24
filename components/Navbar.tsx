import hamburger from "../public/images/hamburger.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <nav
        aria-label="Site Nav"
        className="z-20 mx-auto flex w-screen justify-center items-center p-4 sticky top-0"
      >
        <span></span>
        <ul className="flex items-center gap-2 text-base font-medium text-gray-600">
          <li className="rounded-lg px-3 py-2">
            <a className="rounded-lg px-3 py-2 hidden md:block" href="/">
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
