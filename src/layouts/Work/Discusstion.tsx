import illustration from "@image/discuss-illustration.svg";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";
import Image from "next/image";

const Discusstion = () => {
  return (
    <>
      <SectionLine>
        <SectionImage>
          <div className="absolute -z-10">
            <div className="blur-particle w-[500px] h-[500px] bg-yellow translate-x-[-70px] translate-y-[100px]"></div>
            <div className="blur-particle w-[350px] h-[350px] bg-green translate-x-[300px] translate-y-[-550px]"></div>
          </div>
          <Image src={illustration} alt="illustration" />
        </SectionImage>
        <SectionBadge
          label="step 01"
          title="Let's talk about your company's problems first"
          desc="After submitting the quote form, we will review the data, then we will contact you. You can discuss with our team regarding your problem and find a solution to that problem."
        >
          <p className="text-sm text-muted mt-8">
            In this step, you will discuss what application to build.
          </p>
        </SectionBadge>
      </SectionLine>
    </>
  );
};

export default Discusstion;
