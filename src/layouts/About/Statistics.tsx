import IconListKeyValue from "@card/IconListKeyValue";
import iconDollar from "@icon/dollar-sign.svg";
import iconFlag from "@icon/flag.svg";
import iconUser from "@icon/user.svg";
import HeroCenterContent from "@section/HeroCenterContent";

const Statistics = () => {
  return (
    <>
      <section className="mb-20">
        <HeroCenterContent
          label="statistics"
          title="In 3 years we reached 8 countries, 193 clients and earning $100k USD"
          desc=""
          size="small"
        >
          <div className="w-full px-5 py-8 bg-light rounded-[3px] mt-12 flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
              <IconListKeyValue
                size="large"
                icon={iconFlag}
                key_value="COUNTRIES"
                value="8"
              />
              <IconListKeyValue
                size="large"
                icon={iconUser}
                key_value="CLIENTS"
                value="193"
              />
              <IconListKeyValue
                size="large"
                icon={iconDollar}
                key_value="EARNING"
                value="$100k"
              />
            </div>
          </div>
        </HeroCenterContent>
      </section>
    </>
  );
};

export default Statistics;
