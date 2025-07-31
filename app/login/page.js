'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { API } from '@/utils/api';
import Toast from '@/components/global/Toast';
import { useRouter } from 'next/navigation';
import { setAuthData } from "@/utils/auth";

export default function Login() {
    const [show, setShow] = useState(false);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

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

    const handleLogin = async (e) => {

        e.preventDefault();

        const res = await API.login({ 'email': emailAddress, 'password': password });
        
        if (res.success) {
            showToastMsg(res.message.message, 'success');

            setAuthData({
                token: res.message.token,
                user: res.message.user,
                rememberMe: rememberMe
            });

            router.push('/');

        } else {
            showToastMsg(res.message, 'error');
        }
    }

    return (
        <div className="w-full flex mt-[-7rem]">
            <div className="imageWrapper w-1/2">
                <Image src="/images/login-image.png" width={6000} height={6000} className='h-[100vh] object-cover' alt="login-image" />
            </div>
            <div className='contentWrapper flex flex-col justify-center pl-10 w-1/2'>
                <h2 className='flex items-center font-semibold text-3xl'>
                    Welcome
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.1906 3.30834C10.9766 2.94126 10.3527 2.71865 9.71907 3.0808C9.08771 3.44163 8.97667 4.07767 9.187 4.43836L11.7127 8.76947C11.9213 9.12729 11.8004 9.58651 11.4426 9.79517C11.0848 10.0038 10.6255 9.88291 10.4169 9.52509L7.04934 3.75027C6.83528 3.38319 6.21147 3.16058 5.5778 3.52273C4.94644 3.88356 4.8354 4.5196 5.04573 4.88029L8.83422 11.377C9.04288 11.7348 8.92196 12.194 8.56414 12.4027C8.20632 12.6113 7.7471 12.4904 7.53844 12.1326L5.85467 9.24517C5.64061 8.8781 5.0168 8.65548 4.38313 9.01763C3.75177 9.37846 3.64073 10.0145 3.85106 10.3752L7.63955 16.8719C9.24849 19.631 13.2188 20.5263 16.5858 18.6021C19.9505 16.6791 21.1465 12.8376 19.5413 10.0849L17.0156 5.75382C16.8016 5.38675 16.1778 5.16413 15.5441 5.52628C14.9128 5.88711 14.8017 6.52315 15.012 6.88384L16.6958 9.77125C16.7966 9.94406 16.8241 10.15 16.7724 10.3432C16.7206 10.5364 16.5938 10.701 16.4201 10.8002C14.8776 11.6817 14.4049 13.3863 15.0802 14.5443C15.2889 14.9021 15.1679 15.3613 14.8101 15.57C14.4523 15.7787 13.9931 15.6577 13.7844 15.2999C12.8717 13.7347 13.2405 11.8501 14.4194 10.518C14.749 10.1456 14.8618 9.60391 14.6113 9.17433L11.1906 3.30834Z" fill="#fff700"></path> <g opacity="0.5"> <path fillRule="evenodd" clipRule="evenodd" d="M4.41333 17.859C4.77115 17.6504 5.23037 17.7713 5.43903 18.1291C6.26589 19.5471 7.52998 20.6193 9.08886 21.3151C9.46711 21.4839 9.63689 21.9274 9.46807 22.3057C9.29925 22.6839 8.85576 22.8537 8.47751 22.6849C6.666 21.8764 5.1462 20.6046 4.14325 18.8847C3.93459 18.5269 4.05551 18.0677 4.41333 17.859Z" fill="#fff700"></path> <path fillRule="evenodd" clipRule="evenodd" d="M18.9053 3.92194C17.8914 2.88646 16.4454 2.50452 15.0299 2.9073C14.6315 3.02066 14.2166 2.78959 14.1033 2.39119C13.9899 1.99279 14.221 1.57792 14.6194 1.46456C16.5576 0.913072 18.574 1.43959 19.9771 2.8725C20.2669 3.16846 20.2619 3.64331 19.9659 3.9331C19.67 4.2229 19.1951 4.2179 18.9053 3.92194Z" fill="#fff700"></path> </g> </g></svg>
                </h2>
                <div className='formWrapper'>
                    <form className='form w-1/2 flex flex-col gap-5 mt-5' onSubmit={handleLogin}>
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
                        <div className="fieldGroup flex justify-between">
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="peer hidden"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <div
                                    className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center transition-colors ${rememberMe ? 'bg-black border-black' : 'border-black'
                                        }`}
                                >
                                    {rememberMe && (
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <span className="ml-2 text-sm">Remember Me</span>
                            </label>
                            <Link href="/forgot-password" className='text-sm'>Forgot Password?</Link>
                        </div>
                        <div className='fieldGroup'>
                            <input type='submit' value="Login" className='border rounded-md bg-black text-white w-full pt-3 pb-3 cursor-pointer' />
                            <div className='flex gap-2 mt-2'><p>Don't have an account?</p><Link href="/register" className='font-semibold'>Register Here</Link></div>
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