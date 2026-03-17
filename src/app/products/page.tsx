"use client";

import Image from "next/image";
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
    title: "Rose-Ease Relief Cream",
    description:
      "Targeted treatment formulated to calm redness and irritation associated with rosacea and other reactive or sensitive skin conditions.",
    img: "/images/Rose-EaseRelief-Cream.jpg",
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
    <main className="relative bg-gradient-to-b from-[#fdf6f8] to-white py-24 px-4 mt-20 min-h-screen">
      {/* 1. Hero Section with the Matched Button */}
      <section className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
          Official Circadia Retailer
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          As an authorized esthetician, I exclusively recommend Circadia
          skincare. You can browse and purchase your customized regimen directly
          through my secure client portal.
        </p>

        {/* Updated Button Styling */}
        <a
          href="https://www.circadiaretailer.com/956221"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#b75d69] hover:bg-[#9e4956] text-white py-2 px-4 rounded-full transition"
        >
          Shop My Circadia Store
        </a>
      </section>

      {/* 2. The Product Slider */}
      <section className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h2 className="text-2xl font-serif text-center text-gray-800 mb-8">
          Featured Favorites
        </h2>

        <Slider {...settings}>
          {randomizedProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center outline-none"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm px-4">
                {product.description}
              </p>
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
}
