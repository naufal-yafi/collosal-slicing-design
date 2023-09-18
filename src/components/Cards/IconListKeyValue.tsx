import Image from "next/image";

const IconListKeyValue = (props: any) => {
  const isSmall = props.size === "small";
  const TEXT_SIZE = isSmall ? "font-medium" : "text-white font-bold text-3xl";
  const POSITION = isSmall ? "flex-col" : "flex-col-reverse gap-1";

  return (
    <>
      <figure className="text-white flex gap-5 items-center">
        <div className="w-14 h-14 bg-light rounded-[3px] flex justify-center items-center">
          <Image src={props.icon} alt="icon" width={20} height={20} />
        </div>
        <hgroup className={`flex ${POSITION}`}>
          <h1 className="text-sm text-muted">{props.key_value}</h1>
          <p className={TEXT_SIZE}>{props.value}</p>
        </hgroup>
      </figure>
    </>
  );
};

IconListKeyValue.defaultProps = {
  icon: "/",
  key_value: "Your Key",
  size: "small",
  value: "Your Value",
};

export default IconListKeyValue;
