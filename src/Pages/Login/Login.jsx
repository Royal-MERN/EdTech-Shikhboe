import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthProvider";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // error message storage
  const [loginError, setLoginError] = useState("");

  //get Authentication function
  const { logIN, setLoading,googleLogIn,facebookLogin} = useAuth();

  // get From-hook function
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Login From submit or user Login handel
  const handleLogin = (data) => {
    setLoginError("");
    logIN(data.email, data.password)
      .then(() => {
        navigate(from, { replace: true });
        reset();
      })
      .catch((error) => {
        const errorMessage = error.message.split("/")[1].split(")");
        setLoginError(errorMessage[0]);
      })
      .finally(() => {
        setLoading(false);
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
        setLoginError(errorMessage?.split(")")[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //Facebook login handel
  const handelFacebookLogin = () => {
    facebookLogin().then((result) => {
      console.log(result);
      if (result?.user?.uid) {
        
      }
    })
    .catch((error) => {
      console.log(error);
      const errorMessage = error?.message?.split("/")[1];
      setLoginError(errorMessage?.split(")")[0]);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (
    <>
      <section className='maxW py-10 lg:flex justify-center items-center gap-x-10 '>
        <div className='w-2/5 hidden lg:block'>
          <img src='https://iili.io/HXpwILv.png' alt='' />
        </div>
        <div className='lg:w-2/5 w-full'>
          <div className='w-full max-w-md p-8 space-y-3 rounded-xl shadow-md mx-auto'>
            <h3 className='text-2xl font-bold text-center'>Login</h3>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className='space-y-6 ng-untouched ng-pristine ng-valid'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='username' className='block dark:text-gray-700'>
                  Username
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
                  })}
                />
                {errors.password && (
                  <p className='text-error mt-1' role='alert'>
                    {errors.password?.message}
                  </p>
                )}
                <div className='flex justify-end text-xs dark:text-gray-400'>
                  <Link
                    className='link link-primary'
                    to='/password-reset'>
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <button className='block w-full p-3 text-center rounded-sm btn-primary'>
                <input type='submit' value='Sign in' />
              </button>
            </form>
            <div className='flex items-center pt-4 space-x-1'>
              <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
              <p className='px-3 text-sm dark:text-gray-400'>
                Login with social accounts
              </p>
              <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div className='flex justify-center space-x-4'>
              <button onClick={()=>handelGoogleLogin()}
                aria-label='Log in with Google'
                className='p-3 rounded-sm'>
                <FcGoogle className='h-9 w-9' />
              </button>
              <button 
              onClick={()=>handelFacebookLogin()}
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
              Don't have an account?
              <Link
                rel='noopener noreferrer'
                to='/register'
                className='link link-primary'>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
