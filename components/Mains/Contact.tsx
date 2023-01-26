export const Contact = () => {
  return (
    <main
      className="min-h-screen flex flex-col justify-center items-center "
      id="Contact"
    >
      <section className="flex flex-col justify-center items-center">
        <form
          className="w-auto flex flex-col justify-center items-center space-y-3"
          target="_blank"
          action="https://formsubmit.co/cb97cfa2a6f90c50a5bef8d65bb492f1"
          method="POST"
        >
          <div className="flex flex-col justify-center items-center w-full space-y-3 md:space-y-0 md:flex-row md:gap-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              minLength={10}
              maxLength={30}
              className="grow w-full md:w-auto"
              required
            />
            <input
              type="email"
              className="grow w-full md:w-auto"
              name="email"
              placeholder="Email"
              minLength={10}
              maxLength={30}
              required
            />
          </div>
          <textarea
            className="w-full"
            name="message"
            placeholder="Your Message"
            rows={10}
            minLength={12}
            required
          ></textarea>
          <button
            className="text-md font-medium bg-white text-gray-600 focus:outline-none focus:ring active:text-gray-500 border-t border-l border-b-2 border-r-4 py-2 px-5 border-gray-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};
