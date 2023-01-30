import Image from "next/image";
import { MainLayout } from "./MainLayout";
import linkedin4 from "../../public/images/linkedin-icon4.png";
import github2 from "../../public/images/github-icon2.png";
export const Contact = () => {
  return (
    <>
      <MainLayout title="Contact">
        {/* // <main
    //   className="min-h-screen flex flex-col justify-center items-center "
    //   id="Contact"
    // > */}
        <section className="flex flex-col justify-center items-center mt-8">
          <form
            className="w-auto flex flex-col justify-center items-center space-y-3"
            target="_self"
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
          <div>
            <div className="flex gap-3">
              {/* <Image src={linkedin4} width={30} alt="linkedin-icon" /> */}
            </div>
          </div>
        </section>
      </MainLayout>
      <div
        data-testid="social-media-icons"
        className="w-full bottom-0 justify-center my-5 items-center flex gap-3"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/chloe-courtois/"
        >
          <Image src={linkedin4} width={30} alt="linkedin-icon" />
        </a>
        <a
          href="https://github.com/chloecourt"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={github2} width={30} alt="github-icon" />
        </a>
      </div>
    </>
    //  {/* </main> */}
  );
};
