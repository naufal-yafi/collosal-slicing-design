import PriceCard from "@card/PriceCard";
import HeroCenterContent from "@section/HeroCenterContent";

const GetStarted = () => {
  return (
    <>
      <section className="md:px-10">
        <div className="bg-hightlight rounded-[30px] py-10 w-full">
          <div className="w-full flex items-center justify-center">
            <div className="w-full lg:w-2/3">
              <HeroCenterContent
                size="small"
                label="get started"
                title="What do you need? Choose a service that can help you"
                desc=""
              ></HeroCenterContent>
            </div>
          </div>
          <div className="px-4 md:px-20 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
            <PriceCard
              bg="bg-[#3F2379]"
              type_service="UI Design"
              price="1200"
              services="10 design pages, Well-documented, 4 revisions, $100/additional page"
            />
            <PriceCard
              bg="bg-[#233679]"
              type_service="Development"
              price="5000"
              services="Web & Mobile, Well-documented, 8 revisions, $1000/additional feature"
            />
            <PriceCard
              bg="bg-[#792366]"
              type_service="Maintenance"
              price="3000"
              services="Daily backup, 3 hours of maintenance, Including fixing, $50/additional hour"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
