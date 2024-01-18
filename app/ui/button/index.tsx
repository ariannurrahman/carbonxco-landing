interface ButtonProps {
  className?: string;
  label: string;
  onClick?: any;
}

export const Button = ({ className, label }: ButtonProps) => {
  return (
    <button className={`${className} px-[27px] py-[12px] rounded-[4px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`}>
      <p className='text-[20px] text-white font-medium'>{label}</p>
    </button>
  );
};
