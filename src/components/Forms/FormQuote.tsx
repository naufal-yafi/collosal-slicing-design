import ButtonPrimary from "@component/Buttons/ButtonPrimary";

const FormQuote = () => {
  const INPUTSTYLE =
    "bg-transparent border-[1px] border-light rounded-[3px] mt-2 py-1 pl-2 outline-none focus:border-none focus:outline-1 focus:outline-primary";

  return (
    <>
      <form
        action=""
        className="bg-light w-[450px] rounded-[3px] px-5 pb-8 lg:pb-5 pt-8 text-muted flex flex-col justify-center items-center gap-8 mt-10 lg:mt-0"
      >
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col w-48">
            <label htmlFor="">Name</label>
            <input type="text" className={INPUTSTYLE} />
          </div>
          <div className="flex flex-col w-48">
            <label htmlFor="">Email</label>
            <input type="text" className={INPUTSTYLE} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col w-48">
            <label htmlFor="">Company</label>
            <input type="text" className={INPUTSTYLE} />
          </div>
          <div className="flex flex-col w-48">
            <label htmlFor="">Company Size</label>
            <select className={INPUTSTYLE}>
              <option value="" className="bg-dark">
                Microenterprise
              </option>
              <option value="" className="bg-dark">
                SMEs
              </option>
              <option value="" className="bg-dark">
                Large Enterprises
              </option>
              <option value="" className="bg-dark">
                Fortune 500
              </option>
              <option value="" className="bg-dark">
                Startups
              </option>
              <option value="" className="bg-dark">
                Multinational Corporations
              </option>
              <option value="" className="bg-dark">
                Public Companies
              </option>
              <option value="" className="bg-dark">
                Private Companies
              </option>
              <option value="" className="bg-dark">
                Market Capitalization
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col w-48 lg:w-full">
          <label htmlFor="">Tell Us Your Problem</label>
          <textarea
            name=""
            id=""
            className={`${INPUTSTYLE} w-48 lg:w-full h-32`}
          ></textarea>
        </div>
        <div className="w-48 lg:w-full">
          <ButtonPrimary link="" long={true}>
            Send Quote
          </ButtonPrimary>
        </div>
      </form>
    </>
  );
};

export default FormQuote;
