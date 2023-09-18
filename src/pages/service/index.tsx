import Layout from "@component/Layout";
import Development from "@layout/Service/Development";
import Maintenance from "@layout/Service/Maintenance";
import UiDesign from "@layout/Service/UiDesign";
import HeroCenterContent from "@section/HeroCenterContent";

const Service = () => {
  return (
    <>
      <Layout
        title="We can solve your problem - Service | Collosal"
        params="/service"
      >
        <main className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <HeroCenterContent
              label="services"
              title="We are here to help solve your company's problems"
              desc=""
            />
          </div>
        </main>

        <section>
          <hr className="border-light" />
        </section>

        <UiDesign />
        <Development />
        <Maintenance />
      </Layout>
    </>
  );
};

export default Service;
