import { SectionWrapper } from '@/app/ui/wrapper';
import Link from 'next/link';

export default function TermsConditionsPage() {
  const subTitleClass = 'text-[#287B49] font-semibold text-[14px] mb-2 mt-10 tracking-widest';
  const desc = 'font-medium text-base text-black';
  return (
    <SectionWrapper className='py-5 pb-20 lg:pt-16 lg:pb-40' padding='high'>
      <h1 className='text-[20px] lg:text-[32px] font-medium'>Terms and Conditions</h1>
      <p className='text-base text-black mt-3 font-medium'>
        Welcome to{' '}
        <Link href='/' className='text-[#46A7ED] underline'>
          Our Website!
        </Link>
      </p>

      <p className='mt-10 font-normal text-base text-black'>
        These terms and conditions (“Terms”) outline the rules and regulations for the use of our Website, located at
        [Carbonx website URL]. By accessing this website the User acknowledges that the User has read, understood and
        accepts these Terms. Do not continue to access our website if you do not agree to take all the terms and
        conditions stated on this page.
      </p>

      <p className={subTitleClass}>COOKIES</p>
      <p className={desc}>
        We employ the use of cookies. By accessing our Website, you agree to the use of cookies in agreement with
        Carbonx&apos;s Privacy Policy. Most interactive websites use cookies to let us retrieve the user&apos;s details
        for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier
        for people visiting our website.
      </p>

      <p className={subTitleClass}>LICENSE</p>
      <p className={desc}>
        Unless stated otherwise, Carbonx and/or its licensors own the intellectual property (IP) rights for all
        materials available on www.carbonxco.com.
      </p>

      <p className={`${desc} mt-5`}>You must not:</p>
      <ul className='list-disc pl-7'>
        <li className={desc}>Republish material from our Website</li>
        <li className={desc}>Sell, rent or sub-license material from our Website</li>
        <li className={desc}>Reproduce, duplicate or copy material from our Website</li>
        <li className={desc}>Redistribute content from our Website</li>
      </ul>
      <p className={`${desc} mt-5`}>
        We may take legal action against any violations committed by the User related to intellectual property rights
        related to our Service.
      </p>

      <p className={subTitleClass}>LINKING OUR CONTENT</p>
      <p className={`${desc} mt-5`}>
        The following organizations may link to our Website without prior written approval:
      </p>
      <ul className='list-disc pl-7'>
        <li className={desc}>Government agencies</li>
        <li className={desc}>News organizations</li>
        <li className={desc}>Private entities</li>
        <li className={desc}>Non-governmental organizations (NGOs)</li>
      </ul>
      <p className={`${desc} mt-5`}>
        The organizations listed above may link to our home page, publications by CarbonX or to other information
        provided in our Website so as long as the link: (a)
      </p>

      <p className={`${desc} mt-5`}>
        We may consider and approve other requests from the following types of organizations:
      </p>
      <ul className='list-disc pl-7'>
        <li className={desc}>Widely-known consumer and/or business information sources</li>
        <li className={desc}>Accounting, law and consulting firms</li>
        <li className={desc}>Educational institutions</li>
        <li className={desc}>Non-governmental organizations (NGOs)</li>
      </ul>
      <p className={`${desc} mt-5`}>We will approve link requests from these organizations if we determine that: (a)</p>

      <p className={subTitleClass}>CONTENT LIABILITY</p>
      <p className={desc}>We shall not be held responsible or liable for any content that appears on your Website.</p>

      <p className={subTitleClass}>YOUR PRIVACY</p>
      <p className={desc}>
        Please read and refer to our{' '}
        <Link href='/pp' className='text-[#46A7ED] font-normal underline'>
          Privacy Policy
        </Link>
      </p>

      <p className={subTitleClass}>LIMITATION OF LIABILITY</p>
      <p className={desc}>
        To the extent permitted by applicable law, CarbonX shall not be responsible, and the User agrees not to claim
        CarbonX for any damage or loss resulting directly or indirectly from:
      </p>

      <ol className='list-decimal pl-7'>
        <li className={desc}>User&apos;s use or inability to use Services</li>
        <li className={desc}>Negligence caused by the User</li>
        <li className={desc}>Infringement of Intellectual Property Rights</li>
      </ol>

      <p className={subTitleClass}>DATA RETENTION</p>
      <p className={desc}>
        Your personal data is retained as long as the purpose for which it was collected remains and until it is no
        longer necessary for any other legal or business purposes. After the retention period, your personal data will
        be deleted.
      </p>

      <p className={subTitleClass}>COMPENSATION</p>
      <p className={desc}>
        The User shall indemnify CarbonX and hold CarbonX against any claims and demands, including reasonable legal
        fees, made by third parties arising if the User violates the provision in this Agreement and improper use of
        CarbonX&apos;s services.
      </p>

      <p className={subTitleClass}>DISCLAIMER</p>
      <p className={desc}>
        To contact us on any aspect of this Privacy Policy or your personal data or to provide any feedback that you may
        have, please contact us by email at admin@carbonxco.com.
      </p>
    </SectionWrapper>
  );
}
