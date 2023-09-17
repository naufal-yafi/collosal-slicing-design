import ButtonPrimary from "@button/ButtonPrimary";
import ButtonSecondary from "@button/ButtonSecondary";
import CompanyLogo from "@component/CompanyLogo";
import Layout from "@component/Layout";
import NotoSans from "@data/NotoSans";
import GetStarted from "@layout/Home/GetStarted";
import GroupFeatureCard from "@layout/Home/GroupFeatureCard";
import HowWeWork from "@layout/Home/HowWeWork";
import OurTeam from "@layout/Home/OurTeam";
import Projects from "@layout/Home/Projects";
import Testimonial from "@layout/Home/Testimonial";
import HeroCenterContent from "@section/HeroCenterContent";

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
              <ButtonPrimary w_full={true} link="/quote">
                Send Quote
              </ButtonPrimary>
              <ButtonSecondary type="muted" w_full={true}>
                Learn More
              </ButtonSecondary>
            </div>
          </HeroCenterContent>
        </main>

        <GroupFeatureCard />
        <CompanyLogo />
        <HowWeWork />
        <OurTeam />
        <Projects />
        <GetStarted />
        <Testimonial />
      </Layout>
    </>
  );
};

export default Home;
