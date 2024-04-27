import useWindow from "../hooks/useWindow";

const HeroProductCard = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  const w1024 = useWindow(1024);
  const w768 = useWindow(768);

  return (
    <div className="bg-gradient-to-b from-[#BDEFDE] to-[#70CEB1] px-2 pt-2 rounded-xl flex flex-col items-center justify-between">
      <img
        style={{ height: "30px", width: "50px" }}
        src={image}
        width={w768 ? "40" : w1024 ? "80" : "90"}
        className="flex items-center justify-end"
        alt=""
      />
      <p className="text-[8px] md:text-[10px] lg:text-[12px] font-medium pt-1.5 pb-1">
        {title}
      </p>
    </div>
  );
};

export default HeroProductCard;
