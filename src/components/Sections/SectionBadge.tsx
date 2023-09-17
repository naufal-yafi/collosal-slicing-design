const SectionBadge = (props: any) => {
  return (
    <>
      <div className={`w-full ${props.img_right ? "order-2 lg:order-1" : ""}`}>
        <hgroup className="text-white">
          <h2 className="text-green text-[12px] md:text-[14px] mb-2 uppercase">
            {props.label}
          </h2>
          <h1 className="text-[27px] md:text-[30px] font-bold tracking-wide">
            {props.title}
          </h1>
          <p className="text-[14px] text-muted leading-loose mt-5">
            {props.desc}
          </p>
        </hgroup>
        {props.children}
      </div>
    </>
  );
};

SectionBadge.defaultProps = {
  label: "Your Label",
  title: "Your Title",
  desc: "Your description",
  children: "",
  img_right: false,
};

export default SectionBadge;
