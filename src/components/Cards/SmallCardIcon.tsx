import Image from "next/image";

const SmallCardIcon = (props: any) => {
  return (
    <>
      <figure className="p-8 rounded-[3px] border-[1px] border-light bg-light text-white">
        <div className="flex items-center gap-4">
          <Image src={props.icon} alt="icon" width={35} height={35} />
          <h1 className="font-bold text-lg">{props.title}</h1>
        </div>
        <p className="text-muted mt-6">{props.desc}</p>
      </figure>
    </>
  );
};

SmallCardIcon.defaultProps = {
  icon: "/",
  title: "Your Title",
  desc: "Your description",
};

export default SmallCardIcon;
