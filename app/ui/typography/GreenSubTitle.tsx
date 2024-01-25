import React from 'react';

export const GreenSubTitle = ({
  label,
  className,
  white = false,
}: {
  label: string;
  className?: string;
  white?: boolean;
}) => {
  const textColor = white ? 'text-white' : 'text-[#00AC42]';

  return <h3 className={`${className} ${textColor} font-semibold tracking-widest text-[16px]`}>{label}</h3>;
};
