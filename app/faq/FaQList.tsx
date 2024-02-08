'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FaQList() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const FAQ_LIST = [
    {
      id: 1,
      question: 'What is Carbon Credit',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
    {
      id: 2,
      question: 'How Carbon Credits could be produced?',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
    {
      id: 3,
      question: 'What is the benefit of entities that purchase carbon credits?',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
    {
      id: 4,
      question: 'What are the roles of CarbonX Investments in this ecosystem?',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
    {
      id: 5,
      question: 'How could communities and the environment acquire the benefit of carbon projects?',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
    {
      id: 6,
      question: 'How to collaborate with us?',
      answer:
        'Carbon credits are certificates that signify an achievement in preventing and/or decreasing 1 CO2e emission. These credits are granted by independent standards and are only generated through projects adhering to a rigorous carbon accounting methodology and verification process. When business entities voluntarily acquire carbon credits, it is intended to complement the main decarbonization strategy of each party involved.',
    },
  ];

  return FAQ_LIST.map(({ answer, question, id }) => {
    return (
      <div key={question} className='flex-1 rounded-lg border border-2-[#D4EFDE] py-[36px] px-[45px] transition'>
        <div className='flex flex-row flex-nowrap justify-between items-center '>
          <p className='text-xl font-medium'>{question}</p>
          <div onClick={() => setIsOpen(id)} className='relative cursor-pointer transition'>
            {isOpen === id ? (
              <div className='rounded-full bg-[#D4EFDE] w-11 h-11 rotate-180 transition flex justify-center items-center'>
                <Image src='/assets/collapse-close-icon.svg' alt='collapsed' width={12} height={18} />
              </div>
            ) : (
              <div className='flex justify-center items-center w-11 h-11'>
                <Image src='/assets/collapse-close-icon.svg' alt='collapsed' width={12} height={18} />
              </div>
            )}
          </div>
        </div>
        {isOpen === id && <p className='text-base font-medium max-w-[791px] mt-4'>{answer}</p>}
      </div>
    );
  });
}
