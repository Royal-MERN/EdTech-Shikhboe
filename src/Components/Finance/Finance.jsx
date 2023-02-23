import React from 'react';
import FinanceImg from '../../../public/images/CourseImg/idlc__10ms_finance_olympiad_1673939518002.webp'

const Finance = () => {
  return (
    <div className='bg-white rounded-2xl w-[80%] grid lg:grid-cols-2 mx-auto mb-10 p-8'>
      <div className=''>
        <h2 className='col-span-4 lg:p-4 mb-2 font-bold text-sm lg:text-lg'>১৬ থেকে ২৪ বছর বয়সী কলেজ ও বিশ্ববিদ্যালয় শিক্ষার্থীদের জন্য দেশের সর্ববৃহৎ ফাইন্যান্স অলিম্পিয়াড</h2>
        <p className='text-green-400 underline pl-4'>আরও জানুন ❯</p>
      </div>
      <div>
        <img src={FinanceImg} className='lg:w-52 lg:ml-40' alt="" />
      </div>
    </div>
  );
};

export default Finance;