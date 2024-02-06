import { GreenSubTitle } from '@/app/ui/typography/GreenSubTitle';
import { SectionWrapper } from '@/app/ui/wrapper';
import { ApplyJobForm } from './ApplyJobForm';

export default function CarrerPageDetails() {
  const JOB = {
    title: 'Senior Finance and Accounting Supervisor',
    type: 'FULL TIME',
    location: 'JAKARTA',
    requirements: [
      ' Plan, implement, and supervise the company’s financial strategy',
      'Responsibility for making the company’s financial statements report, and transactions related to WHT (PPh 21, 23, 26, 29, 4 (2)), also assisted in tax litigation matters',
      'Ensure completion of statutory audits and compliance with the law',
      'Ensure compliance with local finance policies and procedures',
      'Follow proper accounting procedures to reach financial objectives',
      'Drive continuous improvement initiatives regarding processes, technologies, accounting standard changes, and organization',
      'Supervise and coach subordinates in the accounting division',
      'Make recommendations to business stakeholders',
      'Setting up the SOP’s and accounting systems',
      'Lead the timely completion of month-end, quarterly, and financial statements with meticulous record reconciliation',
      'Prepare for annual audits, cooperate with external auditors, and coordinate the preparation of work papers',
      'Prepare a board of Director’s materials related to financial information',
      'Responsible for checking and verifying each AP submission',
      'Check daily finance reports both Petty Cash and bank reconciliation',
    ],
    qualifications: [
      'Age below 40',
      'Min education S1 Accounting from reputable university',
      'Having a tax brevet certificate (A&B) is preferred',
      'Min 7 years’ experience as a Finance & Accounting Supervisor or 4 Years’ experience as a Finance & Accounting Senior Supervisor',
      'Deep knowledge of accounting and Indonesian tax laws',
      'Fluent in spoken and written English',
      'Experience in working with accounting software and databases',
      'Excellent organizational, problem solving, time management, presentation and communication skills',
      'Detail-oriented, honest, and disciplined',
      'Can join as soon as possible',
      'Placement at SCBD South Jakarta',
    ],
  };

  return (
    <SectionWrapper className='p-5 lg:py-[100px]' padding='high'>
      <GreenSubTitle label='JOB DETAILS' />
      <h1 className='text-2xl leading-[48px] font-medium'>{JOB.title}</h1>
      <div className='grid grid-cols-[120px_auto]'>
        <div className='w-fit'>
          <p className='text-base font-semibold'>TYPE</p>
          <p className='text-base font-semibold'>LOCATION</p>
        </div>
        <div>
          <p className='text-base font-medium'>{JOB.type}</p>
          <p className='text-base font-medium'>{JOB.location}</p>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-[auto_400px] gap-10'>
        <div>
          <div className='mt-8'>
            <h3 className='text-base font-semibold leading-[29px]'>REQUIREMENTS</h3>
            <div className='mt-2'>
              {JOB.requirements.map((req) => {
                return (
                  <li className='text-base leading-[29px] font-medium' key={req}>
                    {req}
                  </li>
                );
              })}
            </div>
          </div>
          <div className='mt-8'>
            <h3 className='text-base font-semibold leading-[29px]'>QUALIFICATIONS, SKILLS & EXPERIENCE</h3>
            <div className='mt-2'>
              {JOB.qualifications.map((eachQualification) => {
                return (
                  <li className='text-base leading-[29px] font-medium' key={eachQualification}>
                    {eachQualification}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div className='border-l-4 border-[#00AC42] pl-5 h-11 flex items-center'>
            <h2 className='text-2xl font-semibold'>Apply for this Position</h2>
          </div>
          <ApplyJobForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
