import ButtonSecondary from "@button/ButtonSecondary";
import Layout from "@component/Layout";
import ProjectDisplay from "@component/ProjectDisplay";
import SectionBadge from "@component/Section/SectionBadge";
import SectionImage from "@component/Section/SectionImage";
import SectionLine from "@component/Section/SectionLine";

const Projects = () => {
  return (
    <>
      <Layout title="Projects | Collosal" params="/project">
        <main></main>
        <SectionLine>
          <SectionBadge
            label="projects"
            title="We have completed many amazing projects that you will not believe"
            desc=""
          />
          <SectionImage>
            <select
              name=""
              id=""
              className="px-5 py-2 bg-transparent text-muted border-[1px] border-light rounded-[3px]"
            >
              <option>Technology</option>
            </select>
          </SectionImage>
        </SectionLine>

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
            <ButtonSecondary type="muted">Load More</ButtonSecondary>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Projects;
