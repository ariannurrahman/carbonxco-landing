import { ReactNode } from 'react';

interface BasicHeroWrapperProps {
  children: ReactNode;
  sectionId: string;
  className?: string | undefined;
  bgColor?: string | undefined;
}

export const BasicHeroWrapper = ({ children, sectionId, className, bgColor = 'white' }: BasicHeroWrapperProps) => {
  return (
    <section
      className={`p-5 md:p-20 lg:px-[160px] lg:py-[190px] flex-grow bg-[${bgColor}] ${className ?? ''}`}
      id={sectionId}
    >
      {children}
    </section>
  );
};
