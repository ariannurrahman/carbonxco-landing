import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  padding: 'none' | 'low' | 'high';
  className?: string;
  id?: string;
}

export const SectionWrapper = ({ id, children, padding, className }: WrapperProps) => {
  const defaultPadding =
    padding === 'none'
      ? ''
      : padding === 'low'
      ? 'px-4 lg:px-8 w-full relative'
      : padding === 'high'
      ? 'px-4 lg:px-[120px] xl:px-[159px]'
      : '';

  return (
    <div id={id} className={`${defaultPadding} ${className}`}>
      {children}
    </div>
  );
};
