interface ButtonProps {
  className?: string;
  label: string;
  onClick?: any;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button = ({ className, label, type }: ButtonProps) => {
  return (
    <button
      type={type ?? 'button'}
      className={`${className} px-[27px] py-[12px] rounded-[4px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`}
    >
      <p className='text-[20px] text-white font-medium'>{label}</p>
    </button>
  );
};
