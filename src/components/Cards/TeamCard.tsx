import Image from "next/image";

const TeamCard = (props: any) => {
  return (
    <>
      <figure className="bg-light rounded-[3px]">
        <Image
          src={props.photo}
          alt="photo"
          width={400}
          height={100}
          className="h-auto w-full lg:w-[400px]"
        />
        <hgroup className="text-white px-8 py-8">
          <h1 className="font-bold">{props.name}</h1>
          <p className="text-sm text-muted mt-2">{props.job}</p>
        </hgroup>
      </figure>
    </>
  );
};

TeamCard.defaultProps = {
  photo: "/",
  name: "Your Name",
  job: "Your Job",
};

export default TeamCard;
