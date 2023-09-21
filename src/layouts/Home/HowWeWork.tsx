import img_howwework from "@image/how-we-work.svg";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";
import Image from "next/image";

const HowWeWork = () => {
  return (
    <>
      <SectionLine>
        <SectionImage>
          <div className="absolute -z-10">
            <div className="blur-particle w-[500px] h-[500px] bg-yellow translate-x-[-70px] translate-y-[100px]"></div>
            <div className="blur-particle w-[350px] h-[350px] bg-green translate-x-[300px] translate-y-[-550px]"></div>
          </div>
          <div className="w-full flex justify-center">
            <Image src={img_howwework} alt="illustration" />
          </div>
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
    </>
  );
};

export default HowWeWork;
