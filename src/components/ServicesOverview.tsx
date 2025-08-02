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
              Book your customized appointment online. We&#39;ll send a
              confirmation and follow up by email with everything you need.
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
                Naturally Nourished, Radiant Skin
              </h3>
              <p className="text-sm text-[#4e4e4e] mt-1">
                Restore your skin&#39;s glow with our personalized facials and
                natural skincare treatments. We use organic masks, deep
                hydration, and nutrient-rich ingredients to leave your skin
                refreshed, balanced, and visibly healthier.
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
                This customized facial is designed for all skin types and ages.
                Whether you’re looking to reduce breakouts, improve texture, or
                simply refresh your complexion, we tailor each treatment to your
                unique needs. With deep cleansing, exfoliation, and hydration,
                your skin will feel balanced, clear, and healthy.
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
                Whether you&#39;re dealing with acne, sensitivity, or dullness, our
                customized skincare treatments are tailored to your unique skin
                needs. Using professional-grade products and focused techniques,
                we help restore balance, calm irritation, and improve overall
                clarity for healthier, more resilient skin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
