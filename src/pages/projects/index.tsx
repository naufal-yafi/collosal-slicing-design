import ButtonSecondary from "@component/Buttons/ButtonSecondary";
import Layout from "@component/Layout";
import ProjectDisplay from "@component/ProjectDisplay";
import SectionBadge from "@component/Sections/SectionBadge";
import SectionImage from "@component/Sections/SectionImage";
import SectionLine from "@component/Sections/SectionLine";

const Projects = () => {
  return (
    <>
      <Layout
        title="View the results of projects we've completed - Projects | Collosal"
        params="/project"
      >
        <div className="pt-14">
          <SectionLine>
            <SectionBadge
              label="projects"
              title="We have completed many amazing projects that you will not believe"
              desc=""
            />
            <SectionImage>
              <div className="w-full flex justify-center lg:justify-end">
                <select
                  name=""
                  id=""
                  className="px-5 py-2 bg-transparent text-muted border-[1px] border-light rounded-[3px]"
                >
                  <option className="bg-hightlight">Technology</option>
                  <option className="bg-hightlight">
                    HTML, CSS, Javascript
                  </option>
                  <option className="bg-hightlight">Flutter</option>
                  <option className="bg-hightlight">Kotlin</option>
                </select>
              </div>
            </SectionImage>
          </SectionLine>
        </div>

        <section>
          <hr className="border-light" />
        </section>

        <section className="flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
            <ProjectDisplay display="mobile" />
            <ProjectDisplay />
            <ProjectDisplay />
            <ProjectDisplay display="mobile" />
          </div>
          <div className="w-full flex justify-center mt-24">
            <ButtonSecondary link="" type="muted">
              Load More
            </ButtonSecondary>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Projects;
