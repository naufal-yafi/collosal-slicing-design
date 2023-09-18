import Image from "next/image";

const FeatureCard = (props: any) => {
  const ICON_SIZE = props.icon_size === "small" ? 20 : 30;
  const STYLE_CONTAINER = props.icon_size === "small" ? "px-8 py-6" : "p-10";
  const STYLE_BORDER_ICON =
    props.icon_size === "small" ? "bg-light justify-center" : "justify-start";

  return (
    <div
      className={`w-full h-full ${STYLE_CONTAINER} lg:pt-5 bg-light rounded-[5px]`}
    >
      <div
        className={`h-12 w-12 rounded-[3px] flex items-center ${STYLE_BORDER_ICON}`}
      >
        <Image
          src={props.icon}
          alt="icon"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </div>

      <hgroup className="text-white mt-5">
        <h1 className="font-bold">{props.title}</h1>
        <p className="text-muted leading-relaxed mt-2">{props.desc}</p>
      </hgroup>
    </div>
  );
};

FeatureCard.defaultProps = {
  icon: "/",
  title: "Your Title",
  desc: "Your Description",
  icon_size: "small",
};

export default FeatureCard;
