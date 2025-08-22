"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Star } from "lucide-react"; // ⭐ Import star icon
import Image from "next/image";

export default function ReviewSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  const Sliders = [
    { rating: 5, review: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.", name: "Leslie Alexander", avatar: "/images/avatar-default.svg", under_name: "Model" },
    { rating: 4, review: "Pretty good service!", name: "Robert Fox", avatar: "/images/avatar-default.svg", under_name: "Designer" },
    { rating: 3, review: "It was okay!", name: "Jenny Wilson", avatar: "/images/avatar-default.svg", under_name: "Artist" },
    { rating: 1, review: "Not satisfied!", name: "Esther Howard", avatar: "/images/avatar-default.svg", under_name: "Writer" },
  ];

  return (
    <div className="sliderWrapper absolute left-0 w-full py-10 bg-[#f5f5f5] mt-20">
      <div className="flex justify-between mb-5 items-center mx-auto max-w-7xl">
        <h4 className="text-2xl font-medium">What our Customer say's</h4>
        <div className="buttonWrap flex gap-3">
          <button onClick={() => sliderRef.current?.slickPrev()} className="group cursor-pointer bg-white p-2 rounded-lg hover:bg-black transition-all">
            <ArrowLeftIcon className="size-4 text-black group-hover:text-white" />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()} className="group cursor-pointer bg-white p-2 rounded-lg hover:bg-black transition-all">
            <ArrowRightIcon className="size-4 text-black group-hover:text-white" />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings} className="mx-auto max-w-7xl">
        {Sliders.map((item, index) => (
          <div key={index} className="p-5 bg-white rounded-xl shadow-md">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-900 text-lg mb-4 line-clamp-4 min-h-[112px]">{item.review}</p>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <Image src={item.avatar} width={40} height={40} alt={item.name} className="rounded-full" />
              <div>
                <h5 className="font-medium">{item.name}</h5>
                <span className="text-md text-gray-500">{item.under_name}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
