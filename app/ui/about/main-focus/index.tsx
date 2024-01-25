import Image from 'next/image';
import { SectionWrapper } from '@/app/ui/wrapper';
import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';

export const MainFocus = () => {
  const DUMMY_DATA = [
    {
      label: 'Community Based Conservation',
    },
    {
      label: 'Alternative Livelihood through Market Access',
    },
    {
      label: 'Social Inclusion',
    },
    {
      label: 'Emission Reduction',
    },
  ];

  return (
    <div className='relative w-screen min-h-screen h-full lg:h-screen py-5'>
      <SectionWrapper padding='high' className='relative z-20 h-full flex justify-center items-center flex-col'>
        <div className='grid grid-cols-1 lg:grid-cols-[265px_auto]'>
          <GreenSubTitle label='MAIN FOCUS' white />
          <div>
            <h3 className='text-white font-bold text-base'>
              What are the roles of CarbonX Investments in this ecosystem?
            </h3>
            <p className='text-white font-medium text-base mt-2'>
              We believe that the courage to continue that counts. Success is not our final goal as failure is
              inevitable in innovation. Hence, it is a thorough collaboration among various networks and
            </p>
          </div>
        </div>
        <div className='mt-8 flex justify-start items-center flex-col md:flex-row flex-wrap md:flex-nowrap gap-5'>
          {DUMMY_DATA.map(({ label }) => (
            <div
              className='bg-[#D4EFDE] rounded-lg hover:bg-[#DAEEFA] flex justify-center items-center transition flex-1 w-full min-h-[264px]'
              key={label}
            >
              <p className='text-[#13282D] text-xl font-medium text-center'>{label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <Image
        className='z-10 absolute top-0 left-0 w-screen min-h-screen h-full object-fit'
        src='/assets/about/main-focus.png'
        width={1440}
        height={800}
        alt='about carbon x'
      />
    </div>
  );
};
