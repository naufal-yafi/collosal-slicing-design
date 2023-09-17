import NotoSans from "@data/NotoSans";
import Link from "next/link";

const ButtonPrimary = (props: any) => {
  let COLORS: string = "";

  if (props.type === "muted") {
    COLORS = "primary-light text-white";
  } else if (props.type === "outline") {
    COLORS = "border-[1px] border-primary text-primary";
  } else {
    COLORS = "bg-primary text-white";
  }

  const SIZE =
    props.size === "large"
      ? "text-[12px] px-[45px] h-[42px]"
      : "text-[12px] px-[30px] py-[10px]";
  const ROUNDED = props.rounded ? "rounded-full" : "rounded-[3px]";
  const WIDTH = props.w_full ? "px-0 w-full md:px-[45px]" : "";
  const LONG = props.long ? "px-0 w-full " : "";

  return (
    <>
      <Link href={props.link}>
        <button
          className={`${COLORS} ${NotoSans.className} ${SIZE} ${ROUNDED} font-medium hover:opacity-80 ${LONG}${WIDTH}`}
          style={{ whiteSpace: "nowrap" }}
        >
          {props.children}
        </button>
      </Link>
    </>
  );
};

ButtonPrimary.defaultProps = {
  link: "/",
  size: "large",
  w_full: false,
  type: "default",
  long: false,
  rounded: false,
  children: "Button",
};

export default ButtonPrimary;
