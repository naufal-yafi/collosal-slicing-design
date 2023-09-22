import Particle from "@accessories/Particle";
import ProjectDisplay from "@component/ProjectDisplay";
import HeroCenterContent from "@section/HeroCenterContent";

const Projects = () => {
  return (
    <>
      <section className="w-full mt-16 lg:mt-20">
        <div className="w-full flex justify-center items-center">
          <Particle />
          <div className="w-full lg:w-2/3">
            <HeroCenterContent
              label="projects"
              title="We have completed many amazing projects that you will not believe"
              size="small"
              desc=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row mt-5 gap-10 lg:gap-0">
          <ProjectDisplay />
          <ProjectDisplay display="mobile" />
        </div>
      </section>
    </>
  );
};

export default Projects;
