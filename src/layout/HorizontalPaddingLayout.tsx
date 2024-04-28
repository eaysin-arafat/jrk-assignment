import { ReactNode } from "react";

const HorizontalPaddingLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`px-5 lg:px-56 ${className}`}>{children}</div>;
};

export default HorizontalPaddingLayout;
