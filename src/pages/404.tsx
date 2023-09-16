import ButtonSecondary from "@button/ButtonSecondary";
import Layout from "@component/Layout";
import HeroCenterContent from "@component/Section/HeroCenterContent";

const handler404 = () => {
  return (
    <>
      <Layout title="Page Not Found - 404 Not Found">
        <main>
          <HeroCenterContent
            label="ERROR"
            title="The page you are looking for is not on this website, please check
            again"
            desc="The system cannot find the page you are looking for, maybe you have
            the wrong path or the page has been deleted."
            red_label={true}
          >
            <div className="mt-8">
              <ButtonSecondary type="muted" w_full={true}>
                Back to Home
              </ButtonSecondary>
            </div>
          </HeroCenterContent>
        </main>
      </Layout>
    </>
  );
};

export default handler404;
