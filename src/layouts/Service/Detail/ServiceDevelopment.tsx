import illustration from "@image/development-illustration.svg";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";
import Image from "next/image";

const ServiceDevelopment = () => {
  return (
    <>
      <SectionLine>
        <div className="absolute -z-10">
          <div className="blur-particle w-[500px] h-[500px] bg-yellow translate-x-[-70px] translate-y-[100px]"></div>
          <div className="blur-particle w-[350px] h-[350px] bg-green translate-x-[300px] translate-y-[-550px]"></div>
        </div>
        <SectionImage>
          <Image src={illustration} alt="illustration" />
        </SectionImage>
        <SectionBadge
          label=""
          title=""
          desc="Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution."
        >
          <p className="text-muted mt-8">
            We can build you a website, a mobile app and a desktop app. All
            types of applications have a good security system, are easy to
            maintain, and are high speed.
          </p>
          <div className="mt-8 flex flex-col gap-2">
            <div className="text-white flex items-center gap-5">
              <div className="w-2 h-2 bg-white"></div>
              <p>Avoid potential bugs with unit testing</p>
            </div>
            <div className="text-white flex items-center gap-5">
              <div className="w-2 h-2 bg-white"></div>
              <p>Removing unused code will speed up the application</p>
            </div>
            <div className="text-white flex items-center gap-5">
              <div className="w-2 h-2 bg-white"></div>
              <p>The modern design pleases the users</p>
            </div>
            <div className="text-white flex items-center gap-5">
              <div className="w-2 h-2 bg-white"></div>
              <p>A good UX will not disappoint users</p>
            </div>
          </div>
        </SectionBadge>
      </SectionLine>
    </>
  );
};

export default ServiceDevelopment;
