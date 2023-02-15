import React from 'react';
import Details from '../Course-details/Details';
import Learning from '../learning/Learning';
import RightSide from '../Right-Bar/RightSide';
import Teacher from '../Teacher-profile/Teacher';


const Review = () => {
    return (
        <div className='emaxW mt-8'>
           <div className='grid grid-cols-3 gap-10'>
            {/* Left-bar-start */}
            <div className='col-span-2'>
            <h1 className='text-text1 font-WorkSans text-3xl font-bold'>ঘরে বসে Spoken English</h1>
            <p className='mt-8 text-text2 text-xl'>Learn to speak fluent English. Become a confident English speaker in your everyday life. A complete spoken English course for learners of all levels & backgrounds.</p>

            <h3 className='mt-[70px] text-text1 text-xl font-semibold'>কোর্স ইন্সট্রাক্টর</h3>
           <Teacher></Teacher>
           <Learning></Learning>
           <Details></Details>
            </div>
            {/* Left-bar-end */}
            {/* Right-bar-start */}
<div>
    <div className='sticky top-[100px]'>

   <RightSide></RightSide>
    </div>

</div>
{/* Right-bar-end */}
           </div>
        </div>
    );
};

export default Review;