import React from 'react';

const ClassRequired = () => {
    return (
        <div className='mt-8'>
            <h3 className='text-xl font-semibold text-text1'>ক্লাস করার জন্য প্রয়োজন হবে</h3>
            <div className="py-2 mt-4 md:border rounded-md">
                <ul className="md:gap-4 lg:p-5">

                    <li className="flex items-start gap-2 mb-4">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" className="mr-1 mt-[2px]" height="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <h3 className="flex-1">ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</h3>
                    </li>
                    <li className="mb-2 flex items-start gap-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" className="mr-1 mt-[2px]" height="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <h3 className="flex-1">স্মার্টফোন অথবা পিসি</h3>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default ClassRequired;