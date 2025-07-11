"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import type { FC } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
}

const fetchWatches = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get<{ products: Product[] }>(
      "https://dummyjson.com/products/search?q=watch"
    );
    return data.products.slice(0, 6);
  } catch (error) {
    console.error("Failed to fetch watches:", error);
    return [];
  }
};

const LatestProductsSection: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const load = async () => {
      const watches = await fetchWatches();
      setProducts(watches);
    };
    load();
  }, []);

  return (
    <section className="py-16 px-4 text-center bg-gradient-to-b from-white to-[#F0F4F8]">
      <p className="text-sm text-blue-500 uppercase mb-2 tracking-wide">
        Find your favourite smart watch
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Latest Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product) => {
          const discountedPrice = (
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2);

          return (
            <div key={product.id} className="bg-transparent rounded-xl overflow-hidden transition w-[314px]">
              <div className="relative bg-[#F6F6F6] ">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="object-contain w-[full] h-[317px] p-6"
                />

                <div className="absolute top-3 right-3 flex flex-col gap-3 items-end">
                  <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                    <FaShoppingCart />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                    <FaHeart />
                  </button>
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="text-base font-semibold mb-1 truncate">{product.title}</h3>
                <div className="text-yellow-400 text-sm mb-1">
                  {"★".repeat(Math.round(product.rating))}
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <span className="text-gray-400 line-through text-sm">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    ${discountedPrice}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition">
        View More
      </button>
    </section>
  );
};

export default LatestProductsSection;
