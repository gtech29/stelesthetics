import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // ✅ fixed import path
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function FullProductsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  const products = [
    {
      title: "Hydrating Cleanser",
      description: "Gently removes impurities without stripping the skin.",
      img: "/images/aquaporin.jpg",
    },
    {
      title: "Brightening Serum",
      description: "Targets dullness and uneven tone with botanical actives.",
      img: "/images/blueberry.jpg",
    },
    {
      title: "Soothing Moisturizer",
      description: "Restores hydration and calms redness with licorice root.",
      img: "/images/licorice.jpg",
    },
    {
      title: "Mineral SPF 30",
      description: "Daily sun protection with a soft matte finish.",
      img: "/images/sunscreen.jpg",
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif text-[#b75d69] text-center mb-8">
          Full Product Collection
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Welcome back, {session.user?.name}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#8f4f68]">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
