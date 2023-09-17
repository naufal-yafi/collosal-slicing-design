import Layout from "@component/Layout";
import FormMessage from "@form/FormMessage";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";

const Contact = () => {
  return (
    <>
      <Layout title="Contact | Collosal" params="/contact">
        <div className="pt-14">
          <SectionLine>
            <SectionBadge
              label="contact"
              title="We love receiving messages from you, we are waiting for it."
              desc=""
            ></SectionBadge>
            <SectionImage>
              <div className="w-full flex justify-end">
                <FormMessage />
              </div>
            </SectionImage>
          </SectionLine>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
