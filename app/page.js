import CategoriesSlider from "@/components/products/CategoriesSlider";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className="wrapper mx-auto max-w-7xl items-center justify-between px-4">
      <CategoriesSlider />

      <div className="heading text-3xl font-medium text-center mt-14">
        Our Bestseller
      </div>
      <Products max="8"/>
    </div>
  )
}