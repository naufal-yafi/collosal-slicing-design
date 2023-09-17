import FeatureCard from "@card/FeatureCard";
import weightBoxIcon from "@icon/weight-box.svg";
import weightCodeIcon from "@icon/weight-code.svg";
import weightFigmaIcon from "@icon/weight-figma.svg";

const GroupFeatureCard = () => {
  return (
    <>
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
    </>
  );
};

export default GroupFeatureCard;
