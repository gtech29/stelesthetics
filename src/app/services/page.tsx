// src/app/services/services/page.tsx

export default function servicesPage() {
  return (
    <section className="w-full h-screen">
      <main className="bg-[#fcf8ff] pb-20 pt-16 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <section className="mt-20 text-center">
            <h1 className="text-4xl font-serif font-bold text-[#9c5c75] mb-4">
              Services Menu
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Explore our full range of facials and skincare services.<br></br> Book
              directly below! No pop-ups, no redirects. Just simple scheduling
              and personalized care for healthier, more radiant skin.
            </p>
          </section>
          <iframe
            src="https://app.squarespacescheduling.com/schedule/eaf910b9"
            className="w-full min-h-[720px] border-0"
            allowFullScreen
            loading="lazy"
            title="Facial Booking"
          />

          {/* Embed */}

          {/* Footer Note */}
          <p className="mt-8 text-center text-sm text-gray-400">
            Booking securely through Foursquare.
          </p>
        </div>
      </main>
    </section>
  );
}
