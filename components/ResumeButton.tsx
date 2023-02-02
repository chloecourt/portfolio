type ResumeButton = {
  href?: string;
};
export const ResumeButton = ({ href }: ResumeButton) => {
  return (
    <>
      <a
        className="group relative inline-block text-sm font-medium text-gray-600 focus:outline-none focus:ring active:text-gray-500"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span
          className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-gray-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0
        "
        ></span>

        <span className="relative block border border-current bg-white px-6 py-2 sm:px-8 sm:py-3">
          RESUME
        </span>
      </a>
    </>
  );
};
