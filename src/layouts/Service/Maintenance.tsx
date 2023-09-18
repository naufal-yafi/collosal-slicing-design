import ButtonArrow from "@button/ButtonArrow";
import CardListValue from "@card/IconListValue";
import iconUp from "@icon/arrow-up.svg";
import iconCheck from "@icon/check-circle.svg";
import iconDownload from "@icon/download.svg";
import iconRefresh from "@icon/refresh-ccw.svg";
import illustration from "@image/maintenance-illustration.svg";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";
import Image from "next/image";

const Maintenance = () => {
  return (
    <div id="maintenance">
      <SectionLine>
        <SectionImage>
          <div className="absolute -z-10">
            <div className="blur-particle w-[500px] h-[500px] bg-yellow translate-x-[-70px] translate-y-[100px]"></div>
            <div className="blur-particle w-[350px] h-[350px] bg-green translate-x-[300px] translate-y-[-550px]"></div>
          </div>
          <div className="mb-8 lg:mb-0">
            <Image src={illustration} alt="illustration" />
          </div>
        </SectionImage>
        <SectionBadge
          label="maintenance"
          title="Think of your server as your own child, taking care of it every day"
          desc="We will back up your servers every day, clean them every week, upgrade them when there is an update."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <CardListValue icon={iconDownload} value="Back up every day" />
            <CardListValue icon={iconUp} value="Upgrade" />
            <CardListValue icon={iconRefresh} value="Cleaning every week" />
            <CardListValue icon={iconCheck} value="Fixing error" />
          </div>
          <div className="w-full mt-8 flex justify-end">
            <ButtonArrow />
          </div>
        </SectionBadge>
      </SectionLine>
    </div>
  );
};

export default Maintenance;
