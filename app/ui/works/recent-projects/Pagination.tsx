'use client';

import { useProjects } from './useProject';

export const Pagination = () => {
  const { paginate, paginationList, currentPage } = useProjects();

  return (
    <div className='flex-row justify-end hidden lg:flex'>
      {paginationList.map((eachPage, index) => {
        return (
          <button
            onClick={() => paginate(eachPage)}
            key={eachPage}
            className={`grid place-content-center w-16 h-16 rounded-lg ${index + 1 === currentPage && 'bg-[#DAEEFA]'}`}
          >
            <p className={`text-base font-medium`}>{eachPage}</p>
          </button>
        );
      })}
    </div>
  );
};
