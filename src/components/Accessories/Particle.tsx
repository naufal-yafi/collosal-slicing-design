import particleLeft from "@image/particle-left.svg";
import particleRight from "@image/particle-right.svg";
import Image from "next/image";

const Particle = () => {
  return (
    <>
      <div className="absolute left-0 w-full flex justify-between">
        <Image
          src={particleLeft}
          alt="particle"
          className="w-20 md:w-32 lg:w-36 translate-x-[-50px] md:translate-x-0"
        />
        <Image
          src={particleRight}
          alt="particle"
          className="w-24 md:w-36 lg:w-44 translate-x-[20px] md:translate-x-0"
        />
      </div>
    </>
  );
};

export default Particle;
