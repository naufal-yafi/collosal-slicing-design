import illustration from "@image/planning-development-illustration.svg";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";
import Image from "next/image";

const PlanningDevelopment = () => {
  return (
    <>
      <SectionLine>
        <SectionImage img_right={true}>
          <div className="absolute -z-10">
            <div className="blur-particle bg-red w-[450px] h-[450px] translate-x-[-50px] translate-y-[100px]"></div>
            <div className="blur-particle bg-primary w-[300px] h-[300px] translate-y-[-500px] translate-x-[300px]"></div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image src={illustration} alt="illustration" />
          </div>
        </SectionImage>
        <SectionBadge
          img_right={true}
          label="step 02"
          title="Doing planning, design and development until everything is finished"
          desc="When everything is agreed upon, our team will make plans related to the application that will be created. Starting from analysis, design, to development."
        >
          <p className="text-sm text-muted mt-8">
            In this step, the application is 100% complete.
          </p>
        </SectionBadge>
      </SectionLine>
    </>
  );
};

export default PlanningDevelopment;
