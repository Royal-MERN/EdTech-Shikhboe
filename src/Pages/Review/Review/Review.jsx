import React from 'react';
import LeftSide from '../Left-bar/LeftSide';
import RightSide from '../Right-Bar/RightSide';

const Review = () => {
    return (
        <div className='emaxW mt-8'>
           <div className='grid grid-cols-3 gap-10'>
            {/* Left-bar-start */}
            <div className='col-span-2'>
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
        </div>
    );
};

export default Review;