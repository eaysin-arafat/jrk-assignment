import { ReactNode } from "react";

const ProductBg = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="relative">
      <div className="z-10 px-1.5 relative">{children}</div>
      <div
        className={`absolute bottom-0 right-0 bg-greenBgColor rounded-md rounded-tr-[40px] h-[70%] w-full ${className}`}
      ></div>
    </div>
  );
};

export default ProductBg;
