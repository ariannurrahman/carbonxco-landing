import Image from 'next/image';
import Link from 'next/link';

export const MoreAbout = () => {
  return (
    <div className='relative w-screen h-[500px]'>
      <div className='z-20 relative  flex justify-center items-center flex-col w-full h-full'>
        <h1 className='font-medium text-center text-white text-[28px] mt-2'>More on CarbonX</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10'>
          <div className='hover:bg-[#48773E4D] ease-out duration-300 hover:border-[#D4EFDE] cursor-pointer bg-[#D4EFDE4D] border-2 border-[#D4EFDE] p-14 flex-1 w-[300px] lg:w-[400px] h-[150px] rounded-lg flex items-center'>
            <Link href='/teams' className='text-center lg:text-right w-full'>
              <h4 className='text-white text-2xl w-full font-medium'>Meet the Team</h4>
            </Link>
          </div>
          <div className='hover:bg-[#B9A18A80] hover:border-[#FFC42D80] ease-out duration-300 cursor-pointer bg-[#E9DB5D80] border-2 border-[#FFC42D] p-14 flex-1 w-[300px] lg:w-[400px] h-[150px] rounded-lg flex items-center'>
            <Link href='/career' className='text-center lg:text-left w-full'>
              <h4 className='text-white text-2xl w-full font-medium'>Join Us</h4>
            </Link>
          </div>
        </div>
      </div>
      <Image className='z-10 absolute top-0 left-0' src='/assets/home/contact-bg.png' alt='contact' fill />
    </div>
  );
};
