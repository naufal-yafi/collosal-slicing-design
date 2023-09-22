import Particle from "@accessories/Particle";
import TeamCard from "@card/TeamCard";
import author6 from "@photo/author-01.png";
import author5 from "@photo/author-02.png";
import author4 from "@photo/author-03.png";
import author3 from "@photo/author-04.png";
import author2 from "@photo/author-05.png";
import author1 from "@photo/author-06.png";
import HeroCenterContent from "@section/HeroCenterContent";

const OurTeam = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-16">
        <div className="flex justify-center w-full lg:w-2/3">
          <Particle />
          <HeroCenterContent
            label="our team"
            title="Meet the team! All creative people are here"
            desc=""
            size="small"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-10">
          <TeamCard photo={author1} name="Albert Flores" job="Founder" />
          <TeamCard
            photo={author2}
            name="Devon Lane"
            job="Chief Technology Officer"
          />
          <TeamCard photo={author3} name="Darrell Steward" job="UI Designer" />
          <TeamCard
            photo={author4}
            name="Marvin McKinney"
            job="Software Engineer"
          />
          <TeamCard photo={author5} name="Floyd Miles" job="System Analyst" />
          <TeamCard
            photo={author6}
            name="Annette Black"
            job="Project Manager"
          />
        </div>
      </section>
    </>
  );
};

export default OurTeam;
