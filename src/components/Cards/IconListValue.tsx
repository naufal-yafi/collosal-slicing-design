import Image from "next/image";

const CardListValue = (props: any) => {
  return (
    <>
      <figure className="text-white font-medium flex items-center gap-4 mt-10">
        <div className="w-12 h-12 bg-light flex justify-center items-center rounded-[3px]">
          <Image src={props.icon} alt="icon" width={20} height={20} />
        </div>
        <h1>{props.value}</h1>
      </figure>
    </>
  );
};

CardListValue.defaultProps = {
  icon: "/",
  value: "Your Value",
};

export default CardListValue;
