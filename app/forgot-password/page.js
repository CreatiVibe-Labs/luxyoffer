'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Email:', email);


        // Redirect to another page
        router.push('/forgot-password/verify-otp'); 
    };

    return (
        <div className="w-full flex mt-[-7rem]">
            <div className="imageWrapper w-1/2">
                <Image src="/images/forgot-image.png" width={6000} height={6000} className='h-[100vh] object-cover' alt="login-image" />
            </div>
            <div className='contentWrapper flex flex-col justify-center pl-10 w-1/2'>
                <Link href="/login" className='mb-2 font-medium flex items-center'>
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
                    Forgot Password
                </h2>
                <div className='formWrapper'>
                    <form className='form w-1/2 flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="email">Email Address:</label>
                            <input type='email' id='email' placeholder='Please Enter Your Email Address' className='border rounded-md outline-0 p-2'  value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='fieldGroup'>
                            <input type='submit' value="Send OTP" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer' />
                        </div>
                        <p className='text-center'>OR</p>
                        <Link href="/" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer text-center '>Go To Home Page</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}