import Link from "next/link";
import { FaBreadSlice, FaLeaf, FaUsers } from "react-icons/fa"; // Importing icons

export default function About() {
  return (
    <>
      <section className="bg-bg py-16 px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">About Our Bakery</h1>
      </section>
      <section className="bg-blue-800/10 py-8 px-8">
        <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto">
          At Our Bakery, we believe in creating delicious, high-quality baked goods made with love and the finest ingredients. Our carefully crafted items range from classic pastries to innovative desserts.
        </p>
      </section>
      <section className="bg-bg py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <FaBreadSlice className="mx-auto mb-4 text-gray-800" size={100} />
            <h3 className="text-2xl font-bold text-gray-800">Artisan Baking</h3>
            <p className="text-gray-600">We bake fresh, handmade goods daily with traditional techniques.</p>
          </div>
          <div>
            <FaLeaf className="mx-auto mb-4 text-gray-800" size={100} />
            <h3 className="text-2xl font-bold text-gray-800">Quality Ingredients</h3>
            <p className="text-gray-600">We use only the best ingredients to ensure every bite is delightful.</p>
          </div>
          <div>
            <FaUsers className="mx-auto mb-4 text-gray-800" size={100} />
            <h3 className="text-2xl font-bold text-gray-800">Community Focused</h3>
            <p className="text-gray-600">We are proud to support our local community through our bakery.</p>
          </div>
        </div>
      </section>
      <section className="bg-bg py-8 px-8 text-center">
        <Link href="/products">
          <button className="mt-7 rounded-full bg-gray-800 hover:bg-gray-700 text-white hover:text-cyan-500 text-2xl p-2 px-7 shadow-x-2xl transition-shadow">
            Explore Our Collection
          </button>
        </Link>
      </section>
    </>
  );
}
