import Heading from "./core/Heading";

const Blog = () => {
  return (
    <div className="px-6 py-4 pt-2">
      <Heading blackText="Our" greenText="Blog" />

      <div className="flex items-center justify-center gap-1 mt-1">
        {[1, 2, 3, 4].map((item) => (
          <div key={item}>
            <img src="/blog/01.png" width="" alt="" className="object-fill" />

            <h1 className="text">
              Interior design is the art, the interior designer is the artist.
            </h1>
            <div className="h-[1px] bg-orangeColor w-[25%] my-[2px]"></div>

            <p className="text-[4px]">October 02, 2022 / Hastheme / in Chair</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
