import { ProjectsContainer } from "../ProjectsContainer";

export const Projects = () => {
  return (
    <main
      className="min-h-screen flex flex-col justify-center items-center p-3 sm:p-8 md:p-12 hover:bg-yellow-200 transition-colors duration-500 delay-1000"
      id="Projects"
    >
      <h1 className="mt-12 text-6xl sm:text-8xl font-abc md:mb-8">Projects</h1>
      <section className="min-h-full space-y-12 flex flex-col p-8 justify-center items-center lg:flex-row lg:justify-evenly gap-5 lg:space-y-0">
        <ProjectsContainer />
        <ProjectsContainer />
      </section>
    </main>
  );
};
