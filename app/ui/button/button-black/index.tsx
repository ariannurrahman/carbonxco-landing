interface BlackButtonProps {
  label: string;
}

export const ButtonBlack = ({ label }: BlackButtonProps) => {
  return (
    <button className='flex items-center justify-center shadow-md rounded-[50px] border border-1 bg-[#133E3E] px-8 py-2 mt-12'>
      <p className='mr-4 text-white font-medium text-[14px]'>{label}</p>
    </button>
  );
};
