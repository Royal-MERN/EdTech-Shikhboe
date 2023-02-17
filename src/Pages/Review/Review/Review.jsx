import React from 'react';
import Course from '../Course-card/Course';
import LeftSide from '../Left-bar/LeftSide';
import RightSide from '../Right-Bar/RightSide';

const Review = () => {
    return (
        <div className='maxW mt-8 pb-28'>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-10'>
                {/* Left-bar-start */}
                <div className='col-span-2 lg:w-full w-96'>
                    <LeftSide></LeftSide>
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
            <Course />
        </div>
    );
};

export default Review;