import ButtonArrow from "@button/ButtonArrow";
import CardListValue from "@card/CardListValue";
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
    <>
      <SectionLine>
        <SectionImage>
          <div className="absolute -z-10">
            <div className="blur-particle w-[500px] h-[500px] bg-yellow translate-x-[-70px] translate-y-[100px]"></div>
            <div className="blur-particle w-[350px] h-[350px] bg-green translate-x-[300px] translate-y-[-550px]"></div>
          </div>
          <Image src={illustration} alt="illustration" />
        </SectionImage>
        <SectionBadge
          label="maintenance"
          title="Think of your server as your own child, taking care of it every day"
          desc="We will back up your servers every day, clean them every week, upgrade them when there is an update."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <CardListValue icon={iconDownload} title="Back up every day" />
            <CardListValue icon={iconUp} title="Upgrade" />
            <CardListValue icon={iconRefresh} title="Cleaning every week" />
            <CardListValue icon={iconCheck} title="Fixing error" />
          </div>
          <div className="w-full mt-8 flex justify-end">
            <ButtonArrow />
          </div>
        </SectionBadge>
      </SectionLine>
    </>
  );
};

export default Maintenance;
