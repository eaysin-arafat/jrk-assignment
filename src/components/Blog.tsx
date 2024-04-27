import Heading from "./core/Heading";

const Blog = () => {
  return (
    <div className="px-6 lg:px-36 py-4 pt-2">
      <Heading blackText="Our" greenText="Blog" />

      <div className="flex items-center justify-between gap-1 mt-1 lg:mt-5">
        {[1, 2, 3, 4].map((item) => (
          <div key={item}>
            <img src="/blog/01.png" width="" alt="" className="object-fill" />

            <h1 className="text-[7px] md:text-[11px] lg:text-[13px]">
              Interior design is the art, the interior designer is the artist.
            </h1>
            <div className="h-[1px] bg-orangeColor w-[25%] my-[2px]"></div>

            <p className="text">October 02, 2022 / Hastheme / in Chair</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
