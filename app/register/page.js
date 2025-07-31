'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { API } from '@/utils/api';
import Toast from '@/components/global/Toast';
import { useRouter } from 'next/navigation';
import { setAuthData } from "@/utils/auth";


export default function Register() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

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

    const handleRegister = async (e) => {
        e.preventDefault();

        const res = await API.register({ 'first_name': firstName, 'last_name': lastName, 'email': emailAddress, 'password': password, 'password_confirmation': passwordConfirmation });

        if (res.success) {
            showToastMsg(res.message.message, 'success');
            
            setAuthData({
                token: res.message.token,
                user: res.message.user,
                rememberMe: false
            });

            router.push('/');

        } else {
            showToastMsg(res.message, 'error');
        }
    }

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
                    <form className='form w-1/2 flex flex-col gap-5 mt-5' onSubmit={handleRegister}>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="first">First Name:</label>
                            <input type='text' id='first' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Please Enter Your First Name' className='border rounded-md outline-0 p-2' />
                        </div>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="last">Last Name:</label>
                            <input type='text' id='last' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Please Enter Your Last Name' className='border rounded-md outline-0 p-2' />
                        </div>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="email">Email Address:</label>
                            <input type='email' id='email' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder='Please Enter Your Email Address' className='border rounded-md outline-0 p-2' />
                        </div>
                        <div className='fieldGroup flex flex-col'>
                            <label className='label text-gray-700' htmlFor="password">Password:</label>
                            <div className='passwordField relative flex flex-col items-end justify-center'>
                                <input type={show ? 'text' : 'password'} id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Please Enter Your Password' className='w-full border rounded-md outline-0 p-2' />
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
                                <input type={show2 ? 'text' : 'password'} id='confirm_password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder='Please Confirm Your Password' className='w-full border rounded-md outline-0 p-2' />
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
                            <input type='submit' value="Register" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer' />
                            <div className='flex gap-2 mt-2'><p>Already have an account?</p><Link href="/login" className='font-semibold'>Login Here</Link></div>
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