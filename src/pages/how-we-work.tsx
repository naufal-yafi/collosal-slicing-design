import Layout from "@component/Layout";
import Completed from "@layout/Work/Completed";
import Discusstion from "@layout/Work/Discusstion";
import PlanningDevelopment from "@layout/Work/PlanningDevelopment";
import HeroCenterContent from "@section/HeroCenterContent";

const Work = () => {
  return (
    <>
      <Layout
        title="How we do the workflow - How We Work | Collosal"
        params="/work"
      >
        <main className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <HeroCenterContent
              label="how we work"
              title="We have a workflow that allows the job to be delivered well"
              desc=""
            />
          </div>
        </main>

        <section>
          <hr className="border-light" />
        </section>

        <Discusstion />
        <PlanningDevelopment />
        <Completed />
      </Layout>
    </>
  );
};

export default Work;
