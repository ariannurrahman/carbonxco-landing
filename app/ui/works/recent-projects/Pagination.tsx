'use client';

interface PaginationProps {
  paginate: (page: number) => void;
  paginationList: number[];
  currentPage: number;
}

export const Pagination = (props: PaginationProps) => {
  const { paginate, paginationList = [], currentPage } = props;

  return (
    <div className='flex-row justify-end flex'>
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
