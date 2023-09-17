import Image from "next/image";

const FeatureCard = (props: any) => {
  return (
    <div className="w-full h-full px-8 py-6 lg:pt-5 bg-light rounded-[5px]">
      <div className="h-12 w-12 bg-light rounded-[3px] flex justify-center items-center">
        <Image src={props.img} alt="icon" width={20} height={20} />
      </div>

      <hgroup className="text-white mt-5">
        <h1 className="font-bold">{props.title}</h1>
        <p className="text-muted leading-relaxed mt-2">{props.desc}</p>
      </hgroup>
    </div>
  );
};

FeatureCard.defaultProps = {
  img: "/",
  title: "Your Title",
  desc: "Your Description",
};

export default FeatureCard;
