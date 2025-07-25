"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const productList = [
  {
    title: "Hydrating Cleanser",
    description: "Gently removes impurities without stripping the skin.",
    img: "/images/aquaporin.jpg",
  },
  {
    title: "Brightening Serum",
    description:
      "Targets dullness and uneven tone with gentle botanical actives.",
    img: "/images/blueberry.jpg",
  },
  {
    title: "Soothing Moisturizer",
    description: "Restores hydration and calms redness with licorice root.",
    img: "/images/licorice.jpg",
  },
  {
    title: "Mineral SPF 30",
    description: "Lightweight, broad-spectrum sun protection for daily use.",
    img: "/images/sunscreen.jpg",
  },
];

function shuffleArray(arr: typeof productList) {
  return arr.sort(() => Math.random() - 0.5);
}

export default function ProductsPage() {
  const [randomizedProducts, setRandomizedProducts] = useState(productList);

  useEffect(() => {
    setRandomizedProducts(shuffleArray([...productList]));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <main className="relative bg-gradient-to-b from-[#fdf6f8] to-white py-24 px-4 mt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-center text-[#8f4f68] mb-4">
          Curated Favorites
        </h1>
        <p className="text-center text-gray-500 text-sm sm:text-base max-w-xl mx-auto mb-6">
          Members receive access to exclusive product lines, professional
          pricing, and early access to new releases. Sign in to explore the full
          collection.
        </p>

        <div className="text-center mb-12">
          <Link
            href="/products/full"
            className="inline-block bg-[#b75d69] hover:bg-[#9e4956] text-white font-semibold py-3 px-8 rounded-full shadow-md transition"
          >
            Unlock the Full Collection
          </Link>
        </div>

        <Slider {...settings}>
          {randomizedProducts.map((product, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative w-full h-72 flex items-center justify-center">
                  <div className="relative w-40 sm:w-48 md:w-52 h-full">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif text-[#8f4f68] font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}
