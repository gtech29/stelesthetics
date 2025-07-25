import Image from "next/image";

export default function ServicesOverview() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        {/* Contact Info Column */}
        <div className="flex flex-col justify-start space-y-6 text-center md:text-left h-full">
          <div className="bg-[#8f4f68] text-white rounded-lg shadow-md px-6 py-5">
            <p className="text-xl font-bold leading-tight">Get in Touch</p>
            <p className="text-sm font-light mt-1">
              Schedule your personalized appointment online and we&#39;ll follow up
              by email.
            </p>
            <a
              href="/services"
              className="inline-block mt-4 bg-white text-[#8f4f68] font-semibold py-2 px-4 rounded hover:bg-[#f0e8ec] transition"
            >
              Schedule Now
            </a>
          </div>

        </div>

        {/* Promo Grid */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Promo 1 */}
            <div>
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/radiant.jpg"
                  alt="Radiant Skin, Naturally Nourished"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-[#8f4f68] font-semibold">
                Radiant Skin, Naturally Nourished
              </h3>
              <p className="text-sm text-[#4e4e4e] mt-1">
                Experience the power of nature with our personalized facials and
                rejuvenating skincare treatments. We use organic masks, deep
                hydration techniques, and nutrient-rich ingredients to restore
                your skin&#39;s natural glow.
              </p>
            </div>

            {/* Promo 2 */}
            <div>
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/Facetune.jpg"
                  alt="Revitalize Your Skin Naturally"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-[#8f4f68] font-semibold">
                Revitalize Your Skin Naturally
              </h3>
              <p className="text-sm text-[#4e4e4e] mt-1">
                A lash lift is like a perm for your natural lashes, giving them
                a longer, lifted, and more defined look without the need for
                extensions. It opens up your eyes, making them appear more awake
                and refreshed.
              </p>
            </div>

            {/* Promo 3 */}
            <div>
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/teen-facial.jpg"
                  alt="Targeted Skincare Solutions"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-[#8f4f68] font-semibold">
                Targeted Skincare Solutions
              </h3>
              <p className="text-sm text-[#4e4e4e] mt-1">
                From acne-prone to sensitive skin, our personalized treatments
                help restore balance and bring out your natural glow. Using a
                blend of professional-grade products and customized regimens, we
                address your skin concerns with precision, helping you achieve
                smooth, healthy, and vibrant skin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
