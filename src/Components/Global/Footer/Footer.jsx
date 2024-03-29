import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {

  return (
    <div className='bg-base-100 pt-12 pb-5'>
      <footer className='footer text-base-content emaxW justify-center md:justify-between gap-x-8'>
        <div className='flex md:justify-start justify-center items-center md:items-start flex-col'>
          <img className="w-48" src='../../../../public/images/logo/Shikhboe logo-01-01.png' alt='' />
          <p
            className='text-secondary text-lg'>
            Providing reliable tech since 1992
          </p>
        </div>
        <div className='flex flex-row md:justify-between justify-center lg:gap-x-24 gap-20'>
          <div className="flex flex-col gap-y-2">
            <span className='capitalize text-base font-semibold font-WorkSans text-text2'>
              Company
            </span>
            <Link className='link link-hover text-base text-text2'>
            Join as a Teacher
            </Link>
            <Link className='link link-hover text-base text-text2'>
            Privacy policy
            </Link>
            <Link className='link link-hover text-base text-text2'>
            Become an Affiliate
            </Link>
            <Link className='link link-hover text-base text-text2'>
            Refund policy
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className='capitalize text-base font-semibold font-WorkSans text-text2'>
              Others
            </span>
            <Link className='link link-hover text-base text-text2'>
              About
            </Link>
            <Link to='/blog' className='link link-hover text-base text-text2'>
            Blog
            </Link>
            <Link className='link link-hover text-base text-text2'>
            Offers
            </Link>
            <Link className='link link-hover text-base text-text2'>
            Crash Courses
            </Link>
          </div>
        </div>
        <div className="flex md:justify-start justify-center items-center md:items-start flex-col">
          <span className='capitalize text-base font-semibold font-WorkSans text-text2'>
            Keep up with us at
          </span>
          <p className='text-base text-text2'>
            Contact -{" "}
            <a href="tel:+8801603842503" className='text-primary link link-hover'>+8801603842503</a>
          </p>
          <p className='text-base text-text2'>
            Email -{" "}
            <a href= "mailto:support@shikhboe.com" target='_blank' className='text-primary link link-hover'>
            support@shikhboe.com
            </a>
          </p>
          <div className=''>
            <SocialMedia></SocialMedia>
          </div>
        </div>
      </footer>
      <div className="divider mb-0"></div>
      <div className='py-5'>
        <p className='text-center text-sm text-text4'>
          Copyright © 2023 - All right reserved by ACME Industries Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;
