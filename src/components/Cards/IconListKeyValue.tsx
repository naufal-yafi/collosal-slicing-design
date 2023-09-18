import Image from "next/image";

const IconListKeyValue = (props: any) => {
  return (
    <>
      <figure className="text-white flex gap-5 items-center">
        <div className="w-14 h-14 bg-light rounded-[3px] flex justify-center items-center">
          <Image src={props.icon} alt="icon" width={20} height={20} />
        </div>
        <hgroup>
          <h1 className="text-sm text-muted">{props.key_value}</h1>
          <p className="font-medium">{props.value}</p>
        </hgroup>
      </figure>
    </>
  );
};

IconListKeyValue.defaultProps = {
  icon: "/",
  key_value: "Your Key",
  value: "Your Value",
};

export default IconListKeyValue;
