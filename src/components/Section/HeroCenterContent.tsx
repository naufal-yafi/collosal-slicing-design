const HeroCenterContent = (props: any) => {
  const SIZE =
    props.size === "small"
      ? "text-[27px] md:text-[30px]"
      : "text-[32px] md:text-[35px]";
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <hgroup className="text-center text-white w-2/3">
          <h2
            className={`${
              props.red_label ? "text-red font-medium" : "text-green"
            } text-[13px] md:text-[15px] mb-4 uppercase`}
          >
            {props.label}
          </h2>
          <h1 className={`${SIZE} font-bold tracking-wide`}>{props.title}</h1>
          <p className="text-[14px] text-muted leading-loose mt-5">
            {props.desc}
          </p>
        </hgroup>
        {props.children}
      </div>
    </>
  );
};

HeroCenterContent.defaultProps = {
  title: "Your Title",
  label: "Your Label",
  desc: "Your descriptions",
  size: "large",
  red_label: false,
  children: "",
};

export default HeroCenterContent;
