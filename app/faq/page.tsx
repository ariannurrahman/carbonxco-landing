import { GreenSubTitle } from '../ui/typography/GreenSubTitle';
import { SectionWrapper } from '../ui/wrapper';

export default function FaqPage() {
  const FAQ_LIST = [
    {
      question: 'What is Carbon Credit',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
    {
      question: 'How Carbon Credits could be produced?',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
    {
      question: 'What is the benefit of entities that purchase carbon credits?',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
    {
      question: 'What are the roles of CarbonX Investments in this ecosystem?',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
    {
      question: 'How could communities and the environment acquire the benefit of carbon projects?',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
    {
      question: 'How to collaborate with us?',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
  ];

  return (
    <SectionWrapper padding='high' className='pb-[200px]'>
      <div className='flex justify-center items-start h-[214px] flex-col flex-nowrap'>
        <GreenSubTitle label='F.A.Q' />
        <p className='text-[32px] font-medium mt-3'>Frequently Asked Question</p>
      </div>
      <div className='flex flex-col gap-y-5'>
        {FAQ_LIST.map(({ answer, question }) => {
          return (
            <div key={question} className='flex-1 rounded-lg border border-2-[#D4EFDE] py-[36px] px-[45px]'>
              <p className='text-xl font-medium'>{question}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
