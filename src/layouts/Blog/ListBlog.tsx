import BlogCard from "@card/BlogCard";
import CONTENT_BLOG from "@data/Content_Blog";

const ListBlog = () => {
  const blogs = CONTENT_BLOG;

  return (
    <>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          link={`/blog/${blog.slug}`}
          thumbnail={`/assets/blog-thumbnail/${blog.thumbnail}.png`}
          title={blog.title}
          desc={blog.description}
          read_time={blog.reading_time}
          published={blog.date}
          author_photo={`/assets/profile-photo/${blog.author.photo}.png`}
          author_name={blog.author.username}
        />
      ))}
    </>
  );
};

export default ListBlog;
