import Image from "next/image";

const CommentCard = (props: any) => {
  return (
    <>
      <figure className="border-b-[1px] border-light text-white p-8 pb-12 w-full flex flex-col lg:flex-row gap-14 mt-8">
        <div className="w-full lg:w-auto">
          <div className="w-16 h-16 rounded-full ">
            <Image src={props.photo} alt="photo" width={64} height={64} />
          </div>
        </div>
        <div>
          <hgroup>
            <h1 className="text-lg font-bold">{props.name}</h1>
            <p className="text-muted">{props.time} min ago</p>
          </hgroup>
          <figcaption className="mt-8">{props.comment}</figcaption>
        </div>
      </figure>
    </>
  );
};

CommentCard.defaultProps = {
  photo: "/",
  name: "Your Name",
  time: "0",
  comment: "Your comments...",
};

export default CommentCard;
