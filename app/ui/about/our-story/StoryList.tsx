'use client';

import { useState, ReactNode } from 'react';

interface Story {
  year: number;
  label: string;
  description: ReactNode;
}

const STORY: Story[] = [
  {
    year: 2021,
    label: 'Establishment',
    description: (
      <p className='text-base font-medium text-center mt-5'>
        CarbonX was founded by several prominent investors and experts in their respective fields. The initial idea was
        to catalyze climate actions while creating high-impact projects for social, economics, and environmental
        sectors.
      </p>
    ),
  },
  {
    year: 2022,
    label: 'Origination',
    description: (
      <p className='text-base font-medium text-center mt-5'>
        We evaluated over 30 possible Nature-based Solution (NBS) projects mainly in the forestry sector before
        developing our first project, which is 100% owned by CarbonX.
      </p>
    ),
  },
  {
    year: 2023,
    label: 'Development',
    description: (
      <p className='text-base font-medium text-center mt-5'>
        We started developing our Nature-based Solution in carbon projects, namely Sanggala Corridor Project in West
        Kalimantan Province and Buru Integrated Sustainable Landscape Project in Maluku Province. Deeply rooted in our
        communities, we also facilitate the development of Indonesia&apos;s carbon market digital ecosystem.,
      </p>
    ),
  },
  {
    year: 2024,
    label: 'Implementation',
    description: (
      <>
        <p className='text-base font-medium text-center mt-5'>
          We would continue to invest in long-term and high-impact projects, as well as implement our project activities
          while ensuring the safeguarding policies and procedures are taken into account.
        </p>

        <p className='text-base font-medium text-center'>
          These activities include implementing free, prior, and informed consent; understanding the dynamics of
          sociocultural, economic, and demographic conditions within the project areas, conducting both structural and
          non-structural approaches, restoring degraded ecosystems, and monitoring of forest and land areas at the site
          level.
        </p>
      </>
    ),
  },
];

export const StoryList = () => {
  const [activeStory, setActiveStory] = useState<Story>({
    year: 2021,
    label: 'Establishment',
    description: (
      <p className='text-base font-medium text-center mt-5'>
        CarbonX was founded by several prominent investors and experts in their respective fields. The initial idea was
        to catalyze climate actions while creating high-impact projects for social, economics, and environmental
        sectors.
      </p>
    ),
  });

  return (
    <div>
      <div className='flex justify-center items-center flex-col my-10 gap-y-3'>
        {STORY.map((eachStory) => {
          const { label, year } = eachStory;
          return (
            <div
              onClick={() => setActiveStory(eachStory)}
              className='group grid grid-cols-[50px_20px_130px] lg:grid-cols-[50px_20px_165px] gap-7 items-center'
              key={year}
            >
              <p className='font-medium text-base lg:text-[20px]'> {year}</p>
              <div
                className={`h-4 w-4 bg-[#D4EFDE] group-hover:bg-[#00B040] rounded-full ${
                  activeStory.year === year && 'bg-[#00B040]'
                }`}
              />
              <p className='font-medium text-base lg:text-[20px] text-left'>{label}</p>
            </div>
          );
        })}

        {/* <p className='text-base font-medium text-center'> */}
        {activeStory?.description}
        {/* </p> */}
      </div>
    </div>
  );
};
