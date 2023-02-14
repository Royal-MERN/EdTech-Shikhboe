import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <div className='bg-base-100 pt-12 pb-5'>
      <footer className='footer text-base-content emaxW justify-center md:justify-between gap-x-8'>
        <div className='flex md:justify-start justify-center items-center md:items-start flex-col'>
          <img src='../../../../public/images/logo.jpg' alt='' />
          <h2 className='text-xl font-semibold text-primary'>Shikhboe</h2>
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
              Branding
            </Link>
            <Link className='link link-hover text-base text-text2'>Design</Link>
            <Link className='link link-hover text-base text-text2'>
              Marketing
            </Link>
            <Link className='link link-hover text-base text-text2'>
              Advertisement
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className='capitalize text-base font-semibold font-WorkSans text-text2'>
              Others
            </span>
            <Link className='link link-hover text-base text-text2'>
              About us
            </Link>
            <Link className='link link-hover text-base text-text2'>
              Contact
            </Link>
            <Link className='link link-hover text-base text-text2'>Jobs</Link>
            <Link className='link link-hover text-base text-text2'>
              Press kit
            </Link>
          </div>{" "}
        </div>
        <div className="flex md:justify-start justify-center items-center md:items-start flex-col">
          <span className='capitalize text-base font-semibold font-WorkSans text-text2'>
            Keep up with us at
          </span>
          <p className='text-base text-text2'>
            Contact -{" "}
            <span className='text-primary link link-hover'>16910</span>
          </p>
          <p className='text-base text-text2'>SMS - 10MSHelp to 26969 (24X7)</p>
          <p className='text-base text-text2'>
            Email -{" "}
            <span className='text-primary link link-hover'>
              support@10minuteschool.com
            </span>
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
