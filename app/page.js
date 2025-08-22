import ReviewSlider from "@/components/global/ReviewSlider";
import CategoriesSlider from "@/components/products/CategoriesSlider";
import Products from "@/components/products/Products";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper mx-auto max-w-7xl items-center justify-between px-4">
      <CategoriesSlider />

      <div className="heading text-3xl font-medium text-center mt-14 flex justify-between items-center">
        Our Bestseller
        <Link href="#" className="!text-lg bg-black rounded-md text-white px-5 py-2 hover:bg-white hover:text-black border transition-all">View More</Link>
      </div>
      <Products max="8" />


      <div className="heading text-3xl font-medium text-center mt-14 flex justify-between items-center">
        Mens Products
        <Link href="#" className="!text-lg bg-black rounded-md text-white px-5 py-2 hover:bg-white hover:text-black border transition-all">View More</Link>
      </div>
      <Products max="8" />

      <div className="heading text-3xl font-medium text-center mt-14 flex justify-between items-center">
        Womens Products
        <Link href="#" className="!text-lg bg-black rounded-md text-white px-5 py-2 hover:bg-white hover:text-black border transition-all">View More</Link>
      </div>
      <Products max="8" />

      <ReviewSlider />
    </div>
  )
}