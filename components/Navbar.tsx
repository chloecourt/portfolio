export const Navbar = () => {
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex max-w-3xl items-center justify-between p-4 sticky top-0"
    >
      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <a className="rounded-lg px-3 py-2" href="/">
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
  );
};
