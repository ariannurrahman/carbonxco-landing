'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BASE_URL } from '../constant';

interface Faq {
  answer: string;
  createdAt: string;
  id: string;
  is_archived: string;
  question: string;
  updatedAt: string;
}

export default function FaQList() {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<Faq[] | null>(null);

  useEffect(() => {
    const getFaq = async () => {
      const response = await fetch(`${BASE_URL}/faqs`).then((res) => res.json());
      setFaqs(response.data);
    };
    getFaq();
  }, []);

  return faqs?.map(({ answer, question, id }) => {
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
