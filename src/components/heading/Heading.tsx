const Heading = ({
  blackText,
  greenText,
  className,
}: {
  blackText: string;
  greenText: string;
  className?: string;
}) => {
  return (
    <h1 className={`heading text-center ${className}`}>
      {blackText} <span className="text-greenTextColor">{greenText}</span>
    </h1>
  );
};

export default Heading;
