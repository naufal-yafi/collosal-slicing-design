import Layout from "@component/Layout";
import FAQ from "@layout/Service/Detail/FAQ";
import Features from "@layout/Service/Detail/Features";
import ServiceDevelopment from "@layout/Service/Detail/ServiceDevelopment";
import HeroCenterContent from "@section/HeroCenterContent";

const ServiceDetail = () => {
  return (
    <>
      <Layout
        title="What services we can provide - Service Detail | Collosal"
        params="/service"
      >
        <main className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <HeroCenterContent
              label="development"
              title="Solve your company's repetitive problems by designing apps"
              desc=""
            />
          </div>
        </main>

        <section>
          <hr className="border-light" />
        </section>

        <ServiceDevelopment />

        <Features />

        <FAQ />
      </Layout>
    </>
  );
};

export default ServiceDetail;
