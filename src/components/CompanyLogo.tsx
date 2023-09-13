import facebookLogo from "@logo/facebook-logo.svg";
import forbesLogo from "@logo/forbes-logo.svg";
import githubLogo from "@logo/github-logo.svg";
import googleLogo from "@logo/google-logo.svg";
import microsoftLogo from "@logo/microsoft-logo.svg";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="w-full px-6 md:px-32 mt-16">
      <div className="border-y-[1px] border-light py-8 flex gap-10 justify-center">
        <Image src={githubLogo} alt="github logo" width={90} />
        <Image src={forbesLogo} alt="forbes logo" width={90} />
        <Image src={googleLogo} alt="google logo" width={90} />
        <Image src={microsoftLogo} alt="microsoft logo" width={90} />
        <Image src={facebookLogo} alt="facebook logo" width={90} />
      </div>
    </div>
  );
};

export default CompanyLogo;
