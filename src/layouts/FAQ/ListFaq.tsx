import DetailFaq from "@component/DetailFaq";
import FAQ_DATA from "@data/FAQ_Data";
import { useState } from "react";

const ListFaq = () => {
  const [tab, setTabs] = useState("general");
  const ON = "hover:opacity-30";
  const OFF = "text-muted hover:opacity-40";

  const [content, setContent] = useState(
    <>
      {FAQ_DATA.maintenance.map((faq) => (
        <DetailFaq key={faq.id} title={faq.question} desc={faq.answer} />
      ))}
    </>,
  );

  const changeContent = (faqs: any) => {
    setContent(
      <>
        {faqs.map((faq: any) => (
          <DetailFaq key={faq.id} title={faq.question} desc={faq.answer} />
        ))}
      </>,
    );
  };

  const handleChangeTab = (tab: string) => {
    if (tab === "transaction") {
      changeContent(FAQ_DATA.transaction);
      setTabs("transaction");
    } else if (tab === "maintenance") {
      changeContent(FAQ_DATA.maintenance);
      setTabs("maintenance");
    } else if (tab === "technology") {
      changeContent(FAQ_DATA.technology);
      setTabs("technology");
    } else {
      changeContent(FAQ_DATA.general);
      setTabs("general");
    }
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="bg-light rounded-[3px] text-white w-full lg:w-56">
          <button
            onClick={() => handleChangeTab("general")}
            className={`px-5 py-3 w-full flex justify-start ${
              tab === "general" ? ON : OFF
            }`}
          >
            General
          </button>
          <hr className="border-light" />
          <button
            onClick={() => handleChangeTab("transaction")}
            className={`px-5 py-3 w-full flex justify-start ${
              tab === "transaction" ? ON : OFF
            }`}
          >
            Transaction
          </button>
          <hr className="border-light" />
          <button
            onClick={() => handleChangeTab("maintenance")}
            className={`px-5 py-3 w-full flex justify-start ${
              tab === "maintenance" ? ON : OFF
            }`}
          >
            Maintenance
          </button>
          <hr className="border-light" />
          <button
            onClick={() => handleChangeTab("technology")}
            className={`px-5 py-3 w-full flex justify-start ${
              tab === "technology" ? ON : OFF
            }`}
          >
            Technology
          </button>
        </div>
        <div className="w-full flex flex-col gap-8">{content}</div>
      </section>
    </>
  );
};

export default ListFaq;
