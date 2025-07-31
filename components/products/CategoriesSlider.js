"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Important: disable built-in arrows,
    responsive: [
      {
        breakpoint: 1024, // below 1024px (e.g., tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // below 768px (e.g., mobile)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Sliders = [
    {
      title: "Casual Wear",
      image: "/images/casual.png",
      button: "Casual Wear",
      link: "",
    },
    {
      title: "Western Wear",
      image: "/images/western.png",
      button: "Western Wear",
      link: "",
    },
    {
      title: "Ethnik Wear",
      image: "/images/ethnik.png",
      button: "Ethnik Wear",
      link: "",
    },
    {
      title: "Kids Wear",
      image: "/images/kids.png",
      button: "Kids Wear",
      link: "",
    },
  ];

  return (
    <div className="sliderWrapper pt-10">
      <div className="flex justify-between mb-5 items-center">
        <div className="headingWrap">
          <h4 className="text-2xl font-medium">Shop by Categories</h4>
        </div>
        <div className="buttonWrap flex gap-3">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="group cursor-pointer bg-custom-grey bg-custom-grey-hover p-2 rounded-lg hover:bg-black transition-all"
          >
            <ArrowLeftIcon className="size-4 text-black group-hover:text-white" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="group cursor-pointer bg-custom-grey bg-custom-grey-hover p-2 rounded-lg hover:bg-black transition-all"
          >
            <ArrowRightIcon className="size-4 text-black group-hover:text-white" />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {Sliders.map((item, index) => (
          <div key={index}>
            <div className="bg-custom-grey rounded-md relative flex flex-right overflow-hidden">
              <span className="background-text absolute top-0 left-1 text-custom-grey text-8xl font-bold w-4xl">
                {item.title}
              </span>
              <Image
                src={item.image}
                width={1000}
                height={1000}
                alt="image"
                className="categorySliderImage z-10"
              />
              <Link
                className="absolute z-50 bottom-0 left-0 right-0 bg-white m-5 rounded-md p-3 text-center font-medium"
                href={item.link}
              >
                {item.button}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
