import FAQ_DATA from "@data/FAQ_Data";
import HeroCenterContent from "@section/HeroCenterContent";

const FAQ = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="w-full lg:w-2/3">
          <HeroCenterContent
            label="FAQ"
            desc=""
            title="Frequently asked questions, maybe the same as yours"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-x-10 gap-y-20">
          {FAQ_DATA.transaction.map((faq) => (
            <hgroup className="text-white" key={faq.id}>
              <h1 className="text-xl font-bold">{faq.question}</h1>
              <p className="text-muted mt-5">{faq.answer}</p>
            </hgroup>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
