import React from 'react';
import { BasicHeroWrapper } from '../wrapper/BasicHeroWrapper';
import { NewsCard } from '../card/news-card';
import { ButtonArrow } from '../button/button-arrow';

export const ProjectSection = () => {
  const DUMMY_PROJECT_CARD = [
    {
      label: 'Biodiversity Preservation',
    },
    {
      label: 'Ecosystem Conservation',
    },
    {
      label: 'Jobs Creation',
    },
    {
      label: 'Emission Reduction',
    },
    {
      label: 'Social Inclusions',
    },
    {
      label: 'Communities Livelihood',
    },
    {
      label: 'More Cases',
    },
  ];

  const DUMMY_DATA_CARD = [
    {
      title: "CarbonX Signs MoU with AirCarbon Exchange, Building Indonesia's Carbon Marketplace",
    },
    {
      title:
        'Addressing Climate Impacts on the Northern Java Coastline, CarbonX and IIF Plant 3,000 Mangroves Seedlings in Brebes, Central Java',
    },
    {
      title:
        'CarbonX and Indonesia Indah Foundation Join Forces to Accelerate Environmental Sustainability Education for School Children',
    },
  ];

  return (
    <BasicHeroWrapper sectionId='project-section'>
      <h3 className='text-[#00AC42] text-[16px] font-semibold text-center'>IMPACTS</h3>
      <p className='text-black text-[32px] font-medium text-center mt-3'>
        we catalyze climate actions
        <br /> and create high-impact
        <br /> projects for people and planet
      </p>

      <div className='mt-9 flex flex-wrap flex-row gap-8 justify-center'>
        {DUMMY_PROJECT_CARD.map(({ label }, index) => (
          <div
            key={index}
            className='border border-1 border-black rounded-lg py-[14px] px-[24px] text-black text-[16px] font-medium'
          >
            {label}
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 mt-16'>
        {DUMMY_DATA_CARD.map(({ title }, index) => (
          <NewsCard key={index} title={title} />
        ))}
      </div>
      <div className='flex justify-center items-center mt-24'>
        <ButtonArrow imgAlt='See All Projects' label='See All Projects' />
      </div>
    </BasicHeroWrapper>
  );
};
