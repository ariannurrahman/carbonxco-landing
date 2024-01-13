import { BasicHeroWrapper } from '../wrapper/BasicHeroWrapper';

export const Impact = () => {
  const IMPACT_DUMMY_DATA = [
    {
      label: 'HECTARES OF LAND RESTORED',
      value: '10.000.000',
    },
    {
      label: 'HECTARES OF LAND RESTORED',
      value: '10.000.000',
    },
    {
      label: 'TONNES OF CO2 REDUCED ANNUALLY',
      value: '35.000.000',
    },
    {
      label: 'TONNES OF CO2 REDUCED ANNUALLY',
      value: '35.000.000',
    },
  ];

  return (
    <BasicHeroWrapper bgColor='#EEE' sectionId='impact-hero'>
      <h3 className='text-[#00AC42] text-[16px] font-semibold'>IMPACT THAT WE MAKE</h3>

      <div className='grid grid-cols-1 lg:grid-cols-2 my-6 gap-y-6 lg:gap-y-[77px]'>
        {IMPACT_DUMMY_DATA.map(({ label, value }, index) => {
          return (
            <div key={index} className=''>
              <p className='text-[40px] font-semibold'>{value}</p>
              <p className='text-[16px] front-medium'>{label}</p>
            </div>
          );
        })}
      </div>
      <button className='flex items-center justify-center shadow-md rounded-[50px] border border-1 bg-[#133E3E] px-8 py-2 mt-12'>
        <p className='mr-4 text-white font-medium text-[14px]'>Learn how we make impacts</p>
      </button>
    </BasicHeroWrapper>
  );
};
