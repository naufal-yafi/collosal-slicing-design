import HeroCenterContent from "@section/HeroCenterContent";
import avatar1 from "@photo/avatar-01.png";
import avatar2 from "@photo/avatar-02.png";
import avatar3 from "@photo/avatar-03.png";
import TestimonyCard from "@card/TestimonyCard";

const TestimonyBundle = () => {
  return (
    <>
      <div className="hidden md:block lg:block">
        <TestimonyCard
          img={avatar1}
          name="Courtney Henry"
          job="Biffco Enterprises Ltd."
          comment="Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."
        />
      </div>
      <TestimonyCard
        img={avatar2}
        flyup={true}
        name="Esther Howard"
        job="Abstergo Ltd."
        comment="Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."
      />
      <div className="hidden lg:block">
        <TestimonyCard
          img={avatar3}
          name="Ronald Richards"
          job="Barone LLC."
          comment="I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking."
        />
      </div>
    </>
  );
};

const Testimonial = () => {
  return <><section className="md:px-10 flex flex-col items-center">
  <div className="w-full lg:w-2/3">
    <HeroCenterContent
      size="small"
      title="What do our clients say that we never let down?"
      desc=""
      label="testimonial"
    />
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 lg:mt-20 w-full">
    <TestimonyBundle />
  </div>
  <div className="flex gap-2 justify-center w-full mt-12 -z-10">
    <div className="h-3 w-3 rounded-full bg-white"></div>
    <div className="h-3 w-3 rounded-full bg-muted opacity-50"></div>
    <div className="h-3 w-3 rounded-full bg-muted opacity-50"></div>

    <div className="block lg:hidden h-3 w-3 rounded-full bg-muted opacity-50"></div>
    <div className="block lg:hidden h-3 w-3 rounded-full bg-muted opacity-50"></div>
    <div className="block md:hidden lg:hidden h-3 w-3 rounded-full bg-muted opacity-50"></div>
    <div className="block md:hidden lg:hidden h-3 w-3 rounded-full bg-muted opacity-50"></div>
    <div className="block md:hidden lg:hidden h-3 w-3 rounded-full bg-muted opacity-50"></div>
    <div className="block md:hidden lg:hidden h-3 w-3 rounded-full bg-muted opacity-50"></div>
  </div>
  <div className="absolute -z-20">
    <div className="blur-particle bg-green w-[400px] h-[400px] translate-x-[100px] translate-y-[100px] md:translate-x-[450px] lg:translate-x-[330px] lg:translate-y-[260px]"></div>
    <div className="blur-particle bg-primary w-[300px] h-[300px] translate-x-[-150px] translate-y-[100px] md:translate-y-[-100px] lg:translate-x-[-300px] lg:translate-y-[-200px]"></div>
  </div>
</section></>
}

export default Testimonial