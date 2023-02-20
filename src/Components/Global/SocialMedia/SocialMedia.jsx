import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
    return (
        <div className='w-full flex justify-between gap-x-3 py-3'>
            <Link to='https://www.facebook.com/Shikhboe' target="_blank" className='btn btn-sm btn-square btn-secondary rounded'>
                <FaFacebook className='text-white h-5 w-5'></FaFacebook>
            </Link> 
            <Link target="_blank" className='btn btn-sm btn-square btn-secondary rounded'>
                <FaInstagram className='text-white h-5 w-5'></FaInstagram>
                </Link> 
            <Link target="_blank" className='btn btn-sm btn-square btn-secondary rounded'>
                <FaYoutube className='text-white h-5 w-5'></FaYoutube>
                </Link> 
            <Link target="_blank" className='btn btn-sm btn-square btn-secondary rounded'>
                <FaLinkedin className='text-white h-5 w-5'></FaLinkedin>
                </Link> 
            <Link target="_blank" className='btn btn-sm btn-square btn-secondary rounded'>
                <FaTiktok className='text-white h-5 w-5'></FaTiktok>
                </Link> 
        </div>
    );
};

export default SocialMedia;