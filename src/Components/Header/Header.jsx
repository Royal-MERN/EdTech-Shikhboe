import React from 'react';
import { Slider } from '../CourseSlider/Slider';
import Finance from '../Finance/Finance';

const Header = () => {
  return (
    <div className='bg-black p-8 rounded-2xl w-[95%] mx-auto'>

      <h2 className='font-bold text-4xl text-center text-white mt-16 mb-8'>২০২৩ সালের অনলাইন ব্যাচে ভর্তি চলছে!</h2>
      <p className='font-bold text-center text-white mb-16'>শ্রেণি অনুযায়ী সপ্তাহে ৬-১০টি লাইভ ক্লাস, সাথে লেকচার শিট এবং নিয়মিত পরীক্ষার সুবিধা</p>
      <Finance></Finance>
      <div className='mt-16 mb-16'>
      <h2 className='text-4xl mb-8 text-white text-center font-bold'>নতুন বছর, নতুন স্কিলস</h2>
      <p className='font-bold text-white text-center'>নতুন বছর উপলক্ষ্যে টেন মিনিট স্কুলের বিভিন্ন কোর্স ও বান্ডেল পাওয়া যাবে আরো সাশ্রয়ে</p>
      </div>
      <Slider></Slider>
    </div>
  );
};

export default Header;