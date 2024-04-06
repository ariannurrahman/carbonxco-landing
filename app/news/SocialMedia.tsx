'use client';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const SocialMedia = () => {
  const pathname = usePathname();
  const url = `https://carbonxco.com${pathname}`;

  return (
    <div className='flex flex-col flex-start items-start pt-[150px]'>
      <p className='text-base font-medium my-5'>Share this article</p>
      <div className='grid grid-cols-3 gap-x-3'>
        <TwitterShareButton url={url}>
          <Image className='object-cover' src='/assets/twitter.png' alt='twitter' width={24} height={24} />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <Image className='object-cover' src='/assets/linkedin.png' alt='linkedin' width={24} height={24} />
        </LinkedinShareButton>
        <FacebookShareButton url={url}>
          <Image className='object-cover' src='/assets/facebook.png' alt='facebook' width={24} height={24} />
        </FacebookShareButton>
      </div>
    </div>
  );
};
