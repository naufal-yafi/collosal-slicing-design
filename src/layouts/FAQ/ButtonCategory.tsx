const ButtonCategory = () => {
  return (
    <>
      <div className="bg-light rounded-[3px] text-white w-56">
        <button className="px-5 py-3 w-full flex justify-start hover:opacity-30">
          General
        </button>
        <hr className="border-light" />
        <button className="text-muted px-5 py-3 w-full flex justify-start hover:opacity-40">
          Transaction
        </button>
      </div>
    </>
  );
};

export default ButtonCategory;
