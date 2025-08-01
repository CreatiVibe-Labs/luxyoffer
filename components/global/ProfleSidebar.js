'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function ProfileSidebar() {
    const pathname = usePathname();
    const isProfilePage = pathname.startsWith('/profile/personal-info');
    const isMyOrderPage = pathname.startsWith('/profile/my-orders');
    const isMyWishlistsPage = pathname.startsWith('/profile/my-wishlists');
    const isAddressPage = pathname.startsWith('/profile/manage-adresses');
    const isCardsPage = pathname.startsWith('/profile/saved-cards');
    const isNotificationsPage = pathname.startsWith('/profile/notifications');
    const isSettingPage = pathname.startsWith('/profile/setting');

    return (
        <div className="sidebarContainer bg-white border-gray-300 border-2">
            <div className="profileInfo flex items-center gap-5 px-5 py-5">
                <div className="avatarWrapper rounded-full overflow-hidden bg-gray-200">
                    <Image src="/images/avatar-default.svg" width={80} height={80} className="" alt="avatar" />
                </div>
                <div className="nameWrapper flex flex-col gap-1">
                    <span className="text-md flex ga-2 items-center text-start">
                        Hello
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.1906 3.30834C10.9766 2.94126 10.3527 2.71865 9.71907 3.0808C9.08771 3.44163 8.97667 4.07767 9.187 4.43836L11.7127 8.76947C11.9213 9.12729 11.8004 9.58651 11.4426 9.79517C11.0848 10.0038 10.6255 9.88291 10.4169 9.52509L7.04934 3.75027C6.83528 3.38319 6.21147 3.16058 5.5778 3.52273C4.94644 3.88356 4.8354 4.5196 5.04573 4.88029L8.83422 11.377C9.04288 11.7348 8.92196 12.194 8.56414 12.4027C8.20632 12.6113 7.7471 12.4904 7.53844 12.1326L5.85467 9.24517C5.64061 8.8781 5.0168 8.65548 4.38313 9.01763C3.75177 9.37846 3.64073 10.0145 3.85106 10.3752L7.63955 16.8719C9.24849 19.631 13.2188 20.5263 16.5858 18.6021C19.9505 16.6791 21.1465 12.8376 19.5413 10.0849L17.0156 5.75382C16.8016 5.38675 16.1778 5.16413 15.5441 5.52628C14.9128 5.88711 14.8017 6.52315 15.012 6.88384L16.6958 9.77125C16.7966 9.94406 16.8241 10.15 16.7724 10.3432C16.7206 10.5364 16.5938 10.701 16.4201 10.8002C14.8776 11.6817 14.4049 13.3863 15.0802 14.5443C15.2889 14.9021 15.1679 15.3613 14.8101 15.57C14.4523 15.7787 13.9931 15.6577 13.7844 15.2999C12.8717 13.7347 13.2405 11.8501 14.4194 10.518C14.749 10.1456 14.8618 9.60391 14.6113 9.17433L11.1906 3.30834Z" fill="#fff700"></path> <g opacity="0.5"> <path fillRule="evenodd" clipRule="evenodd" d="M4.41333 17.859C4.77115 17.6504 5.23037 17.7713 5.43903 18.1291C6.26589 19.5471 7.52998 20.6193 9.08886 21.3151C9.46711 21.4839 9.63689 21.9274 9.46807 22.3057C9.29925 22.6839 8.85576 22.8537 8.47751 22.6849C6.666 21.8764 5.1462 20.6046 4.14325 18.8847C3.93459 18.5269 4.05551 18.0677 4.41333 17.859Z" fill="#fff700"></path> <path fillRule="evenodd" clipRule="evenodd" d="M18.9053 3.92194C17.8914 2.88646 16.4454 2.50452 15.0299 2.9073C14.6315 3.02066 14.2166 2.78959 14.1033 2.39119C13.9899 1.99279 14.221 1.57792 14.6194 1.46456C16.5576 0.913072 18.574 1.43959 19.9771 2.8725C20.2669 3.16846 20.2619 3.64331 19.9659 3.9331C19.67 4.2229 19.1951 4.2179 18.9053 3.92194Z" fill="#fff700"></path> </g> </g></svg>
                    </span>
                    <span className="text-2xl font-medium">John Doe</span>
                </div>
            </div>
            <div className="linksWrapper border-t-2 border-gray-300 py-5 flex flex-col">
                <Link href="/profile/personal-info" className={`font-medium text-lg py-3 px-5 profileSidebarLink ${ isProfilePage ? 'active' : '' }`}>Personal Information</Link>
                <Link href="/profile/my-orders" className={`font-medium text-lg py-3 px-5 profileSidebarLink ${ isMyOrderPage ? 'active' : '' }`}>My Order</Link>
                <Link href="#" className={`font-medium text-lg py-3 px-5 profileSidebarLink ${ isMyWishlistsPage ? 'active' : '' }`}>My Wishlists</Link>
                <Link href="#" className={`font-medium text-lg py-3 px-5 profileSidebarLink ${ isAddressPage ? 'active' : '' }`}>Manage Addresses</Link>
                <Link href="#" className={`font-medium text-lg py-3 px-5 profileSidebarLink ${ isCardsPage ? 'active' : '' }`}>Save Cards</Link>
                <Link href="#" className={`font-medium text-lg py-3 px-5 profileSidebarLink ${ isNotificationsPage ? 'active' : '' }`}>Notifications</Link>
                <Link href="#" className={`font-medium text-lg py-3 px-5 profileSidebarLink ${ isSettingPage ? 'active' : '' }`}>Settings</Link>
                <Link href="/logout" className="font-medium text-lg py-3 px-5 profileSidebarLink">Logout</Link>
            </div>
        </div>
    );
}