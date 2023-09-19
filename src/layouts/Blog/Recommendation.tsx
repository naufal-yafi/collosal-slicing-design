import BlogCard from "@card/BlogCard";
import photo3 from "@photo/profile-01.png";
import photo2 from "@photo/profile-02.png";
import photo1 from "@photo/profile-03.png";
import thumb3 from "@thumbnail/thumbnail-01.webp";
import thumb2 from "@thumbnail/thumbnail-02.png";
import thumb1 from "@thumbnail/thumbnail-03.png";

const Recommendation = () => {
  return (
    <>
      <section>
        <h1 className="text-white font-bold text-xl">
          Other people also read ...
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 gap-y-12 mt-8">
          <BlogCard
            thumbnail={thumb1}
            title="How to compress image size without losing quality"
            desc="Small images can speed up website load times"
            author_name="Ban Steward"
            author_photo={photo1}
            published="Feb 20"
            read_time="8 min read"
          />
          <BlogCard
            thumbnail={thumb2}
            title="Why is Google still not recognizing my website?"
            desc="Improve the SEO techniques that you have used so far"
            author_name="Rob Arace"
            author_photo={photo2}
            published="Feb 19"
            read_time="12 min read"
          />
          <BlogCard
            thumbnail={thumb3}
            title="Monitor your application when errors occur in production"
            desc="Get accurate error messages when the application crashes"
            author_name="Don Rohiman"
            author_photo={photo3}
            published="Feb 7"
            read_time="9 min read"
          />
        </div>
      </section>
    </>
  );
};

export default Recommendation;
