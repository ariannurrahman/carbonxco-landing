import React from 'react';

export const GreenSubTitle = ({
  label,
  className,
  white = false,
  yellow = false,
}: {
  label: string;
  className?: string;
  white?: boolean;
  yellow?: boolean;
}) => {
  const textColor = white ? 'text-white' : yellow ? 'text-[#FFB40D]' : 'text-[#00AC42]';

  return <h3 className={`${className} ${textColor} font-semibold tracking-widest text-[16px]`}>{label}</h3>;
};
