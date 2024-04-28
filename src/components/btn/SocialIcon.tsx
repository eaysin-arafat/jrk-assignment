const SocialIcon = ({
  icon,
  width,
  alt,
}: {
  icon: string;
  width?: string;
  alt: string;
}) => {
  return (
    <li className="w-3 h-3 md:h-4 md:w-4 lg:h-5 lg:w-5 bg-orangeColor rounded-full px-1 py-1 flex items-center justify-center">
      <img src={icon} width={width} alt={alt} />
    </li>
  );
};

export default SocialIcon;
