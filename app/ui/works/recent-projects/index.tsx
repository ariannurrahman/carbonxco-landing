import { SectionWrapper } from '../../wrapper';
import { Pagination } from './Pagination';
import { ProjectList } from './ProjectList';

export const RecentProjects = async () => {
  return (
    <SectionWrapper padding='high' className='pt-10 pb-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <h1 className='text-[32px] font-medium text-center lg:text-left'>Recent Projects</h1>
        <Pagination />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-10'>
        <ProjectList />
      </div>
      <div className='flex-row justify-center flex lg:hidden w-full'>
        <Pagination />
      </div>
    </SectionWrapper>
  );
};
