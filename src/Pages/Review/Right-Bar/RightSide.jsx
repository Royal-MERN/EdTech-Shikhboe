import React from 'react';

const RightSide = () => {
    return (

        <div className='z-0 border'>
            <iframe width="370" height="224" className='mb-4' src="https://www.youtube.com/embed/Qv31m3tQlVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="flex items-center justify-between md:flex-col md:items-start">
                <div class="md:mb-3 p-4">
                    <div class="inline-block text-2xl font-semibold">৳890</div>
                    <del class="ml-2 text-base font-normal md:text-xl">৳950</del>
                    <h3 className='text-text2 mt-3'>promo Code Applied GBSE890</h3>
                </div>
                <button class="rounded-md bg-green-500 p-3 text-base font-medium text-white md:w-full false ">Enroll</button>
            </div>

        </div>

    );
};

export default RightSide;