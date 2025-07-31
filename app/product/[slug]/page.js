import { notFound } from 'next/navigation';

export default function ProductPage({ params: { slug } }) {

  // You can fetch data here with `slug`
  // If not found, return notFound()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Product: {slug}</h1>
    </div>
  );
}