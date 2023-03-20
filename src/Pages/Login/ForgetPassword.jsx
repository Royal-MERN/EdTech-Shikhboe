import React from 'react';
import { useForm } from "react-hook-form";
import { useAuth } from '../../Context/AuthProvider';

const ForgetPassword = () => {

    const {forgetPassword}=useAuth();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();


      // Reset password handling
      const resetPassword = (data) => {
        forgetPassword(data.email)
        .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    return (
        <>
        <div className='w-full max-w-md p-8 space-y-3 rounded-xl shadow-md mx-auto maxW my-10'>
            <h3 className='text-2xl font-bold text-center'>Reset Password</h3>
            <form
              onSubmit={handleSubmit(resetPassword)}
              className='space-y-6 ng-untouched ng-pristine ng-valid'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='username' className='block dark:text-gray-700'>
                  Enter your email address
                </label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='jon@example.com'
                  className='w-full px-4 py-3 rounded-md bg-transparent border-2 focus:border-primary outline-none'
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                />
                {errors.email && (
                  <p className='text-error mt-1' role='alert'>
                    {errors.email?.message}
                  </p>
                )}
              </div>
              
              <button className='block w-full p-3 text-center rounded-sm btn-primary'>
                <input type='submit' value='Reset' />
              </button>
            </form>
            </div>
        </>
    );
};

export default ForgetPassword;