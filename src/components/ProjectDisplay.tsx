import ButtonSecondary from "@button/ButtonSecondary";
import img_desktop from "@image/desktop-display.svg";
import img_mobile from "@image/mobile-display.svg";
import Image from "next/image";

const ProjectDisplay = (props: any) => {
  const isDesktop = props.display === "desktop" ? true : false;
  const ASSETS = isDesktop ? img_desktop : img_mobile;
  const LINK = isDesktop ? "/project/desktop" : "/project/mobile";
  const TITLE = isDesktop
    ? "The Desktop App Landing Page"
    : "The Mobile App Landing Page";
  const DESC = isDesktop
    ? "A landing page for desktop app"
    : "A landing page for mobile app";

  return (
    <>
      <div className="w-full flex flex-col gap-0">
        <Image src={ASSETS} alt="display project" className="w-full m-0 p-0" />
        <hgroup className="text-white m-0 text-center p-0">
          <h1 className="font-bold">{TITLE}</h1>
          <p className="text-muted mb-5">{DESC}</p>
          <ButtonSecondary link={LINK} size="small" type="outline">
            Detail
          </ButtonSecondary>
        </hgroup>
      </div>
    </>
  );
};

ProjectDisplay.defaultProps = {
  title: "Your Project Name",
  desc: "Your description project",
  display: "desktop",
};

export default ProjectDisplay;
