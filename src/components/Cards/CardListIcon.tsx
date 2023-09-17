import iconWeb from "@icon/globe.svg";
import iconDesktop from "@icon/monitor.svg";
import iconMobile from "@icon/smartphone.svg";
import Image from "next/image";

const CardListIcon = (props: any) => {
  let ICON: any;

  if (props.type === "mobile") {
    ICON = iconMobile;
  } else if (props.type === "web") {
    ICON = iconWeb;
  } else {
    ICON = iconDesktop;
  }

  return (
    <>
      <div className="w-full bg-light border-[1px] border-light text-white font-medium rounded-[3px] px-5 py-4">
        <figure className="flex gap-4 items-center">
          <Image src={ICON} alt="icon" />
          <p>
            {props.type.charAt(0).toUpperCase() + props.type.slice(1)} App
            Development
          </p>
        </figure>
      </div>
    </>
  );
};

CardListIcon.defaultProps = {
  type: "desktop",
};

export default CardListIcon;
