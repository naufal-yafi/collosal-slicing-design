import CommentCard from "@card/CommentCard";
import photo1 from "@photo/photo-comment-01.png";
import photo2 from "@photo/photo-comment-02.png";
import photo3 from "@photo/photo-comment-03.png";

const Responses = () => {
  return (
    <>
      <section className="lg:px-64">
        <h1 className="text-center text-white text-3xl font-bold">Responses</h1>
        <div className="flex flex-col gap-10 justify-center w-full">
          <CommentCard
            photo={photo1}
            name="Robert Fox"
            time="8"
            comment="Moveth fish were living fruitful created from dry his one dry sea you're. It greater doesn't replenish replenish divide moveth. They're under itself without given a male light years fruit rule sea moveth."
          />
          <CommentCard
            photo={photo2}
            name="Ralph Edwards"
            time="20"
            comment="Upon have, rule grass made fish Day seed. In fowl his life third appear they're sixth heaven fifth fourth darkness. Man. Lights heaven. Fowl yielding two female Bring bring, rule fifth Upon under male."
          />
          <CommentCard
            photo={photo3}
            name="Esther Howard"
            time="34"
            comment="Saying you'll herb bearing very night night fruit, greater moving had made spirit earth, replenish to above from which had midst creeping good upon one moving Itself appear were him wherein open replenish."
          />
        </div>
      </section>
    </>
  );
};

export default Responses;
