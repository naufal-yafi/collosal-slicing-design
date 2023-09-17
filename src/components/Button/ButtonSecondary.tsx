import Link from "next/link";

const ButtonSecondary = (props: any) => {
  let COLORS: string = "";

  if (props.type === "muted") {
    COLORS = "button-light text-white";
  } else if (props.type === "outline") {
    COLORS = "border-[1px] border-white text-white";
  } else {
    COLORS = "bg-white text-dark";
  }

  const SIZE =
    props.size === "large"
      ? "text-[12px] px-[45px] h-[42px] font-semibold"
      : "text-[12px] px-[30px] py-[10px] font-medium";
  const ROUNDED = props.rounded ? "rounded-full" : "rounded-[3px]";
  const WIDTH = props.w_full ? "px-0 w-full md:w-auto md:px-[45px]" : "";
  const LONG = props.long ? "px-0 w-full " : "";

  return (
    <>
      <Link href={props.link}>
        <button
          className={`${COLORS} ${SIZE} ${ROUNDED} hover:opacity-80 ${LONG}${WIDTH}`}
          style={{ whiteSpace: "nowrap" }}
        >
          {props.children}
        </button>
      </Link>
    </>
  );
};

ButtonSecondary.defaultProps = {
  link: "/",
  size: "large",
  w_full: false,
  long: false,
  type: "default",
  rounded: false,
  children: "Button",
};

export default ButtonSecondary;
