'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API } from '@/utils/api';
import LoadingSVG from '@/components/global/LoadingSVG';
import Toast from '@/components/global/Toast';
import Cookies from 'js-cookie';

export default function ForgotPassword() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');

    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastCondition, setToastCondition] = useState('');

    const showToastMsg = (msg, condition) => {
        setToastMessage(msg);
        setToastCondition(condition);
        setShowToast(true);

        // Auto-hide after 3s
        setTimeout(() => setShowToast(false), 3000);
    };

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await API.forgotPassword({ 'email': email });

        if (res.success) {
            setIsLoading(false);
            showToastMsg(res.message.message, 'success');
            
            Cookies.set('fp_email', email, { expires: 1 / 72 });

            setTimeout(() => router.push('/forgot-password/verify-otp'), 1000);

        } else {
            setIsLoading(false);
            showToastMsg(res.message, 'error');
        }
    };

    return (
        <div className="w-full flex mt-[-7rem]">
            <div className="imageWrapper w-1/2">
                <Image src="/images/forgot-image.png" width={6000} height={6000} className='h-[100vh] object-cover' alt="login-image" />
            </div>
            <div className='contentWrapper flex flex-col justify-center pl-10 w-1/2'>
                <Link href="/login" className='cursor-pointer mb-2 font-medium flex items-center'>
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
                    <form className='form w-2/3 flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="email">Email Address:</label>
                            <input required type='email' id='email' placeholder='Please Enter Your Email Address' className='border rounded-md outline-0 p-2' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='fieldGroup'>
                            <button type="submit" disabled={isLoading} className="border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer text-center flex justify-center">
                                {isLoading ? <LoadingSVG /> : 'Send OTP'}
                            </button>
                        </div>
                        <p className='text-center'>OR</p>
                        <Link href="/" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer text-center '>Go To Home Page</Link>
                    </form>
                </div>
            </div>
            {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} condition={toastCondition} />}
        </div>
    );
}