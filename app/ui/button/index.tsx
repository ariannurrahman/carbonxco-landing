import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: any;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button = ({ className, children, type }: ButtonProps) => {
  return (
    <button
      type={type ?? 'button'}
      className={`${className} px-[27px] py-[12px] rounded-[4px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`}
    >
      {children}
    </button>
  );
};
