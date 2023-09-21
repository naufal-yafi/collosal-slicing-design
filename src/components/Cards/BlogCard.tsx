import Image from "next/image";
import Link from "next/link";

const BlogCard = (props: any) => {
  return (
    <>
      <figure className="text-white">
        <Link href={props.link}>
          <div className="bg-light rounded-[5px] overflow-hidden">
            <Image
              src={props.thumbnail}
              alt="thumbnail"
              width={100}
              height={100}
              className="w-full h-auto"
              unoptimized={true}
            />
          </div>
          <hgroup className="text-white mt-5">
            <h1 className="font-bold text-lg">{props.title}</h1>
            <p className="text-muted mt-2">{props.desc}</p>
          </hgroup>
          <div className="mt-5 flex items-center gap-8">
            <div className="bg-light w-12 h-12 rounded-full overflow-hidden flex justify-center items-center">
              <Image
                src={props.author_photo}
                alt="photo author"
                width={40}
                height={40}
              />
            </div>
            <hgroup>
              <h1 className="font-bold">{props.author_name}</h1>
              <p className="text-muted text-sm">
                {props.published} • {props.read_time}
              </p>
            </hgroup>
          </div>
        </Link>
      </figure>
    </>
  );
};

BlogCard.defaultProps = {
  link: "",
  thumbnail: "/",
  title: "Your Title",
  desc: "Your descriptions...",
  author_photo: "/",
  author_name: "Author Name",
  published: "Month 00",
  read_time: "0 min read",
};

export default BlogCard;
