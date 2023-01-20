import { WindowMockUp } from "../WindowMockUp";

export const Contact = () => {
  return (
    <main className="h-screen flex flex-col" id="Contact">
      <h1 className="mt-5 pl-20 text-lg font-bold">Contact</h1>
      <section className="h-screen flex flex-col justify-center items-center">
        <article className="flex flex-col justify-center items-center">
          <h2>Bad Habits: Ecommerce and Events Company Website</h2>
          <WindowMockUp />
          <h4>Tech Stack</h4>
          <p>
            Next.js 13, Strapi CMS, Tailwind CSS, Next-Auth, Shopify StoreFront
            API, Core Web Vitals / SEO Best Practices
          </p>
        </article>
      </section>
    </main>
  );
};
