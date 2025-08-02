'use client';

import ProfileSidebar from "@/components/global/ProfleSidebar";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {
    const [editProfile, setEditProfile] = useState(false);

    const handleProfileSave = async (e) => {
        e.preventDefault();
        setEditProfile(false);
    }

    return (
        <div className="profileWrapper mx-auto max-w-7xl px-4">
            <h1 className="font-semibold text-3xl">My Profile</h1>

            <div className="profileContainer flex gap-5 mt-5">
                <div className="sidebarWrapper w-1/3">
                    <ProfileSidebar />
                </div>
                <div className="contentWrapper w-2/3">
                    <div className="actionWrapper flex justify-between items-center">
                        <div className="profileUpdate cursor-pointer bg-gray-300 rounded-full relative">
                            <Image src="/images/avatar-default.svg" width={80} height={80} className="rounded-full" alt="avatar" />
                            <div className="editIcon absolute bg-black rounded-md p-1 bottom-[-2px] right-[-2px]">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                        </div>
                        <div className="editProfile">
                            {!editProfile && <button className="rounded-md bg-black text-white px-6 py-3 text-lg cursor-pointer flex gap-2 items-center" onClick={() => setEditProfile(true)}>
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                Edit Profile
                            </button>}
                            {editProfile && <button className="rounded-md bg-black text-white px-6 py-3 text-lg cursor-pointer flex gap-2 items-center" onClick={handleProfileSave}>
                                <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z" fill="#ffffff"></path> </g></svg>
                                Save Profile
                            </button>}
                        </div>
                    </div>
                    <div className="formGroup mt-5 flex flex-col gap-5">
                        <div className="fieldGroup flex gap-5">
                            <div className="field w-full">
                                <label htmlFor="firstName" className="text-sm">First Name</label>
                                <input type="text" id="firstName" placeholder="Please Enter Your First Name" className={`border rounded-md w-full px-2 py-3 outline-0 ${ editProfile ? '' : 'disabled' }`} />
                            </div>
                            <div className="field w-full">
                                <label htmlFor="lastName" className="text-sm">Last Name</label>
                                <input type="text" id="lastName" placeholder="Please Enter Your Last Name" className={`border rounded-md w-full px-2 py-3 outline-0 ${ editProfile ? '' : 'disabled' }`} />
                            </div>
                        </div>
                        <div className="fieldGroup flex gap-5">
                            <div className="field w-full">
                                <label htmlFor="number" className="text-sm">Phone Number</label>
                                <input type="text" id="number" placeholder="Please Enter Your Phone Number" className={`border rounded-md w-full px-2 py-3 outline-0 ${ editProfile ? '' : 'disabled' }`} />
                            </div>
                            <div className="field w-full">
                                <label htmlFor="email" className="text-sm">Email Address</label>
                                <input type="email" id="email" placeholder="Please Enter Your Email Address" className={`border rounded-md w-full px-2 py-3 outline-0 ${ editProfile ? '' : 'disabled' }`} />
                            </div>
                        </div>
                        <div className="fieldGroup flex gap-5">
                            <div className="field w-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input type="text" id="address" placeholder="Please Enter Your Address" className={`border rounded-md w-full px-2 py-3 outline-0 ${ editProfile ? '' : 'disabled' }`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}