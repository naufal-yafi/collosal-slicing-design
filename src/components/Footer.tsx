/* eslint-disable react/jsx-key */
import particleGreen from "@logo/particle-green.svg";
import particleRed from "@logo/particle-red.svg";
import Image from "next/image";
import BottomNavigation from "./BottomNavigation";
import ButtonPrimary from "./Button/ButtonPrimary";
import ButtonSecondary from "./Button/ButtonSecondary";

const CTA = () => {
  return (
    <div
      id="cta"
      className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center border-t-[1px] border-b-[1px] py-10 border-light"
    >
      <h1 className="text-white font-bold text-[22px] lg:text-[22px] pr-0 lg:pr-28">
        We&apos;ve prepared everything, it&apos;s time for you to tell the
        problem
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
        <ButtonPrimary w_full={true}>Send Quote</ButtonPrimary>
        <ButtonSecondary type="muted" w_full={true}>
          Ask Us
        </ButtonSecondary>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full mt-32 px-6 md:px-32 pb-24">
      <CTA />

      <BottomNavigation />

      <div>
        <Image
          src={particleRed}
          alt="particle"
          className="absolute right-5 -z-10 translate-y-[-1000px] translate-x-[45px] md:translate-y-[-600px] md:translate-x-[-50px] lg:translate-x-[-15px] lg:translate-y-[-400px]"
          height={55}
          width={55}
        />
        <Image
          src={particleGreen}
          alt="particle"
          className="absolute left-10 -z-10 translate-y-[-750px] translate-x-[30px] md:translate-y-[-300px] lg:translate-x-[-28px] lg:translate-y-[-200px]"
          height={47}
          width={47}
        />
      </div>
    </footer>
  );
};

export default Footer;
