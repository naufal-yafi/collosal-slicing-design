import ButtonPrimary from "@button/ButtonPrimary";
import ButtonSecondary from "@button/ButtonSecondary";
import CompanyLogo from "@component/CompanyLogo";
import FeatureCard from "@component/FeatureCard";
import Layout from "@component/Layout";
import PriceCard from "@component/PriceCard";
import ProjectDisplay from "@component/ProjectDisplay";
import HeroCenterContent from "@component/Section/HeroCenterContent";
import SectionBadge from "@component/Section/SectionBadge";
import SectionImage from "@component/Section/SectionImage";
import SectionLine from "@component/Section/SectionLine";
import NotoSans from "@data/NotoSans";
import img_howwework from "@image/how-we-work.svg";
import img_ourteam from "@image/our-team.svg";
import weightBoxIcon from "@logo/weight-box.svg";
import weightCodeIcon from "@logo/weight-code.svg";
import weightFigmaIcon from "@logo/weight-figma.svg";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Layout title="Collosal - Tell us about your problem and how we can help">
        <main className={NotoSans.className}>
          <HeroCenterContent
            label="CLIENT-DEVELOPMENT DRIVEN"
            title="We Design. We Develop. We Ship. In The Same Day."
            desc="We are committed to not making clients wait. We will deliver the
          work as quickly as possible. Even on the same day. Even so, we do
          not reduce the quality of our work."
          >
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-5 mt-8">
              <ButtonPrimary w_full={true}>Send Quote</ButtonPrimary>
              <ButtonSecondary type="muted" w_full={true}>
                Learn More
              </ButtonSecondary>
            </div>
          </HeroCenterContent>
        </main>

        <section className="mt-20 mb-10 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          <FeatureCard
            img={weightFigmaIcon}
            title="Design"
            desc="The project interface will be designed first, our favorite tool is Figma."
          />
          <FeatureCard
            img={weightCodeIcon}
            title="Develop"
            desc="Transform design and write business logic here. Choose the technology you want."
          />
          <FeatureCard
            img={weightBoxIcon}
            title="Ship"
            desc="After the work is complete, we will send the project and all its assets to you."
          />
        </section>

        <CompanyLogo />

        <SectionLine>
          <SectionImage>
            <div className="absolute -z-10">
              <div className="blur-particle w-[500px] h-[500px] bg-yellow translate-x-[-70px] translate-y-[100px]"></div>
              <div className="blur-particle w-[350px] h-[350px] bg-green translate-x-[300px] translate-y-[-550px]"></div>
            </div>
            <Image src={img_howwework} alt="illustration" />
          </SectionImage>
          <SectionBadge
            label="how we work?"
            title="Everything is well planned, well designed and developed
            wholeheartedly"
            desc="Careful planning makes us confident, developed with best practices
            so that the project can be maintained. We always test projects
            before they are shipped."
          />
        </SectionLine>

        <SectionLine>
          <SectionImage img_right={true}>
            <div className="absolute -z-10">
              <div className="blur-particle bg-red w-[450px] h-[450px] translate-x-[-50px] translate-y-[100px]"></div>
              <div className="blur-particle bg-primary w-[300px] h-[300px] translate-y-[-500px] translate-x-[300px]"></div>
            </div>
            <Image src={img_ourteam} alt="illustration" />
          </SectionImage>
          <SectionBadge
            img_right={true}
            label="our team"
            title="We're a team of designers, engineers and analysts"
            desc="Our team consists of many creative people. We are committed to
            maintaining quality work as well as speed. These creative people
            work together to create maximum work results."
          >
            <div className="mt-8">
              <ButtonSecondary type="muted" size="small" w_full={true}>
                See Our Teams
              </ButtonSecondary>
            </div>
          </SectionBadge>
        </SectionLine>

        <section className="w-full mt-16 lg:mt-20">
          <div className="w-full flex justify-center items-center">
            <div className="w-full md:w-2/3">
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

        <section className="md:px-10">
          <div className="bg-hightlight rounded-[30px] py-10">
            <HeroCenterContent
              size="small"
              label="get started"
              title="What do you need? Choose a service that can help you"
              desc=""
            ></HeroCenterContent>
            <div className="px-4 md:px-20 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
              <PriceCard
                bg="bg-[#3F2379]"
                type_service="UI Design"
                price="1200"
                services="10 design pages, Well-documented, 4 revisions, $100/additional page"
              />
              <PriceCard
                bg="bg-[#233679]"
                type_service="Development"
                price="5000"
                services="Web & Mobile, Well-documented, 8 revisions, $1000/additional feature"
              />
              <PriceCard
                bg="bg-[#792366]"
                type_service="Maintenance"
                price="3000"
                services="Daily backup, 3 hours of maintenance, Including fixing, $50/additional hour"
              />
            </div>
          </div>
        </section>

        <section>
          <HeroCenterContent
            size="small"
            title="What do our clients say that we never let down?"
            desc=""
            label="testimonial"
          />
        </section>
      </Layout>
    </>
  );
};

export default Home;
