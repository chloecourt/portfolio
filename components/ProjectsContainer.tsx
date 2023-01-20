import { WindowMockUp } from "./WindowMockUp";

export const ProjectsContainer = () => {
  return (
    <article className="flex flex-col justify-center items-center space-y-5 p-6 min-w-sm px-3">
      <h2 className="text-center">
        Bad Habits: Ecommerce and Events Company Website
      </h2>
      <WindowMockUp />
      <h4>Tech Stack</h4>
      <p>
        Next.js 13, Strapi CMS, Tailwind CSS, Next-Auth, Shopify StoreFront API,
        Core Web Vitals / SEO Best Practices
      </p>
    </article>
  );
};
