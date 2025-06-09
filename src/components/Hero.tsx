import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* Hero Background Banner */}
      <section
        className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        {/* White blur overlay at the top */}
        <div className="absolute top-0 left-0 w-full h-24 bg-white bg-opacity-40 backdrop-blur-sm z-10 pointer-events-none" />

        {/* Gradient fade to beige at the bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 z-10"
          style={{
            background: "linear-gradient(to top, #f5f4ee, transparent)",
          }}
        />
      </section>

      {/* Welcome Section */}
      <section
        className="w-full py-16 px-4"
        style={{ backgroundColor: "#f5f4ee" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2
              className="text-4xl font-serif font-bold mb-2"
              style={{ color: "#9c5c75" }}
            >
              StelEsthetics
            </h2>

            <p
              className="uppercase tracking-widest text-sm mb-2"
              style={{ color: "#a89ba1" }}
            >
              Glow. Renew. Radiate.
            </p>

            <p className="text-md mb-4" style={{ color: "#4e4e4e" }}>
              Personalized skincare designed to restore your natural glow.
            </p>
            <p className="text-[#5a5a5a] text-lg leading-relaxed">
              At StelEsthetics, we offer customized skincare and beauty
              treatments designed to help you glow — inside and out. From
              rejuvenating facials to gentle waxing, we&#39;re here to help you feel
              your best in a peaceful, private setting.
            </p>

            <button
              className="mt-6 font-semibold py-3 px-6 rounded shadow-md transition duration-300"
              style={{
                backgroundColor: "#b75d69",
                color: "#ffffff",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#9e4956")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#b75d69")
              }
            >
              <span className="inline-flex items-center gap-2">
                <Image
                  src="/images/calendar-circle-plus-svgrepo-com.svg"
                  alt="Calendar icon"
                  width={24}
                  height={24}
                  className="filter invert brightness-0"
                />
                Book Now
              </span>
            </button>
          </motion.div>

          {/* Image with Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative aspect-[4/3] w-full max-w-md mx-auto"
          >
            <Image
              src="/images/facial1.jpg"
              alt="Relaxing spa scene"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl shadow-lg ring-1 ring-pink-100"
              priority
            />
            {/* Floating Testimonial */}
            <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 text-sm max-w-xs hidden md:block">
              <p className="italic text-gray-700">
                “The best facial I&#39;ve ever had — so relaxing and personalized!”
              </p>
              <p className="text-right text-pink-600 mt-2 font-semibold">
                – Emily R.
              </p>
            </div>
          </motion.div>
        </div>

        
      </section>
    </>
  );
}
