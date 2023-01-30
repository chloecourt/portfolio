import { MainLayout } from "./MainLayout";
import frontend from "../../public/hericons/frontend.svg";
export const Skills = () => {
  return (
    <MainLayout title="Skills">
      <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article>
          <ul className="w-64 h-64 bg-gray-500 relative rounded-lg shadow-lg text-white px-8 py-6 list-disc tracking-widest">
            <li className="flex justify-center items-center">
              <h3 className="text-center text-lg font-extralight uppercase underline underline-offset-8 m-2">
                frontend
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                alignmentBaseline="baseline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
            </li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>SASS</li>
            <li>HTML</li>
            <li>Styled Components</li>
          </ul>
        </article>
        <article>
          <ul className="w-64 h-64 bg-gray-500 relative rounded-lg shadow-lg text-white px-8 py-6 list-disc tracking-widest">
            <li className="flex justify-center items-center">
              <h3 className="text-center text-lg font-extralight uppercase underline underline-offset-8 m-2">
                backend
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </li>
            <li>MongoDB</li>
            <li>PostGreSQL</li>
            <li>Apollo GraphQL</li>
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>JWT</li>
            <li>Strapi</li>
          </ul>
        </article>
        <article>
          <ul className="w-64 h-64 bg-gray-500 relative rounded-lg shadow-lg text-white px-8 py-6 list-disc tracking-widest">
            <li className="flex justify-center items-center">
              <h3 className="text-center text-lg font-extralight uppercase underline underline-offset-8 m-2">
                tech
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>
            </li>
            <li>Vercel</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>Shopify</li>
            <li>Github</li>
            <li>Typescript</li>
          </ul>
        </article>
      </section>
    </MainLayout>
  );
};
