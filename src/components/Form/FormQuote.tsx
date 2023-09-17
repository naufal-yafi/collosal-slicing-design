import ButtonPrimary from "@button/ButtonPrimary";

const FormQuote = () => {
  const INPUTSTYLE =
    "bg-transparent border-[1px] border-light rounded-[3px] mt-2 py-1 pl-2 outline-none focus:border-none focus:outline-1 focus:outline-primary";
  return (
    <>
      <form
        action=""
        className="bg-light w-[450px] rounded-[3px] px-5 pb-5 pt-8 text-muted flex flex-col justify-center items-center gap-8"
      >
        <div className="flex gap-5">
          <div className="flex flex-col w-48">
            <label htmlFor="">Name</label>
            <input type="text" className={INPUTSTYLE} />
          </div>
          <div className="flex flex-col w-48">
            <label htmlFor="">Email</label>
            <input type="text" className={INPUTSTYLE} />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-48">
            <label htmlFor="">Company</label>
            <input type="text" className={INPUTSTYLE} />
          </div>
          <div className="flex flex-col w-48">
            <label htmlFor="">Company Size</label>
            <select className={INPUTSTYLE}></select>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="">Tell Us Your Problem</label>
          <textarea
            name=""
            id=""
            className={`${INPUTSTYLE} w-full h-32`}
          ></textarea>
        </div>
        <div className="w-full">
          <ButtonPrimary link="" long={true}>
            Send Quote
          </ButtonPrimary>
        </div>
      </form>
    </>
  );
};

export default FormQuote;
