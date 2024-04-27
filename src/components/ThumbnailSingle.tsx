import { ReactNode } from "react";
import React from "react";

type Props = {
  color: { primaryColor: string; secondColor: string };
  image: { alt: string; width: string; url: string; imageClassName?: string };
  height?: string;
  primaryColorWidth?: string;
  childrenClassName?: string;
  children: ReactNode;
};

const ThumbnailSingle = ({
  childrenClassName,
  color,
  children,
  image,
  height,
  primaryColorWidth,
}: Props) => {
  return (
    <div className="relative">
      <div className={`flex ${height} rounded-md ${color.primaryColor}`}>
        <div className={`rounded-md w-[40%] ${primaryColorWidth}`}></div>

        <div
          className={`${color.secondColor} rounded-md w-[60%] text-whiteColor text-end px-2.5 ${childrenClassName}`}
        >
          {children}
        </div>
      </div>
      <div
        className={`flex items-end justify-start h-full w-full absolute bottom-2 left-2 ${image.imageClassName}`}
      >
        <img src={image.url} alt={image.alt} width={image.width} />
      </div>
    </div>
  );
};

export default ThumbnailSingle;
