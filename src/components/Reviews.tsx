"use client";

import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-[#f9f7f4] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#8f4f68] mb-4">
          Your Skin, Their Stories
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Real reviews from real people. Discover how our personalized care has
          helped clients glow with confidence.
        </p>

        <div
          className="elfsight-app-ec314575-88d0-4a86-b3ca-ffa4f8327cce w-full"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
