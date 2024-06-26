import { ReactNode } from "react";

const SectionLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`px-5 lg:px-44 ${className}`}>{children}</div>;
};

export default SectionLayout;
