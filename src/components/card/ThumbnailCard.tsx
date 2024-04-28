import { ReactNode } from "react";

type Props = {
  // Color configuration for the card
  color: { primaryColor: string; secondColor: string };
  // Image details
  image: {
    alt: string; // Alt text for the image
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    width: any; // Width of the image (can be of any type)
    url: string; // URL of the image
    imageClassName?: string; // Optional class name for the image
  };
  height?: string; // Optional height for the card
  primaryColorWidth?: string; // Optional width for the primary color section
  childrenClassName?: string; // Optional class name for the children container
  children: ReactNode; // Children elements of the card
};

const ThumbnailCard = ({
  childrenClassName,
  color,
  children,
  image,
  height,
  primaryColorWidth,
}: Props) => {
  return (
    <div className="relative">
      {/* Container for the card */}
      <div className={`flex ${height} rounded-md ${color.primaryColor}`}>
        {/* Primary color section */}
        <div className={`rounded-md w-[40%] ${primaryColorWidth}`}></div>

        {/* Children container */}
        <div
          className={`${color.secondColor} rounded-md w-[60%] text-whiteColor text-end px-2.5 ${childrenClassName}`}
        >
          {children}
        </div>
      </div>

      {/* Image container */}
      <div
        className={`flex items-end justify-start h-full w-full absolute bottom-2 left-2 ${image.imageClassName}`}
      >
        {/* Actual image */}
        <img src={image.url} alt={image.alt} width={image.width} />
      </div>
    </div>
  );
};

export default ThumbnailCard;
