import Image from 'next/image';
import { SectionWrapper } from '@/app/ui/wrapper';

export const Values = () => {
  const VALUES_CARD = [
    {
      label: 'Additionality',
      caption: 'Endangered Species Protection',
      src: '/assets/about/additionality.png',
    },
    {
      label: 'Permeance',
      caption: 'Endangered Species Protection',
      src: '/assets/about/permeance.png',
    },
    {
      label: 'Measurable',
      caption: 'Endangered Species Protection',
      src: '/assets/about/measurable.png',
    },
    {
      label: 'Co-Benefit',
      caption: 'Endangered Species Protection',
      src: '/assets/about/co-benefit.png',
    },
  ];

  return (
    <SectionWrapper className='relative w-screen h-full' padding='none'>
      <SectionWrapper className='relative z-20 pt-[81px] pb-[150px]' padding='high'>
        <h2 className='font-medium text-center text-[#D4EFDE] text-[32px]'>VALUES</h2>
        <h3 className='font-medium text-center text-[#D4EFDE] text-xl'>WE LIVE BY</h3>
        <div className='flex flex-row justify-center items-center flex-wrap lg:flex-nowrap mt-8  gap-3'>
          {VALUES_CARD.map(({ caption, label, src }) => {
            return (
              <div key={label} className='relative bg-white rounded-lg h-[237px] w-[265px]'>
                <div className='relative z-20 bg-white rounded-t-lg flex justify-center flex-col items-center h-[150px]'>
                  <h2 className='font-medium text-center text-[#13282D] text-[24px]'>{label}</h2>
                  <p className='font-medium text-center text-[#13282D] text-[16px] w-[220px]'>{caption}</p>
                </div>
                <Image src={src} alt='label' className='absolute top-0 left-0 z-10' fill />
              </div>
            );
          })}
        </div>
        <div className='mt-[98px]'>
          <h1 className='font-medium text-center text-black text-[28px] mt-2'>More on CarbonX</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[13px]'>
            <div className='bg-[#F0E5DB] p-14 flex-1 h-[208px] rounded-lg flex items-center'>
              <h3 className='text-[#287B49] text-right text-[28px] w-full font-medium'>Meet the Team</h3>
            </div>
            <div className='bg-[#F0E5DB] p-14 flex-1 h-[208px] rounded-lg flex items-center'>
              <h3 className='text-[#252C2D] text-left text-[28px] w-full font-medium'>Join Us</h3>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <div className='z-10 absolute top-0 left-0 w-full h-[340px]'>
        <Image
          className='w-full h-full object-fit'
          src='/assets/about/values.png'
          width={1440}
          height={340}
          alt='values we live by'
        />
      </div>
    </SectionWrapper>
  );
};
