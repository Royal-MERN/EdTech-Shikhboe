import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import UserAvatar from "../../Components/UserAvatar/UserAvatar";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthProvider";

const Profile = () => {

  const {user}=useAuth();
  console.log("🚀 ~ file: Profile.jsx:11 ~ Profile ~ user:", user)
  

  const [profileImage, setProfileImage] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const userInfo = {
      fullName: data.fullName,
      certificateName: data.certificateName,
      emailAddress: data.emailAddress,
      phoneNumber: data.phoneNumber,
      avatarUrl: profileImage,
    };
    console.log(userInfo);
  };


  return (
    <div className='maxW py-10'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-2xl font-medium'>প্রোফাইল</h2>
        <div className='flex justify-center my-5'>
          <div className='relative'>
            <label
              htmlFor='userAvatar'
              className='absolute z-10 -right-2 -top-1 rounded-full text-white bg-slate-700 p-1 cursor-pointer'>
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
        <div className='max-w-xl mx-auto'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-lg'>Full Name</span>
            </label>
            <input
              {...register("fullName")}
              type='text'
              placeholder='Your Full Name'
              className='input input-bordered w-full rounded'
              value={user?.displayName}
              disabled
            />
            <label className='label pt-5'>
              <span className='label-text text-lg'>Certificate Name</span>
            </label>
            <input
              {...register("certificateName")}
              type='text'
              placeholder='Type Your Certificate Name'
              className='input input-bordered w-full rounded'
              value={user?.displayName}
            />
            <label className='label pt-5'>
              <span className='label-text text-lg'>Email</span>
            </label>
            <input
              {...register("emailAddress")}
              type='text'
              placeholder='Type your email'
              className='input input-bordered w-full rounded'
              value={user?.email}
              disabled
            />
            <label className='label pt-5'>
              <span className='label-text text-lg'>Phone Number</span>
            </label>
            <input
              {...register("phoneNumber")}
              type='text'
              placeholder='Type your Phone Number'
              className='input input-bordered w-full rounded'
            />

            <input
              type='submit'
              value='Save'
              className='btn btn-primary mt-5 w-28 mx-auto'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
