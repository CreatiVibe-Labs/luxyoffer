'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Toast from '@/components/global/Toast';

export default function Products(max) {

  const [showToast, setShowToast] = useState(false);

  const Product = [
    {
      id: "1",
      slug: "premium-slim-fit-polo-shirt",
      image: "/images/product1.png",
      title: "Premium Slim Fit Polo Shirt",
      description:
        "Stylish and modern polo made from breathable fabric for all-day wear.",
      price: "29.00",
      salePrice: "23.00",
    },
    {
      id: "8",
      slug: "vintage-washed-denim-shirt",
      image: "/images/product2.png",
      title: "Vintage Washed Denim Shirt",
      description:
        "Classic denim shirt with a faded wash for a rugged, timeless look.",
      price: "32.00",
      salePrice: "30.00",
    },
    {
      id: "3",
      slug: "casual-oversized-graphic-tee",
      image: "/images/product3.png",
      title: "Casual Oversized Graphic Tee",
      description:
        "Bold graphic print tee with an oversized fit for a relaxed vibe.",
      price: "24.00",
      salePrice: "20.99",
    },
    {
      id: "4",
      slug: "long-sleeve-henley-shirt",
      image: "/images/product4.png",
      title: "Long Sleeve Henley Shirt",
      description:
        "Lightweight and comfortable Henley ideal for layering in any season.",
      price: "29.99",
      salePrice: "19.99",
    },
    {
      id: "5",
      slug: "formal-white-dress-shirt",
      image: "/images/product5.png",
      title: "Formal White Dress Shirt",
      description:
        "Crisp, wrinkle-resistant white shirt tailored for business or events.",
      price: "26.99",
      salePrice: "22.99",
    },
    {
      id: "6",
      slug: "soft-flannel-checked-shirt",
      image: "/images/product6.png",
      title: "Soft Flannel Checked Shirt",
      description:
        "Warm flannel shirt with a traditional checkered pattern for cold days.",
      price: "30.00",
      salePrice: "27.00",
    },
    {
      id: "7",
      slug: "stretch-activewear-t-shirt",
      image: "/images/product7.png",
      title: "Stretch Activewear T-Shirt",
      description:
        "Flexible, moisture-wicking tee designed for workouts or casual wear.",
      price: "25.99",
      salePrice: "22.99",
    },
    {
      id: "2",
      slug: "linen-short-sleeve-button-up",
      image: "/images/product8.png",
      title: "Linen Short Sleeve Button-Up",
      description:
        "Breezy and lightweight linen shirt perfect for summer outings.",
      price: "29.00",
      salePrice: "",
    },
  ];

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000); // auto close
  };

  return (
    <div className="productsWrapper grid grid-cols-2 md:grid-cols-4 gap-3">
      {Product.map((item, index) => (
        <div key={index} className=" rounded-md productWrap overflow-hidden productBox flex flex-col mt-10 group">
          <div className="relative productImage w-full h-96 bg-gray-50 text-center flex justify-center items-center">
            <Image src={item.image} width={1000} height={1000} alt={item.title} className="w-auto h-72" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 addToCartWrapper absolute w-full h-full bg-black/20 flex justify-end">
              <div className="actionWrapper flex flex-col gap-2 mt-2 mr-2">
                <Link href="#" onClick={handleShowToast}>
                  <svg className="rounded-full bg-white p-2" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </Link>
                <Link href="#">
                  <svg fill="#000000" className="rounded-full bg-white p-2" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1,8A1,1,0,0,1,2,7H9.586L7.293,4.707A1,1,0,1,1,8.707,3.293l4,4a1,1,0,0,1,0,1.414l-4,4a1,1,0,1,1-1.414-1.414L9.586,9H2A1,1,0,0,1,1,8Zm21,7H14.414l2.293-2.293a1,1,0,0,0-1.414-1.414l-4,4a1,1,0,0,0,0,1.414l4,4a1,1,0,0,0,1.414-1.414L14.414,17H22a1,1,0,0,0,0-2Z"></path></g></svg>
                </Link>
                <Link href="#">
                  <svg  className="rounded-full bg-white p-2" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </Link>
              </div>
              <div className="cartButtonWrapper">
                <Link
                  className="absolute z-50 bottom-0 left-0 right-0 bg-white m-5 rounded-md p-3 text-center font-medium"
                  href="#"
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="productMeta">
            <Link href="#" className="flex flex-col gap-2 mt-2">
              <p className="productTitle font-semibold line-clamp-1">{item.title}</p>
              <p className="productDescription line-clamp-2">{item.description}</p>
              <span className="priceWrap flex gap-2">
                {item.salePrice && <p className="salePrice font-semibold">
                  ${item.salePrice}
                </p>}
                <p className={`originalPrice ${item.salePrice ? 'line-through text-gray-500' : ''}`}>
                  ${item.price}
                </p>
              </span>
            </Link>
          </div>
        </div>
      ))}
      {showToast && (
        <Toast message="This is a Tailwind CSS toast!" onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}
