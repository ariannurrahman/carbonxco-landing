import { ReactNode } from 'react';

export const BasicWrapper = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={`px-20 py-5 ${className}`}>{children}</div>;
};
