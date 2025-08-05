'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { logOut } from '@/utils/api';
import Toast from '@/components/global/Toast';
import { useRouter } from 'next/navigation';
import LoadingSVG from '@/components/global/LoadingSVG';
import Cookies from 'js-cookie';
import { useState, useEffect } from "react";
import { getUser } from "@/utils/auth";

export default function ProfileSidebar() {
    const pathname = usePathname();
    const isProfilePage = pathname.startsWith('/profile/personal-info');
    const isMyOrderPage = pathname.startsWith('/profile/my-orders');
    const isMyWishlistsPage = pathname.startsWith('/profile/my-wishlists');
    const isAddressPage = pathname.startsWith('/profile/manage-adresses');
    const isCardsPage = pathname.startsWith('/profile/saved-cards');
    const isNotificationsPage = pathname.startsWith('/profile/notifications');
    const isSettingPage = pathname.startsWith('/profile/setting');

    const [isLoading, setIsLoading] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastCondition, setToastCondition] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerProfile, setCustomerProfile] = useState('');

    useEffect(() => {
        const user = getUser();

        if (user) {
            setCustomerName(user?.name);
            setCustomerProfile( user?.customer_profile?.avatar );
        }

    }, []);
    
    const showToastMsg = (msg, condition) => {
        setToastMessage(msg);
        setToastCondition(condition);
        setShowToast(true);

        // Auto-hide after 3s
        setTimeout(() => setShowToast(false), 3000);
    };

    const router = useRouter();

    const handleLogOut = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const res = await logOut();

        if (res.success) {
            setIsLoading(false);
            showToastMsg(res.message.message, 'success');

            Cookies.remove("authToken");
            Cookies.remove("authUser");
            Cookies.remove("expiry");

            setTimeout(() => router.push('/'), 1000);

        } else {
            setIsLoading(false);
            showToastMsg(res.message, 'error');
        }
    }

    return (
        <div className="sidebarContainer bg-white border-gray-300 border-2">
            <div className="profileInfo flex items-center gap-5 px-5 py-5">
                <div className="avatarWrapper rounded-full overflow-hidden bg-gray-200">
                    <Image src={customerProfile ? customerProfile : "/images/avatar-default.svg"} width={80} height={80} className="" alt="avatar" />
                </div>
                <div className="nameWrapper flex flex-col gap-1">
                    <span className="text-md flex ga-2 items-center text-start">
                        Hello
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.1906 3.30834C10.9766 2.94126 10.3527 2.71865 9.71907 3.0808C9.08771 3.44163 8.97667 4.07767 9.187 4.43836L11.7127 8.76947C11.9213 9.12729 11.8004 9.58651 11.4426 9.79517C11.0848 10.0038 10.6255 9.88291 10.4169 9.52509L7.04934 3.75027C6.83528 3.38319 6.21147 3.16058 5.5778 3.52273C4.94644 3.88356 4.8354 4.5196 5.04573 4.88029L8.83422 11.377C9.04288 11.7348 8.92196 12.194 8.56414 12.4027C8.20632 12.6113 7.7471 12.4904 7.53844 12.1326L5.85467 9.24517C5.64061 8.8781 5.0168 8.65548 4.38313 9.01763C3.75177 9.37846 3.64073 10.0145 3.85106 10.3752L7.63955 16.8719C9.24849 19.631 13.2188 20.5263 16.5858 18.6021C19.9505 16.6791 21.1465 12.8376 19.5413 10.0849L17.0156 5.75382C16.8016 5.38675 16.1778 5.16413 15.5441 5.52628C14.9128 5.88711 14.8017 6.52315 15.012 6.88384L16.6958 9.77125C16.7966 9.94406 16.8241 10.15 16.7724 10.3432C16.7206 10.5364 16.5938 10.701 16.4201 10.8002C14.8776 11.6817 14.4049 13.3863 15.0802 14.5443C15.2889 14.9021 15.1679 15.3613 14.8101 15.57C14.4523 15.7787 13.9931 15.6577 13.7844 15.2999C12.8717 13.7347 13.2405 11.8501 14.4194 10.518C14.749 10.1456 14.8618 9.60391 14.6113 9.17433L11.1906 3.30834Z" fill="#fff700"></path> <g opacity="0.5"> <path fillRule="evenodd" clipRule="evenodd" d="M4.41333 17.859C4.77115 17.6504 5.23037 17.7713 5.43903 18.1291C6.26589 19.5471 7.52998 20.6193 9.08886 21.3151C9.46711 21.4839 9.63689 21.9274 9.46807 22.3057C9.29925 22.6839 8.85576 22.8537 8.47751 22.6849C6.666 21.8764 5.1462 20.6046 4.14325 18.8847C3.93459 18.5269 4.05551 18.0677 4.41333 17.859Z" fill="#fff700"></path> <path fillRule="evenodd" clipRule="evenodd" d="M18.9053 3.92194C17.8914 2.88646 16.4454 2.50452 15.0299 2.9073C14.6315 3.02066 14.2166 2.78959 14.1033 2.39119C13.9899 1.99279 14.221 1.57792 14.6194 1.46456C16.5576 0.913072 18.574 1.43959 19.9771 2.8725C20.2669 3.16846 20.2619 3.64331 19.9659 3.9331C19.67 4.2229 19.1951 4.2179 18.9053 3.92194Z" fill="#fff700"></path> </g> </g></svg>
                    </span>
                    <span className="text-2xl font-medium">{customerName}</span>
                </div>
            </div>
            <div className="linksWrapper border-t-2 border-gray-300 py-5 flex flex-col">
                <Link href="/profile/personal-info" className={`flex gap-2 font-medium text-lg py-3 px-5 profileSidebarLink ${isProfilePage ? 'active' : ''}`}>
                    <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000" strokeWidth="1.416" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000" strokeWidth="1.416" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    Personal Information
                </Link>
                <Link href="/profile/my-orders" className={`flex gap-2 font-medium text-lg py-3 px-5 profileSidebarLink ${isMyOrderPage ? 'active' : ''}`}>
                    <svg width="26px" height="26px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="2.88"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><polyline className="svgA" points="8.339 23.276 8.339 34.043 23.993 36.984 23.993 13.519"></polyline><polyline className="svgA" points="39.562 23.561 39.562 33.855 23.993 36.984"></polyline><path className="svgA" d="M28.7747,22.075l13.3865,1.8439a1.1763,1.1763,0,0,0,1.2355-1.643l-3.8348-8.6315-15.5691-2.628L8.3386,13.77,4.6114,21.7856a1.1764,1.1764,0,0,0,1.1482,1.67l13.3385-.927a1.47,1.47,0,0,0,1.24-.8648l3.6551-8.1441,3.6531,7.7276A1.47,1.47,0,0,0,28.7747,22.075Z"></path><line className="svgA" x1="10.904" y1="30.6639" x2="13.8449" y2="30.9768"></line></g></svg>
                    My Order
                </Link>
                <Link href="#" className={`flex gap-2 font-medium text-lg py-3 px-5 profileSidebarLink ${isMyWishlistsPage ? 'active' : ''}`}>
                    <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    My Wishlists
                </Link>
                <Link href="#" className={`flex gap-2 font-medium text-lg py-3 px-5 profileSidebarLink ${isAddressPage ? 'active' : ''}`}>
                    <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#000000" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    Manage Addresses
                </Link>
                <Link href="#" className={`flex gap-2 font-medium text-lg py-3 px-5 profileSidebarLink ${isCardsPage ? 'active' : ''}`}>
                    <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#000000" strokeWidth="1.44"></path> <path d="M10 16H6" stroke="#000000" strokeWidth="1.44" strokeLinecap="round"></path> <path d="M14 16H12.5" stroke="#000000" strokeWidth="1.44" strokeLinecap="round"></path> <path d="M2 10L22 10" stroke="#000000" strokeWidth="1.44" strokeLinecap="round"></path> </g></svg>
                    Save Cards
                </Link>
                <Link href="#" className={`flex gap-2 font-medium text-lg py-3 px-5 profileSidebarLink ${isNotificationsPage ? 'active' : ''}`}>
                    <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M6.31317 12.463C6.20006 9.29213 8.60976 6.6252 11.701 6.5C14.7923 6.6252 17.202 9.29213 17.0889 12.463C17.0889 13.78 18.4841 15.063 18.525 16.383C18.525 16.4017 18.525 16.4203 18.525 16.439C18.5552 17.2847 17.9124 17.9959 17.0879 18.029H13.9757C13.9786 18.677 13.7404 19.3018 13.3098 19.776C12.8957 20.2372 12.3123 20.4996 11.701 20.4996C11.0897 20.4996 10.5064 20.2372 10.0923 19.776C9.66161 19.3018 9.42346 18.677 9.42635 18.029H6.31317C5.48869 17.9959 4.84583 17.2847 4.87602 16.439C4.87602 16.4203 4.87602 16.4017 4.87602 16.383C4.91795 15.067 6.31317 13.781 6.31317 12.463Z" stroke="#000000" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9.42633 17.279C9.01212 17.279 8.67633 17.6148 8.67633 18.029C8.67633 18.4432 9.01212 18.779 9.42633 18.779V17.279ZM13.9757 18.779C14.3899 18.779 14.7257 18.4432 14.7257 18.029C14.7257 17.6148 14.3899 17.279 13.9757 17.279V18.779ZM12.676 5.25C13.0902 5.25 13.426 4.91421 13.426 4.5C13.426 4.08579 13.0902 3.75 12.676 3.75V5.25ZM10.726 3.75C10.3118 3.75 9.97601 4.08579 9.97601 4.5C9.97601 4.91421 10.3118 5.25 10.726 5.25V3.75ZM9.42633 18.779H13.9757V17.279H9.42633V18.779ZM12.676 3.75H10.726V5.25H12.676V3.75Z" fill="#000000"></path> </g></svg>
                    Notifications</Link>
                <Link href="#" className={`flex gap-2 font-medium text-lg py-3 px-5 profileSidebarLink ${isSettingPage ? 'active' : ''}`}>
                    <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.0175 19C10.6601 19 10.3552 18.7347 10.297 18.373C10.2434 18.0804 10.038 17.8413 9.76171 17.75C9.53658 17.6707 9.31645 17.5772 9.10261 17.47C8.84815 17.3365 8.54289 17.3565 8.30701 17.522C8.02156 17.7325 7.62943 17.6999 7.38076 17.445L6.41356 16.453C6.15326 16.186 6.11944 15.7651 6.33361 15.458C6.49878 15.2105 6.52257 14.8914 6.39601 14.621C6.31262 14.4332 6.23906 14.2409 6.17566 14.045C6.08485 13.7363 5.8342 13.5051 5.52533 13.445C5.15287 13.384 4.8779 13.0559 4.87501 12.669V11.428C4.87303 10.9821 5.18705 10.6007 5.61601 10.528C5.94143 10.4645 6.21316 10.2359 6.33751 9.921C6.37456 9.83233 6.41356 9.74433 6.45451 9.657C6.61989 9.33044 6.59705 8.93711 6.39503 8.633C6.1424 8.27288 6.18119 7.77809 6.48668 7.464L7.19746 6.735C7.54802 6.37532 8.1009 6.32877 8.50396 6.625L8.52638 6.641C8.82735 6.84876 9.21033 6.88639 9.54428 6.741C9.90155 6.60911 10.1649 6.29424 10.2375 5.912L10.2473 5.878C10.3275 5.37197 10.7536 5.00021 11.2535 5H12.1115C12.6248 4.99976 13.0629 5.38057 13.1469 5.9L13.1625 5.97C13.2314 6.33617 13.4811 6.63922 13.8216 6.77C14.1498 6.91447 14.5272 6.87674 14.822 6.67L14.8707 6.634C15.2842 6.32834 15.8528 6.37535 16.2133 6.745L16.8675 7.417C17.1954 7.75516 17.2366 8.28693 16.965 8.674C16.7522 8.99752 16.7251 9.41325 16.8938 9.763L16.9358 9.863C17.0724 10.2045 17.3681 10.452 17.7216 10.521C18.1837 10.5983 18.5235 11.0069 18.525 11.487V12.6C18.5249 13.0234 18.2263 13.3846 17.8191 13.454C17.4842 13.5199 17.2114 13.7686 17.1083 14.102C17.0628 14.2353 17.0121 14.3687 16.9562 14.502C16.8261 14.795 16.855 15.1364 17.0323 15.402C17.2662 15.7358 17.2299 16.1943 16.9465 16.485L16.0388 17.417C15.7792 17.6832 15.3698 17.7175 15.0716 17.498C14.8226 17.3235 14.5001 17.3043 14.2331 17.448C14.0428 17.5447 13.8475 17.6305 13.6481 17.705C13.3692 17.8037 13.1636 18.0485 13.1099 18.346C13.053 18.7203 12.7401 18.9972 12.3708 19H11.0175Z" stroke="#000000" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> <path fillRule="evenodd" clipRule="evenodd" d="M13.9747 12C13.9747 13.2885 12.9563 14.333 11.7 14.333C10.4437 14.333 9.42533 13.2885 9.42533 12C9.42533 10.7115 10.4437 9.66699 11.7 9.66699C12.9563 9.66699 13.9747 10.7115 13.9747 12Z" stroke="#000000" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    Settings</Link>
                <span onClick={handleLogOut} className={`flex gap-2 font-medium text-lg py-3 px-5 profileSidebarLink logoutButton cursor-pointer ${isLoading ? 'active' : ''}`}>
                    {!isLoading && <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#000000" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#000000" strokeWidth="1.44" strokeLinecap="round"></path> </g></svg>}
                    {isLoading ? <LoadingSVG /> : 'Logout'}</span>
            </div>
            {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} condition={toastCondition} />}
        </div>
    );
}