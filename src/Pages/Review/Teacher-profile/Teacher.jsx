import React from 'react';

const Teacher = () => {
    return (
        <div className='mb-7'>

            <div class="flex items-center md:rounded-md md:border md:p-5 mt-5">

                <div class="flex items-center space-x-4">
                    <div class="rounded-[50%] overflow-hidden object-fit: undefined"><img src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg" alt=" Munzereen Shahid" height="73" width="73" placeholder="blur">
                    </img>
                    </div>
                    <div class="">
                        <h1 className='text-text1 text-xl hover:text-green-400'>Munzereen Shahid</h1>
                        <h3>MSc (English), University of Oxford (UK)</h3>
                        <h3>BA, MA (English), University of Dhaka;</h3>
                        <h3>IELTS: 8.5</h3>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Teacher;
