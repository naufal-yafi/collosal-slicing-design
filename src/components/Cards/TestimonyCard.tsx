import iconImageBadge from "@logo/quote-badge.svg";
import Image from "next/image";

const TestimonyCard = (props: any) => {
  const STYLE = props.flyup
    ? "border-[1px] border-primary lg:translate-y-[-35px]"
    : "";
  return (
    <>
      <div className={`bg-light rounded-[3px] px-8 py-16 ${STYLE} -z-10`}>
        <figure className="flex justify-center items-end">
          <div className="h-20 w-20 rounded-full bg-dark">
            <Image src={props.img} alt="photo profile" width={80} height={80} />
          </div>
          <Image
            src={iconImageBadge}
            alt="quote badge"
            className="absolute translate-x-[30px]"
          />
        </figure>
        <hgroup className="text-white text-center mt-10">
          <h1 className="font-bold">{props.name}</h1>
          <h2 className="text-muted mt-2">{props.job}</h2>
          <p className="text-muted mt-10">{`"${props.comment}"`}</p>
        </hgroup>
      </div>
    </>
  );
};

TestimonyCard.defaultProps = {
  img: "/",
  name: "Your Name",
  job: "Your Job",
  comment: "Your comments...",
  flyup: false,
};

export default TestimonyCard;
