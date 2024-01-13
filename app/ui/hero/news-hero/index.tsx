import { BasicWrapper } from '../../wrapper/BasicWrapper';

export const Hero = () => {
  const BUTTON_FILTER = [
    {
      label: 'All',
    },
    {
      label: 'Insight',
    },
    {
      label: 'News',
    },
  ];

  return (
    <section className='bg-[#EDEDED] pt-[90px] pb-[61px]'>
      <BasicWrapper>
        <p className='antialiased text-base text-[#00AC42]'>NEWS & INSIGHTS</p>
        <p className='antialiased text-[32px] text-black'>
          Get Updated on Latest Insights <br></br>& News about Carbon & Sustainability
        </p>
        <div className='flex justify-start gap-5 mt-5'>
          {BUTTON_FILTER.map(({ label }) => (
            <button className='py-[12px] px-6 border border-black rounded-lg' key={label}>
              {label}
            </button>
          ))}
        </div>
      </BasicWrapper>
    </section>
  );
};
