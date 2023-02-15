import React from 'react';
import Details from '../Course-details/Details';
import Learning from '../learning/Learning';
import Teacher from '../Teacher-profile/Teacher';

const LeftSide = () => {
    return (
        <div>
           <h1 className='text-text1 font-WorkSans text-3xl font-bold'>ঘরে বসে Spoken English</h1>
            <p className='mt-8 text-text2 text-xl'>Learn to speak fluent English. Become a confident English speaker in your everyday life. A complete spoken English course for learners of all levels & backgrounds.</p>

            <h3 className='mt-[70px] text-text1 text-xl font-semibold'>কোর্স ইন্সট্রাক্টর</h3>
          <Teacher/>
          <Learning/>
          <Details/>
        </div>
    );
};

export default LeftSide;