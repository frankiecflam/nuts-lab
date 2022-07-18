import { FC } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({ children, className }) => {
  return <section className={className && className}>{children}</section>;
};

export default Section;
