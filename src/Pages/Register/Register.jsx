import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthProvider";

const Register = () => {
  let navigate = useNavigate();
  // error message storage
  const [signUPError, setSignUPError] = useState("");

  //get Authentication function
  const {
    createNewUser,
    googleLogIn,
    setLoading,
    facebookLogin,
    updateUserProfile,
    emailVerification,
  } = useAuth();

  // get From-hook function
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // SignUP From submit or Create user handel
  const handelSignUP = (data) => {
    setSignUPError("");
    createNewUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        if (result?.user?.uid) {
          userUPDATE(data.name);
        }
      })
      .catch((error) => {
        const errorMessage = error?.message?.split("/")[1];
        setSignUPError(errorMessage?.split(")")[0]);
        console.log(error);
      })
      .finally(() => {});
  };

  //updateUserProfile
  const userUPDATE = (name) => {
    const userDetails = { displayName: name };
    updateUserProfile(userDetails)
      .then((result) => {
        console.log(result);
        reset();
        sendEmailVerification();
      })
      .catch((error) => {
        const errorMessage = error?.message?.split("/")[1];
        setSignUPError(errorMessage?.split(")")[0]);
      });
  };

  // Google login handel
  const handelGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        console.log(result);
        if (result?.user?.uid) {
        }
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error?.message?.split("/")[1];
        setSignUPError(errorMessage?.split(")")[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //Facebook login handel
  const handelFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        console.log(result);
        if (result?.user?.uid) {
        }
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error?.message?.split("/")[1];
        setSignUPError(errorMessage?.split(")")[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // send email verification
  const sendEmailVerification = () => {
    emailVerification()
      .then((result) => {
        console.log(result);
        navigate('/email-verify')
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <section className='maxW py-10 lg:flex justify-center items-center gap-x-10 '>
        <div className='w-2/5 hidden lg:block'>
          <img src='https://iili.io/HXpNHvt.png' alt='' />
        </div>
        <div className='lg:w-2/5 w-full'>
          <div className='w-full max-w-md p-8 space-y-3 rounded-xl shadow-md mx-auto'>
            <h3 className='text-2xl font-bold text-center'>Register</h3>
            <form
              onSubmit={handleSubmit(handelSignUP)}
              className='space-y-6 ng-untouched ng-pristine ng-valid'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='username' className='block dark:text-gray-700'>
                  Full Name
                </label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  {...register("name", {
                    required: "Full Name is required",
                    minLength: {
                      value: 4,
                      message: "Name Length Must be 4 Characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name Length Must be under 24 Characters",
                    },
                  })}
                  placeholder='Jon Den'
                  className='w-full px-4 py-3 rounded-md bg-transparent border-2 focus:border-primary outline-none'
                />
                {errors.name && (
                  <p className='text-error mt-1' role='alert'>
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='username' className='block dark:text-gray-700'>
                  Email
                </label>
                <input
                  type='email'
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
              <div className='space-y-1 text-sm'>
                <label htmlFor='password' className='block dark:text-gray-700'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password must be 8 character'
                  className='w-full px-4 py-3 rounded-md bg-transparent border-2 focus:border-primary outline-none'
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password Length Must be 6 Characters",
                    },
                    pattern: {
                      value: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                      message:
                        "Password must have at least one number, one special character, one uppercase & lowercase",
                    },
                  })}
                />
                {errors.password && (
                  <p className='text-error mt-1' role='alert'>
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <button className='block w-full p-3 text-center rounded-sm btn-primary'>
                <input type='submit' value='Sign up' />
              </button>
            </form>
            <div className='flex items-center pt-4 space-x-1'>
              <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
              <p className='px-3 text-sm dark:text-gray-400'>
                Register with social accounts
              </p>
              <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div className='flex justify-center space-x-4'>
              <button
                onClick={() => handelGoogleLogin()}
                aria-label='Log in with Google'
                className='p-3 rounded-sm'>
                <FcGoogle className='h-9 w-9' />
              </button>
              <button
                onClick={() => handelFacebookLogin()}
                aria-label='Log in with Twitter'
                className='p-3 rounded-sm'>
                <img
                  className='h-8 w-8'
                  src='https://iili.io/HXy95xe.png'
                  alt=''
                />
              </button>
            </div>
            <p className='text-xs text-center sm:px-6 dark:text-gray-400'>
              Already have an account?
              <Link
                rel='noopener noreferrer'
                to='/login'
                className='link link-primary'>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
