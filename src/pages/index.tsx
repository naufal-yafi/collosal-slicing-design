import ButtonPrimary from "@button/ButtonPrimary";
import ButtonSecondary from "@button/ButtonSecondary";
import BackgroundBlur from "@component/BackgroundBlur";
import CompanyLogo from "@component/CompanyLogo";
import HeroCenterContent from "@component/Content/HeroCenterContent";
import FeatureCard from "@component/FeatureCard";
import Footer from "@component/Footer";
import Header from "@component/Header";
import Title from "@component/Title";
import NotoSans from "@data/NotoSans";
import img_desktopdisplay from "@image/desktop-display.svg";
import img_howwework from "@image/how-we-work.svg";
import img_mobiledisplay from "@image/mobile-display.svg";
import img_ourteam from "@image/our-team.svg";
import weightBoxIcon from "@logo/weight-box.svg";
import weightCodeIcon from "@logo/weight-code.svg";
import weightFigmaIcon from "@logo/weight-figma.svg";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Title set="Collosal - Tell us about your problem and how we can help" />

      <Header />

      <BackgroundBlur />

      <main className={NotoSans.className}>
        <HeroCenterContent
          label="CLIENT-DEVELOPMENT DRIVEN"
          title="We Design. We Develop. We Ship. In The Same Day."
          desc="We are committed to not making clients wait. We will deliver the
          work as quickly as possible. Even on the same day. Even so, we do
          not reduce the quality of our work."
        >
          <div className="flex flex-col md:flex-row w-full md:w-auto gap-5 mt-8">
            <ButtonPrimary w_full={true}>Send Quote</ButtonPrimary>
            <ButtonSecondary type="muted" w_full={true}>
              Learn More
            </ButtonSecondary>
          </div>
        </HeroCenterContent>
      </main>

      <section className="mt-20 mb-10 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
        <FeatureCard
          img={weightFigmaIcon}
          title="Design"
          desc="The project interface will be designed first, our favorite tool is Figma."
        />
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

      <section className="mt-8 lg:mt-20 grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center">
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

      <section className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center">
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
          <ButtonSecondary type="muted" size="small" w_full={true}>
            See Our Teams
          </ButtonSecondary>
        </hgroup>
        <div className="order-1 md:order-2">
          <div className="absolute -z-10">
            <div className="blur-particle bg-red w-[450px] h-[450px] translate-x-[-50px] translate-y-[100px]"></div>
            <div className="blur-particle bg-primary w-[300px] h-[300px] translate-y-[-500px] translate-x-[300px]"></div>
          </div>
          <Image src={img_ourteam} alt="illustration" />
        </div>
      </section>

      <section className="w-full mt-16 lg:mt-20">
        <HeroCenterContent
          label="PROJECTS"
          title="We have completed many amazing projects that you will not believe"
          size="small"
          desc=""
        />
        <div className="w-full flex flex-col lg:flex-row mt-5 gap-10 lg:gap-0">
          <div className="w-full">
            <Image src={img_mobiledisplay} alt="mobile" />
            <hgroup className="text-center text-white">
              <h1 className="font-bold">The Mobile App Landing Page</h1>
              <p className="text-muted mb-5">A landing page for mobile app</p>
              <ButtonSecondary type="outline" size="small" rounded={true}>
                Detail
              </ButtonSecondary>
            </hgroup>
          </div>
          <div className="w-full">
            <Image src={img_desktopdisplay} alt="dektop" className="w-full" />
            <hgroup className="text-center text-white mt-0">
              <h1 className="font-bold">The Desktop App Landing Page</h1>
              <p className="text-muted mb-5">A landing page for desktop app</p>
              <ButtonSecondary type="outline" size="small" rounded={true}>
                Detail
              </ButtonSecondary>
            </hgroup>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
