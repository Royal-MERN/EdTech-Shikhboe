import React from 'react';

const Certificate = () => {
    return (
        <div className='mt-10'>
            <h3 className='mt-5 text-text1 font-semibold text-xl'>কোর্স সার্টিফিকেট</h3>
            <div className="py-2 mt-4 md:p-2 md:border rounded-md">
                <div className=" md:p-6">
                    <h3 className='py-6'>কোর্সটি সফলভাবে শেষ করলে আপনার জন্য আছে সার্টিফিকেট যা আপনি-</h3>
                    <ul className="grid grid-cols-1 gap-2  md:gap-4">
                        <li className="mb-2 flex items-start gap-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" className="mr-1 mt-[2px]" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><h3 className="flex-1">আপনার সিভিতে যোগ করতে পারবেন</h3></li>
                        <li className="mb-2 flex items-start gap-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" className="mr-1 mt-[2px]" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><h3 className="flex-1">লিংকডইন প্রোফাইলে সরাসরি শেয়ার করতে পারবেন</h3></li>
                        <li className="mb-2 flex items-start gap-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" className="mr-1 mt-[2px]" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><h3 className="flex-1">ফেসবুকে এক ক্লিকেই শেয়ার করতে পারবেন</h3></li>

                    </ul>
                    <div className='underline mt-4 md:border rounded-md'>
                        <img src="https://img.freepik.com/free-vector/classy-ornamental-certificate-template-beige-black_53876-116396.jpg" alt="" height="523" width="761" placeholder='blur' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;