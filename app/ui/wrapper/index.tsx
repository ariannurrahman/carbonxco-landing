import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  padding: 'none' | 'low' | 'high';
  className?: string;
}

export const SectionWrapper = ({ children, padding, className }: WrapperProps) => {
  const defaultPadding =
    padding === 'none'
      ? ''
      : padding === 'low'
      ? 'px-2 lg:px-8 w-full relative'
      : padding === 'high'
      ? 'px-2 lg:px-[120px] xl:px-[159px]'
      : '';

  return <div className={`${defaultPadding} ${className}`}>{children}</div>;
};
