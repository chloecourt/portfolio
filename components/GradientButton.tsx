import Link from "next/link";
export const GradientButton = () => {
  return (
    <div className="my-3">
      {/* <a
        className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="/download"
      >
        <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
          RESUME
        </span>
      </a> */}

      <a
        className="group relative inline-block text-sm font-medium text-gray-600 focus:outline-none focus:ring active:text-gray-500"
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/document/d/1UVMpDh66Ryz5IuGTqL4s3aROveyd9UILzqyFgAcNYJg/edit?usp=sharing"
      >
        <span
          className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-gray-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0
        "
        ></span>

        <span className="relative block border border-current bg-white px-8 py-3">
          RESUME
        </span>
      </a>
    </div>
  );
};
