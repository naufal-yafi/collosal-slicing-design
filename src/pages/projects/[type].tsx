import Layout from "@component/Layout";
import ProjectDisplay from "@component/ProjectDisplay";
import HeroCenterContent from "@component/Section/HeroCenterContent";
import SectionBadge from "@component/Section/SectionBadge";
import SectionImage from "@component/Section/SectionImage";
import SectionLine from "@component/Section/SectionLine";
import img_desktop from "@image/desktop-display.svg";
import img_mobile from "@image/mobile-display.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const ProjectDetail = () => {
  const router = useRouter();
  const { type } = router.query;
  const IMG = type === "mobile" ? img_mobile : img_desktop;
  const TECH =
    type === "mobile" ? "Flutter, Kotlin, JAVA" : "Javascript HTML CSS";

  return (
    <>
      <Layout title={`${type} Project | Collosal`} params="/project">
        <main className="w-full flex justify-center">
          <div className="w-full lg:w-2/3">
            <HeroCenterContent
              label="project detail"
              title="The Desktop App Landing Page"
              desc=""
            />
          </div>
        </main>

        <section>
          <hr className="border-light" />
        </section>

        <SectionLine>
          <SectionImage>
            <Image src={IMG} alt="project display" />
          </SectionImage>
          <SectionBadge
            label=""
            title=""
            desc="Something has always existed. According to physics, there can never be true physical nothingness—though there can be times when existence resembles nothing."
          >
            <div className="text-white flex flex-col gap-8 mt-8">
              <hgroup>
                <h1 className="text-muted uppercase text-sm mb-1">category</h1>
                <p className="font-medium">Development</p>
              </hgroup>
              <hgroup>
                <h1 className="text-muted uppercase text-sm mb-1">client</h1>
                <p className="font-medium">Acme, Inc</p>
              </hgroup>
              <hgroup>
                <h1 className="text-muted uppercase text-sm mb-1">
                  technology
                </h1>
                <p className="font-medium">{TECH}</p>
              </hgroup>
            </div>
          </SectionBadge>
        </SectionLine>

        <section>
          <hr className="border-light" />
        </section>

        <section className="flex flex-col items-center">
          <div className="w-full lg:w-2/3">
            <HeroCenterContent
              label="projects"
              title="Other Amazing Project"
              desc=""
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
            <ProjectDisplay display="mobile" />
            <ProjectDisplay />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProjectDetail;
