import { ProjectsContainer } from "../ProjectsContainer";

export const Projects = () => {
  return (
    <main
      className="mt-12 min-h-screen flex flex-col justify-center items-center px-12"
      id="Projects"
    >
      <h1 className="text-lg font-bold">Projects</h1>
      <section className="min-h-full flex flex-col justify-center items-center md:flex-row">
        <ProjectsContainer />
        <ProjectsContainer />
      </section>
    </main>
  );
};
