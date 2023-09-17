import Layout from "@component/Layout";
import HeroCenterContent from "@component/Section/HeroCenterContent";

const TermOfService = () => {
  return (
    <>
      <Layout title="Term of Service | Collosal">
        <main>
          <HeroCenterContent
            label="page"
            title="Terms & Conditions"
            desc="Updated at 2021-05-06"
          />

          <hr className="border-light my-16" />

          <article className="lg:px-48 text-white tracking-wide leading-relaxed">
            <p>
              By accessing and placing an order with Collosal, you confirm that
              you are in agreement with and bound by the terms of service
              contained in the Terms & Conditions outlined below. These terms
              apply to the entire website and any email or other type of
              communication between you and Collosal.
            </p>
            <p className="my-9">
              Under no circumstances shall Collosal team be liable for any
              direct, indirect, special, incidental or consequential damages,
              including, but not limited to, loss of data or profit, arising out
              of the use, or the inability to use, the materials on this site,
              even if Collosal team or an authorized representative has been
              advised of the possibility of such damages. If your use of
              materials from this site results in the need for servicing, repair
              or correction of equipment or data, you assume any costs thereof.
            </p>
            <p className="mb-12" id="license">
              Collosal will not be responsible for any outcome that may occur
              during the course of usage of our resources. We reserve the rights
              to change prices and revise the resources usage policy in any
              moment.
            </p>
            <hgroup>
              <h1 className="text-3xl font-bold mb-4">License</h1>
              <p>
                Collosal grants you a revocable, non-exclusive, non-
                transferable, limited license to download, install and use the
                website strictly in accordance with the terms of this Agreement.
              </p>
              <p className="my-9">
                These Terms & Conditions are a contract between you and Collosal
                (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) grants you
                a revocable, non-exclusive, non- transferable, limited license
                to download, install and use the website strictly in accordance
                with the terms of this Agreement.
              </p>
            </hgroup>
          </article>
        </main>
      </Layout>
    </>
  );
};

export default TermOfService;
