'use client';

import ProfileSidebar from "@/components/global/ProfleSidebar";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {
    const [editProfile, setEditProfile] = useState(false);

    return (
        <div className="profileWrapper mx-auto max-w-7xl px-4">
            <h1 className="font-semibold text-3xl">My Profile</h1>

            <div className="profileContainer flex gap-5 mt-5">
                <div className="sidebarWrapper w-1/3">
                    <ProfileSidebar />
                </div>
                <div className="contentWrapper w-2/3">
                    <div className="actionWrapper flex justify-between items-center">
                        <div className="profileUpdate">
                            <Image src="/images/avatar-default.svg" width={80} height={80} className="" alt="avatar" />
                        </div>
                        <div className="editProfile">
                            {!editProfile && <button className="rounded-md bg-black text-white px-6 py-3 text-lg cursor-pointer" onClick={() => setEditProfile(true)}>Edit Profile</button>}
                            {editProfile && <button className="rounded-md bg-black text-white px-6 py-3 text-lg cursor-pointer" onClick={() => setEditProfile(false)}>Save Profile</button>}
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