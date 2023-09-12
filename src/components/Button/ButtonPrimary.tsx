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
      ? "text-[12px] px-[45px] h-[42px] font-semibold"
      : "text-[12px] px-[30px] py-[10px] font-medium";
  const ROUNDED = props.rounded ? "rounded-full" : "rounded-[3px]";

  return (
    <>
      <Link href={props.link}>
        <button
          className={`${COLORS} ${SIZE} ${ROUNDED} hover:opacity-80`}
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
  type: "default",
  rounded: false,
  children: "Button",
};

export default ButtonPrimary;
