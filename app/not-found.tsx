import Link from 'next/link';
import { Button } from './ui/button';

export default function Home() {
  return (
    <div className='h-screen w-screen flex justify-center items-start'>
      <div className='text-center mt-[200px] max-w-[260px] space-y-5'>
        <h1 className='text-[64px] font-medium'>404</h1>
        <h3 className='text-[20px] font-medium text-[#3EB049]'>Oops! Page Not Found</h3>
        <p className='text-[14px] font-medium'>
          Didn&apos;t find what you&apos;re looking for? contact us directly{' '}
          <Link href='/contact-us' className='text-[#3EB049] underline decoration-[#3EB049]'>
            here!
          </Link>
        </p>
        <Button className='bg-[#00AC42] hover:bg-[#287B49]'>
          <Link className='flex items-center' href='/'>
            <p className='text-base text-white font-medium'>Back to Homepage</p>
          </Link>
        </Button>
      </div>
    </div>
  );
}
