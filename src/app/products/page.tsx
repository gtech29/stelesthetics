import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <main className="relative bg-gradient-to-b from-[#fdf6f8] to-white py-24 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-center text-[#8f4f68] mt-2.5 mb-2">
          Curated Favorites
        </h1>
        <p className="text-center text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-3">
          Members receive access to exclusive product lines, professional
          pricing, and early access to new releases. Sign in to explore the full
          collection.
        </p>

        {/* CTA */}
        <div className="text-center mt-5 mb-12">
          <Link
            href="/products/full"
            className="inline-block bg-[#b75d69] hover:bg-[#9e4956] text-white font-semibold py-3 px-8 rounded-full shadow-md transition"
          >
            Unlock the Full Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Product Card */}
          {[
            {
              title: "Hydrating Cleanser",
              description:
                "Gently removes impurities without stripping the skin.",
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
              description:
                "Restores hydration and calms redness with licorice root.",
              img: "/images/licorice.jpg",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden group"
            >
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
          ))}
        </div>
      </div>
    </main>
  );
}
