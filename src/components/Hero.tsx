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

            <p className="uppercase tracking-widest text-sm mb-5 text-[#a89ba1]">
              Hands-on skincare <br></br>facials, chemical peels, microdermabrasion, and
              dermaplaning
            </p>
            <p className="text-[#5a5a5a] text-lg leading-relaxed">
              In our private Plano studio, Estela performs every treatment
              personally, from deep-cleansing facials and professional AHA/BHA
              chemical peels to microdermabrasion and dermaplaning. Each
              appointment begins with a detailed skin analysis, followed by
              careful extractions, tailored exfoliation, and a healing hydration
              mask. Expect honest guidance, evidence-based techniques, and
              simple post-care recommendations to maintain results at home.
            </p>

            <a
              href="/services"
              className="mt-6 font-semibold py-3 px-6 rounded shadow-md transition duration-300 inline-block"
              style={{
                backgroundColor: "#b75d69",
                color: "#ffffff",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#9e4956")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#b75d69")
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
                Book Your Treatment Now
              </span>
            </a>
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
                &quot;Love StelEsthetics!! She is literally the best and does a
                phenomenal job every time I book an appointment with her!!&quot;
              </p>
              <p className="text-right text-pink-600 mt-2 font-semibold">
                - Rushvi
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
