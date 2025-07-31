'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function VerifyOTP() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-full flex mt-[-7rem]">
            <div className="imageWrapper w-1/2">
                <Image src="/images/otp-image.png" width={6000} height={6000} className='h-[100vh] object-cover' alt="login-image" />
            </div>
            <div className='contentWrapper flex flex-col justify-center pl-10 w-1/2'>
                <Link href="/forgot-password" className='mb-2 font-medium flex items-center'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="inline-block"
                    >
                        <path
                            d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519
       c0.545,0,1.087-0.222,1.482-0.657c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564
       L64.67,22.921c0.742-0.818,0.68-2.083-0.139-2.824c-0.817-0.742-2.082-0.679-2.824,0.139
       L33.768,51.059c-0.439,0.485-0.59,1.126-0.475,1.723C33.234,53.39,33.446,54.017,33.934,54.458z"
                            fill="currentColor"
                        />
                    </svg>
                    Back
                </Link>
                <h2 className='flex items-center font-semibold text-3xl'>
                    Reset Password
                </h2>
                <div className='formWrapper'>
                    <form className='form w-1/2 flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="password">New Password:</label>
                            <div className='passwordField relative flex flex-col items-end justify-center'>
                                <input type={show ? 'text' : 'password'} id='password' placeholder='Please Enter Your New Password' className='w-full border rounded-md outline-0 p-2' />
                                <button
                                    type="button"
                                    onClick={() => setShow((prev) => !prev)}
                                    className="absolute pr-3 flex items-center text-gray-500"
                                >
                                    {show ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="confirm_password">Confirm Password:</label>
                            <div className='passwordField relative flex flex-col items-end justify-center'>
                                <input type={show2 ? 'text' : 'password'} id='confirm_password' placeholder='Please Confirm Your Password' className='w-full border rounded-md outline-0 p-2' />
                                <button
                                    type="button"
                                    onClick={() => setShow2((prev) => !prev)}
                                    className="absolute pr-3 flex items-center text-gray-500"
                                >
                                    {show2 ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <div className='fieldGroup'>
                            <input type='submit' value="Reset Password" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer' />
                        </div>
                        <p className='text-center'>OR</p>
                        <Link href="/" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer text-center '>Go To Home Page</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}