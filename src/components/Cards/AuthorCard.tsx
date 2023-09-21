import logoFB from "@logo/facebook-icon.svg";
import logoLinked from "@logo/linkedin-icon.svg";
import logoTwitter from "@logo/twitter-icon.svg";
import Image from "next/image";
import Link from "next/link";

const AuthorCard = (props: any) => {
  return (
    <>
      <figure className="p-8 bg-light rounded-[3px] flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="w-20 h-20 rounded-full">
          <Image src={props.photo} alt="photo" width={80} height={80} />
        </div>
        <div className="text-white w-auto">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 lg:gap-0">
            <hgroup className="flex flex-col items-center gap-1 md:items-start">
              <h1 className="font-bold text-lg">{props.name}</h1>
              <p className="text-muted">{props.job}</p>
            </hgroup>
            <div className="flex gap-8">
              <Link href={props.twitter} target="_blank">
                <div className="w-12 h-12 bg-light rounded-full flex justify-center items-center">
                  <Image src={logoTwitter} alt="twitter" />
                </div>
              </Link>
              <Link href={props.facebook} target="_blank">
                <div className="w-12 h-12 bg-light rounded-full flex justify-center items-center">
                  <Image src={logoFB} alt="facebook" />
                </div>
              </Link>
              <Link href={props.linkedin} target="_blank">
                <div className="w-12 h-12 bg-light rounded-full flex justify-center items-center">
                  <Image src={logoLinked} alt="linkedin" />
                </div>
              </Link>
            </div>
          </div>
          <p className="mt-8">{props.desc}</p>
        </div>
      </figure>
    </>
  );
};

AuthorCard.defaultProps = {
  photo: "/",
  name: "Your Name",
  job: "Your Job",
  desc: "Night subdue their morning created every light earth very darkness they're you're deep female. Tree sixth divided greater, midst earth forth won't for moved.",
  twitter: "",
  facebook: "",
  linkedin: "",
};

export default AuthorCard;
