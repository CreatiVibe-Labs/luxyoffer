'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Register() {
    const [show, setShow] = useState(false);

    return (
        <div className="w-full flex mt-[-7rem]">
            <div className="imageWrapper w-1/2">
                <Image src="/images/register-image.png" width={6000} height={6000} className='h-[100vh] object-cover' alt="login-image" />
            </div>
            <div className='contentWrapper flex flex-col justify-center pl-10 w-1/2'>
                <h2 className='flex items-center font-semibold text-3xl'>
                    Create New Account
                </h2>
                <div className='formWrapper'>
                    <form className='form w-1/2 flex flex-col gap-5 mt-5'>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="first">First Name:</label>
                            <input type='text' id='first' placeholder='Please Enter Your First Name' className='border rounded-md outline-0 p-2' />
                        </div>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="last">Last Name:</label>
                            <input type='text' id='last' placeholder='Please Enter Your Last Name' className='border rounded-md outline-0 p-2' />
                        </div>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="email">Email Address:</label>
                            <input type='email' id='email' placeholder='Please Enter Your Email Address' className='border rounded-md outline-0 p-2' />
                        </div>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="password">Password:</label>
                            <div className='passwordField relative flex flex-col items-end justify-center'>
                                <input type={show ? 'text' : 'password'} id='password' placeholder='Please Enter Your Password' className='w-full border rounded-md outline-0 p-2' />
                                <button
                                    type="button"
                                    onClick={() => setShow((prev) => !prev)}
                                    className="absolute pr-3 flex items-center text-gray-500"
                                >
                                    {show ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <div className='fieldGroup'>
                            <input type='submit' value="Register" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer' />
                            <div className='flex gap-2 mt-2'><p>Already have an account?</p><Link href="/login" className='font-semibold'>Login Here</Link></div>
                        </div>
                        <p className='text-center'>OR</p>
                        <Link href="/" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer text-center '>Go To Home Page</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}