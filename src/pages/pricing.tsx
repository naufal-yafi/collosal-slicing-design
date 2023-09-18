import PriceCard from "@card/PriceCard";
import Layout from "@component/Layout";
import FAQ from "@layout/Service/Detail/FAQ";
import HeroCenterContent from "@section/HeroCenterContent";

const Pricing = () => {
  return (
    <>
      <Layout title="How much money did I spend - Pricing | Collosal">
        <main className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <HeroCenterContent
              label="pricing"
              title="What do you need? Choose a service that can help you"
              desc=""
            />
          </div>
        </main>

        <section>
          <hr className="border-light" />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-12">
          <PriceCard
            bg="bg-light"
            type_service="UI Design"
            price="1200"
            services="10 design pages, Well-documented, 4 revisions, $100/additional page"
          />
          <PriceCard
            bg="bg-light"
            type_service="Development"
            price="5000"
            services="Web & Mobile, Well-documented, 8 revisions, $1000/additional feature"
            btn_primary={true}
          />
          <PriceCard
            bg="bg-light"
            type_service="Maintenance"
            price="3000"
            services="Daily backup, 3 hours of maintenance, Including fixing, $50/additional hour"
          />
        </section>

        <FAQ />
      </Layout>
    </>
  );
};

export default Pricing;
