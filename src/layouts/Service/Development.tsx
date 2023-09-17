import ButtonArrow from "@button/ButtonArrow";
import CardListIcon from "@card/CardListIcon";
import illustration from "@image/development-illustration.svg";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";
import Image from "next/image";

const Development = () => {
  return (
    <>
      <SectionLine>
        <SectionImage img_right={true}>
          <div className="absolute -z-10">
            <div className="blur-particle bg-red w-[450px] h-[450px] translate-x-[-50px] translate-y-[100px]"></div>
            <div className="blur-particle bg-primary w-[300px] h-[300px] translate-y-[-500px] translate-x-[300px]"></div>
          </div>
          <div className="w-full flex justify-end">
            <Image src={illustration} alt="illustration" />
          </div>
        </SectionImage>
        <SectionBadge
          img_right={true}
          label="development"
          title="Create solutions to repetitive problems, design applications and access anywhere!"
          desc="Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution."
        >
          <div className="w-full flex flex-col gap-5 mt-10">
            <CardListIcon type="mobile" />
            <CardListIcon />
            <CardListIcon type="web" />
          </div>
          <div className="w-full flex justify-end mt-8">
            <ButtonArrow />
          </div>
        </SectionBadge>
      </SectionLine>
    </>
  );
};

export default Development;
