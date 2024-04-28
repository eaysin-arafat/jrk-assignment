type Props = {
  title: string;
  image: string;
  metaData: string;
};

const BlogCard = ({ title, image, metaData }: Props) => {
  return (
    <div>
      {/* Blog post image */}
      <img src={image} width="" alt="" className="object-fill mb-[3px]" />

      {/* Blog post title */}
      <h1 className="text-[7px] md:text-[11px] lg:text-[13px]">{title}</h1>

      {/* Divider */}
      <div className="h-[1px] bg-orangeColor w-[25%] my-[2px]"></div>

      {/* Blog post metadata */}
      <p className="text">{metaData}</p>
    </div>
  );
};

export default BlogCard;
