import ButtonPrimary from "@component/Buttons/ButtonPrimary";

const FormMessage = () => {
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
        <div className="flex flex-col w-48 lg:w-full">
          <label htmlFor="">Subject</label>
          <input type="text" className={`${INPUTSTYLE} w-full`} />
        </div>
        <div className="flex flex-col w-48 lg:w-full">
          <label htmlFor="">Message</label>
          <textarea
            name=""
            id=""
            className={`${INPUTSTYLE} w-full h-32`}
          ></textarea>
        </div>
        <div className="w-48 lg:w-full">
          <ButtonPrimary link="" long={true}>
            Send Message
          </ButtonPrimary>
        </div>
      </form>
    </>
  );
};

export default FormMessage;
