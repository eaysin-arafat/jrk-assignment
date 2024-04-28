import BlogCard from "./card/BlogCard";
import Heading from "./heading/Heading";

const Blog = () => {
  return (
    <div className="px-6 lg:px-36 py-4 pt-2">
      {/* Heading for the blog section */}
      <Heading blackText="Our" greenText="Blog" />

      {/* Blog post list */}
      <div className="flex items-center justify-between gap-1 mt-1 lg:mt-5">
        <BlogCard
          title="Interior design is the art, the interior designer is the artist."
          image="/blog/01.png"
          metaData="October 02, 2022 / Hastheme / in Chair"
        />

        <BlogCard
          title="Interior design is the art, the interior designer is the artist."
          image="/blog/02.png"
          metaData="October 02, 2022 / Hastheme / in Chair"
        />

        <BlogCard
          title="Interior design is the art, the interior designer is the artist."
          image="/blog/03.png"
          metaData="October 02, 2022 / Hastheme / in Chair"
        />

        <BlogCard
          title="Interior design is the art, the interior designer is the artist."
          image="/blog/04.png"
          metaData="October 02, 2022 / Hastheme / in Chair"
        />
      </div>
    </div>
  );
};

export default Blog;
