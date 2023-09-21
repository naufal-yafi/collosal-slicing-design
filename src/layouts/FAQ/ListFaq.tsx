import FAQ_DATA from "@data/FAQ_Data";
import { useState } from "react";
import Dropdown from "./Dropdown";
const ListFaq = () => {
  const [faqs, setFaqs] = useState(FAQ_DATA.general);
  const [tab, setTabs] = useState("general");
  const ON = "hover:opacity-30";
  const OFF = "text-muted hover:opacity-40";

  const handleData = () => {
    if (tab === "transaction") {
      setFaqs(FAQ_DATA.transaction);
    } else if (tab === "maintenance") {
      setFaqs(FAQ_DATA.maintenance);
    } else if (tab === "technology") {
      setFaqs(FAQ_DATA.technology);
    } else {
      setFaqs(FAQ_DATA.general);
    }
  };

  const handleChangeTab = (tab: string) => {
    setTabs(tab);
    handleData();
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
        <div className="w-full flex flex-col gap-8">
          {faqs.map((faq) => (
            <Dropdown key={faq.id} title={faq.question} desc={faq.answer} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ListFaq;
