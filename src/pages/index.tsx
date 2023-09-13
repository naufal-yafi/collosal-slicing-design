import ButtonPrimary from "@button/ButtonPrimary";
import ButtonSecondary from "@button/ButtonSecondary";
import BackgroundBlur from "@component/BackgroundBlur";
import CompanyLogo from "@component/CompanyLogo";
import FeatureCard from "@component/FeatureCard";
import Footer from "@component/Footer";
import Header from "@component/Header";
import Title from "@component/Title";
import img_howwework from "@image/how-we-work.svg";
import img_ourteam from "@image/our-team.svg";
import weightBoxIcon from "@logo/weight-box.svg";
import weightCodeIcon from "@logo/weight-code.svg";
import { Noto_Sans } from "next/font/google";
import Image from "next/image";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <Title />

      <Header />

      <BackgroundBlur />

      <main
        className={`${notoSans.className} pt-32 md:pt-40 px-6 z-0 md:px-32 flex flex-col justify-center items-center`}
      >
        <hgroup className="text-center text-white w-2/3">
          <h2 className="text-green text-[13px] md:text-[15px] mb-4 uppercase">
            CLIENT-DEVELOPMENT DRIVEN
          </h2>
          <h1 className="text-[32px] md:text-[35px] font-bold tracking-wide">
            We Design. We Develop. We Ship. In The Same Day.
          </h1>
          <p className="text-[14px] text-muted leading-loose mt-5">
            We are committed to not making clients wait. We will deliver the
            work as quickly as possible. Even on the same day. Even so, we do
            not reduce the quality of our work.
          </p>
        </hgroup>
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-5 mt-8">
          <ButtonPrimary w_full={true}>Send Quote</ButtonPrimary>
          <ButtonSecondary type="muted" w_full={true}>
            Learn More
          </ButtonSecondary>
        </div>
      </main>

      <section className="mt-20 mb-10 lg:mt-24 px-6 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-5">
        <FeatureCard />
        <FeatureCard
          img={weightCodeIcon}
          title="Develop"
          desc="Transform design and write business logic here. Choose the technology you want."
        />
        <FeatureCard
          img={weightBoxIcon}
          title="Ship"
          desc="After the work is complete, we will send the project and all its assets to you."
        />
      </section>

      <CompanyLogo />

      <section className="mt-8 lg:mt-20 px-6 lg:px-32 grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center">
        <div>
          <div className="absolute -z-10">
            <div className="blur-particle w-[500px] h-[500px] bg-yellow translate-x-[-70px] translate-y-[100px]"></div>
            <div className="blur-particle w-[350px] h-[350px] bg-green translate-x-[300px] translate-y-[-550px]"></div>
          </div>
          <Image src={img_howwework} alt="illustration" />
        </div>
        <hgroup className="w-full text-white text-center md:text-start">
          <h2 className="text-green text-[12px] md:text-[14px] mb-2 uppercase">
            HOW WE WORK?
          </h2>
          <h1 className="text-[27px] md:text-[30px] font-bold tracking-wide">
            Everything is well planned, well designed and developed
            wholeheartedly
          </h1>
          <p className="text-[14px] text-muted leading-loose mt-5">
            Careful planning makes us confident, developed with best practices
            so that the project can be maintained. We always test projects
            before they are shipped.
          </p>
        </hgroup>
      </section>

      <section className="mt-16 lg:mt-20 px-6 lg:px-32 grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center">
        <hgroup className="text-white text-center md:text-start order-2 md:order-1">
          <h2 className="text-green text-[12px] md:text-[14px] mb-2 uppercase">
            OUR TEAM
          </h2>
          <h1 className="text-[27px] md:text-[30px] font-bold tracking-wide">
            We&apos;re a team of designers, engineers and analysts
          </h1>
          <p className="text-[14px] text-muted leading-loose mt-5 mb-8">
            Our team consists of many creative people. We are committed to
            maintaining quality work as well as speed. These creative people
            work together to create maximum work results.
          </p>
          <ButtonSecondary type="muted" size="small">
            See Our Teams
          </ButtonSecondary>
        </hgroup>
        <div className="order-1 md:order-2">
          <Image src={img_ourteam} alt="illustration" />
        </div>
      </section>

      <Footer />
    </>
  );
}
