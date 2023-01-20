export const GradientButton = () => {
  return (
    <div className="mb-5">
      <a
        className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="/download"
      >
        <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
          RESUME
        </span>
      </a>
    </div>
  );
};
