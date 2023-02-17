import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <div className='mt-10'>
                <h3 className='mt-5 text-text1 font-semibold text-xl'>যেভাবে পেমেন্ট করবেন</h3>
                <div className="py-2 mt-4 md:p-2 md:border rounded-md">
                    <h3 className='p-3'>কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে<label htmlFor="modal" className="underline mx-1 text-green-400">এই ভিডিওটি দেখুন</label></h3>



                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <iframe width="w-100" height="w-100" src="https://www.youtube.com/embed/qvTCrW65vR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;