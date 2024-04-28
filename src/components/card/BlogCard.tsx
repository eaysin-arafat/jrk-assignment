type Props = {
  title: string;
  image: string;
  metaData: string;
};

const BlogCard = ({ title, image, metaData }: Props) => {
  return (
    <div>
      {/* Blog post image */}
      <img src={image} alt="Blog image" className="mb-[3px]" />

      {/* Blog post title */}
      <h1 className="text-[5px] md:text-[7px] lg:text-[9px]">{title}</h1>

      {/* Divider */}
      <div className="h-[1px] bg-orangeColor w-[25%] my-[2px]"></div>

      {/* Blog post metadata */}
      <p className="text-[4px] md:text-[7px] lg:text-[9px]">{metaData}</p>
    </div>
  );
};

export default BlogCard;
