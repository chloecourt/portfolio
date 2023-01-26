import { WindowMockUp } from "./WindowMockUp";

export const ProjectsContainer = () => {
  return (
    <article className="space-y-3 flex flex-col justify-evenly items-center md:space-x-3">
      <h2 className="bg-white rounded-lg shadow-xl text-center text-lg font-medium text-gray-600 p-3">
        Ecommerce and Events Company Website
      </h2>
      <WindowMockUp />
      <h4 className="text-lg font-medium ">TECH STACK</h4>
      <p className="max-w-2xl bg-white/50 border rounded-lg shadow-xl p-5">
        Next.js 13, Strapi CMS, Tailwind CSS, Next-Auth, Shopify StoreFront API,
        Core Web Vitals / SEO Best Practices
      </p>
    </article>
  );
};
