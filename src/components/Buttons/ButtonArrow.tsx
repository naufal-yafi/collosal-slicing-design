import arrowright from "@icon/arrow-right.svg";
import Image from "next/image";
import Link from "next/link";
const ButtonArrow = (props: any) => {
  return (
    <>
      <Link href={props.link}>
        <button className="text-white flex items-center gap-3 font-medium">
          {props.children}
          <Image src={arrowright} alt="icon arrow" />
        </button>
      </Link>
    </>
  );
};

ButtonArrow.defaultProps = {
  children: "Service Detail",
  link: "/service/detail",
};

export default ButtonArrow;
