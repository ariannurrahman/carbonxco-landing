import { ProjectCard } from '../../project-card';
import { SectionWrapper } from '../../wrapper';

export const RecentProjects = () => {
  const pagination = [1, 2, 3, 4, 5];

  const PROJECT_LIST = [
    {
      title: 'Sanggala Project',
      desc: 'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment',
      src: '/assets/home/projects/sanggala.png',
      id: 1,
    },
    {
      title: 'Buru Island',
      desc: 'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment',
      src: '/assets/home/projects/bulu.png',
      id: 2,
    },
    {
      title: 'Sanggala Project',
      desc: 'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment',
      src: '/assets/home/projects/sanggala.png',
      id: 3,
    },
    {
      title: 'Buru Island',
      desc: 'Intervening the ongoing land conversion to become restored and sustainably preserved; investing in community-based empowerment',
      src: '/assets/home/projects/bulu.png',
      id: 4,
    },
  ];

  return (
    <SectionWrapper padding='high' className='pt-10 pb-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <h1 className='text-[32px] font-medium text-center lg:text-left'>Recent Projects</h1>
        <div className='flex-row justify-end hidden lg:flex'>
          {pagination.map((eachPage, index) => {
            return (
              <button
                key={eachPage}
                className={`grid place-content-center w-16 h-16 rounded-lg ${index === 0 && 'bg-[#DAEEFA]'}`}
              >
                <p className={`text-base font-medium`}>{eachPage}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-10'>
        {PROJECT_LIST.map(({ desc, id, src, title }) => {
          return <ProjectCard desc={desc} id={id.toString()} src={src} title={title} key={id} />;
        })}
      </div>
      <div className='flex-row justify-center flex lg:hidden w-full'>
        {pagination.map((eachPage, index) => {
          return (
            <button
              key={eachPage}
              className={`grid place-content-center w-16 h-16 rounded-lg ${index === 0 && 'bg-[#DAEEFA]'}`}
            >
              <p className={`text-base font-medium`}>{eachPage}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
