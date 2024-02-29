import { HomeCarousel } from '../../carousel/HomeCarousel';
import { SectionWrapper } from '../../wrapper';

export const Partners = () => {
  return (
    <SectionWrapper className='flex flex-col lg:flex-row' padding='high'>
      <div className='flex justify-center items-center w-fit pr-0 lg:pr-10'>
        <h4 className='font-medium text-2xl text-nowrap'>Our Partners</h4>
      </div>
      <HomeCarousel />
    </SectionWrapper>
  );
};
