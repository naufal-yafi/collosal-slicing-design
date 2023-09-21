import iconUp from "@icon/chevron-up.svg";
import Image from "next/image";

const DetailFaq = (props: any) => {
  return (
    <>
      <details className="text-white cursor-pointer">
        <summary className="text-xl font-bold list-none flex justify-between">
          {props.title}
          <Image src={iconUp} alt="icon up" className="rotate-180" />
        </summary>
        <p className="text-sm mt-3 text-muted tracking-wider leading-loose">
          {props.desc}
        </p>
      </details>
    </>
  );
};

DetailFaq.defaultProps = {
  title: "Your Title",
  desc: "Your descriptions...",
};

export default DetailFaq;
