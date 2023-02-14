import { WindowMockUp } from "./WindowMockUp";
type ProjectContainerTypes = {
  src: string;
};
export const ProjectsContainer = ({ src }: ProjectContainerTypes) => {
  return (
    <article className="space-y-4 flex flex-col justify-evenly items-center md:space-x-3">
      <h2 className="bg-white rounded-lg shadow-xl text-center text-lg font-medium text-gray-600 px-5 py-3">
        Boost Excel: Add-in to use SQL to Query Data
      </h2>
      <WindowMockUp src={src} />
      <span className="mx-auto text-center block">TECH STACK</span>
      <p className="max-w-2xl bg-white/50 rounded-lg shadow-xl p-5 text-center">
        Microsoft Excel API, React, TypeScript, Node.js
      </p>
    </article>
  );
};
