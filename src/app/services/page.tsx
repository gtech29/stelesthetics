// src/app/services/facials/page.tsx

export default function FacialsPage() {
  return (
    <main className="bg-[#fcf8ff] pb-20 pt-28 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="mt-20 text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-700 mb-4">
            Services Menu
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Book your favorite facial directly below—no pop-ups, no
            redirections. Just smooth skin and a smoother experience.
          </p>
        </section>

        {/* Embed */}
        <section className="w-full h-screen">
          <iframe
            src="https://app.squarespacescheduling.com/schedule/eaf910b9" // replace this
            className="w-full min-h-[720px] border-0"
            allowFullScreen
            loading="lazy"
            title="Facial Booking"
          />
        </section>

        {/* Footer Note */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Booking securely through Foursquare.
        </p>
      </div>
    </main>
  );
}
