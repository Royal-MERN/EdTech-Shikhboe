import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import UserAvatar from "../../Components/UserAvatar/UserAvatar";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  return (
    <div className='maxW'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-2xl font-medium'>প্রোফাইল</h2>
        <div className='flex justify-center my-5'>
          <div className='relative'>
            <label
              htmlFor='userAvatar'
              className='absolute z-10 -right-2 -top-1 rounded-full text-white bg-slate-700 p-1 cursor-pointer'>
              {/* <input type="file" className="file-input opacity-0 absolute w-5 h-5 cursor-pointer" /> */}
              <FiCamera className='cursor-pointer'></FiCamera>
            </label>
            {profileImage ? (
              <div className='avatar rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <div className='w-20 rounded-full'>
                  <img src={profileImage} />
                </div>
              </div>
            ) : (
              <div className='avatar rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <FaUserCircle className='text-[5rem] text-text3'></FaUserCircle>
              </div>
            )}
          </div>
        </div>
        {/* The button to open modal */}
        {!profileImage && (
          <UserAvatar setProfileImage={setProfileImage}></UserAvatar>
        )}
      </div>
    </div>
  );
};

export default Profile;
