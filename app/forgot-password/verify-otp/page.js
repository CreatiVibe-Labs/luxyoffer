'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyOTP() {
    const inputs = useRef([]);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/, '');
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputs.current[index + 1].focus();
        }

        console.log('OTP:', newOtp.join(''));
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '');
        if (pasted.length === 6) {
            const newOtp = pasted.split('').slice(0, 6);
            setOtp(newOtp);
            newOtp.forEach((val, i) => {
                if (inputs.current[i]) {
                    inputs.current[i].value = val;
                }
            });
            inputs.current[5].focus(); // move to last
            console.log('OTP (pasted):', newOtp.join(''));
        }
    };

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('OTP:', otp);


        // Redirect to another page
        router.push('/forgot-password/reset-password');
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
                    Enter OTP
                </h2>
                <div className='formWrapper'>
                    <form className='form w-1/2 flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
                        <div className="flex space-x-3.5" onPaste={handlePaste}>
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength="1"
                                    value={otp[i]}
                                    ref={(el) => (inputs.current[i] = el)}
                                    onChange={(e) => handleChange(e, i)}
                                    onKeyDown={(e) => handleKeyDown(e, i)}
                                    className="w-16 h-16 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            ))}
                        </div>
                        <div className='fieldGroup'>
                            <input type='submit' value="Verify OTP" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer' />
                        </div>
                        <p className='text-center'>OR</p>
                        <Link href="/" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer text-center '>Go To Home Page</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}