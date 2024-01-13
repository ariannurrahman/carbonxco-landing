import { Hero } from '../ui/hero/news-hero';
import { NewsCard } from '../ui/card/news-card';
import { BasicWrapper } from '../ui/wrapper/BasicWrapper';

export default function News() {
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
    <>
      <Hero />
      <BasicWrapper className='grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-7 mt-5 pb-[200px]'>
        {DUMMY_DATA_CARD.map(({ title }, index) => (
          <NewsCard key={index} title={title} />
        ))}
      </BasicWrapper>
    </>
  );
}
