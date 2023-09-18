import FeatureCard from "@card/FeatureCard";
import iconClock from "@icon/thin-clock.svg";
import iconCode from "@icon/thin-code.svg";
import iconFigma from "@icon/thin-figma.svg";
import iconLayout from "@icon/thin-layout.svg";
import iconTrending from "@icon/thin-trending-up.svg";
import iconZap from "@icon/thin-zap.svg";
import HeroCenterContent from "@section/HeroCenterContent";

const Features = () => {
  return (
    <>
      <section>
        <HeroCenterContent
          label="features"
          desc=""
          title="Here's what you will get when purchasing this service"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          <div className="absolute -z-10">
            <div className="blur-particle bg-red w-[450px] h-[450px] translate-x-[-50px] translate-y-[100px]"></div>
            <div className="blur-particle bg-primary w-[300px] h-[300px] translate-y-[-500px] translate-x-[300px]"></div>
          </div>
          <FeatureCard
            icon={iconFigma}
            icon_size="large"
            title="Design Files"
            desc="Projects are well designed using Figma. You will get the design file."
          />
          <FeatureCard
            icon={iconClock}
            icon_size="large"
            title="Same Day"
            desc="We don't want you to wait long. Everything will be finished on the same day."
          />
          <FeatureCard
            icon={iconCode}
            icon_size="large"
            title="Quality Code"
            desc="Code written according to good practice is highly maintainable."
          />
          <FeatureCard
            icon={iconTrending}
            icon_size="large"
            title="SEO"
            desc="The website will appear on the first page of the search engine."
          />
          <FeatureCard
            icon={iconLayout}
            icon_size="large"
            title="Responsive Design"
            desc="Access the website on any device, don't limit your visitors."
          />
          <FeatureCard
            icon={iconZap}
            icon_size="large"
            title="Blazing Fast"
            desc="Access the website on any device, don't limit your visitors."
          />
        </div>
      </section>
    </>
  );
};

export default Features;
