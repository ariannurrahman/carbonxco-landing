import Image from 'next/image';

interface ButtonArrowProps {
  label: string;
  imgAlt: string;
}

export const ButtonArrow = ({ label, imgAlt }: ButtonArrowProps) => {
  return (
    <button className='flex items-center justify-center shadow-md shadow-[#133E3E] rounded-[50px] border border-1 bg-[#E8F4F5] px-8 py-2'>
      <span className='mr-4 text-[#133E3E] font-medium text-[14px]'>{label}</span>
      <Image src='./assets/right-arrow.svg' height={16} width={16} alt={imgAlt} />
    </button>
  );
};
