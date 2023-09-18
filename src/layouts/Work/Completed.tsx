import illustration from "@image/finishing-project.svg";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";
import Image from "next/image";

const Completed = () => {
  return (
    <>
      <SectionLine>
        <SectionImage>
          <div className="absolute -z-10">
            <div className="blur-particle w-[500px] h-[500px] bg-green translate-x-[-70px] translate-y-[100px]"></div>
            <div className="blur-particle w-[350px] h-[350px] bg-yellow translate-x-[300px] translate-y-[-550px]"></div>
          </div>
          <Image src={illustration} alt="illustration" />
        </SectionImage>
        <SectionBadge
          label="step 03"
          title="The project is complete and we ship all the project assets, and access to the server"
          desc="We will be responsible for delivering all the project assets to you, don't worry. These assets include, design files, source code, server access, and so on."
        >
          <p className="text-sm text-muted mt-8">
            In this step, everything is done and the contract ends.
          </p>
        </SectionBadge>
      </SectionLine>
    </>
  );
};

export default Completed;
