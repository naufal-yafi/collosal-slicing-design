import ButtonSecondary from "@button/ButtonSecondary";
import img_ourteam from "@image/our-team.svg";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";
import Image from "next/image";

const OurTeam = () => {
  return (
    <>
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
    </>
  );
};

export default OurTeam;
