import CompanyLogo from "@component/CompanyLogo";
import Layout from "@component/Layout";
import illustration from "@image/about.svg";
import OurTeam from "@layout/About/OurTeam";
import Statistics from "@layout/About/Statistics";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Layout title="Who we are - About | Collosal" params="/about">
        <div className="pt-14">
          <SectionLine>
            <SectionImage>
              <div className="w-full flex justify-center">
                <Image src={illustration} alt="illustration" />
              </div>
            </SectionImage>
            <SectionBadge
              label="about"
              title="We are creative, smart and hardworking people"
              desc="Several creative people gather in the same place - that's Collosal. We collaborate to produce the best results, loved by clients and comfortable for users. Here we maintain togetherness even though with different backgrounds, all the people here are already experts in their respective fields."
            />
          </SectionLine>
        </div>

        <section>
          <hr className="border-light" />
        </section>

        <Statistics />
        <CompanyLogo />
        <OurTeam />
      </Layout>
    </>
  );
};

export default About;
