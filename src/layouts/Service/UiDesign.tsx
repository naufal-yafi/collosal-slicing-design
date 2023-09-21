import ButtonArrow from "@button/ButtonArrow";
import SmallCardIcon from "@card/SmallCardIcon";
import icon_layout from "@icon/layout.svg";
import icon_cursor from "@icon/mouse-pointer.svg";
import particleRed from "@icon/particle-red.svg";
import illustration from "@image/ui-design-illustration.svg";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";
import Image from "next/image";

const UiDesign = () => {
  return (
    <div id="ui-design">
      <SectionLine>
        <SectionImage>
          <div className="absolute -z-10">
            <div className="blur-particle w-[500px] h-[500px] bg-yellow translate-x-[-70px] translate-y-[100px]"></div>
            <div className="blur-particle w-[350px] h-[350px] bg-green translate-x-[300px] translate-y-[-550px]"></div>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src={particleRed}
              alt="particle"
              className="absolute -z-10 left-2 lg:left-5 translate-y-[150px]"
              width={40}
              height={40}
            />
            <Image src={illustration} alt="illustration" />
          </div>
        </SectionImage>
        <SectionBadge
          label="ui design"
          title="Don't let your idea get caught by others, design a prototype for your idea"
          desc="Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-5">
            <SmallCardIcon
              icon={icon_layout}
              title="Beatiful Design"
              desc="Create a modern design for your idea."
            />
            <SmallCardIcon
              icon={icon_cursor}
              title="Easy to Use"
              desc="Create vivid prototypes for your designs."
            />
          </div>
          <div className="w-full flex justify-end mt-8">
            <ButtonArrow />
          </div>
        </SectionBadge>
      </SectionLine>
    </div>
  );
};

export default UiDesign;
