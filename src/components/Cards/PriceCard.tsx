import ButtonSecondary from "@component/Buttons/ButtonSecondary";

const PriceCard = (props: any) => {
  const getService = props.services;
  const serviceList = getService.split(", ");

  const serviceListItems = serviceList.map((service: any, index: number) => (
    <li key={index}>{service}</li>
  ));

  return (
    <>
      <div className={`pb-6 pt-5 w-full px-8 rounded-[10px] ${props.bg}`}>
        <hgroup className="text-white text-center flex flex-col lg:flex-row justify-between items-center">
          <h2 className="font-bold text-lg">{props.type_service}</h2>
          <div>
            <p className="text-muted mt-5">Starting form</p>
            <h1 className="font-bold text-3xl">{props.price}$</h1>
          </div>
        </hgroup>
        <div className="mt-10 pt-10 border-t-[1px] border-light">
          <ul className="text-center text-white flex flex-col gap-2">
            {serviceListItems}
          </ul>
        </div>
        <div className="mt-14">
          <ButtonSecondary long={true} link="/service">
            Detail
          </ButtonSecondary>
        </div>
      </div>
    </>
  );
};

PriceCard.defaultProps = {
  bg: "bg-[#000000]",
  type_service: "Your Service",
  price: "00",
  services: "Service 01, Service 02, Service 03",
};

export default PriceCard;
