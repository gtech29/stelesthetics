export default function ContactPage() {
  return (
    <main className="pt-24 px-4 w-full max-w-3xl mx-auto bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <h1 className="text-5xl font-bold text-center text-[#b75d69] dark:text-[#f7cacf] mb-4 font-serif mt-10">
        Get in Touch
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
        Whether you have questions about our skincare treatments or need help
        booking an appointment, were here to help.
      </p>

      <form
        action="https://formspree.io/f/yourFormID" // Replace with your actual Formspree ID
        method="POST"
        className="space-y-8 bg-[#fdfafa] dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors"
      >
        <div>
          <label className="block text-sm font-medium text-[#b75d69] dark:text-[#f7cacf] mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-[#b75d69] focus:border-[#b75d69] placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#b75d69] dark:text-[#f7cacf] mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-[#b75d69] focus:border-[#b75d69] placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#b75d69] dark:text-[#f7cacf] mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-[#b75d69] focus:border-[#b75d69] placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        {/* Optional spam honeypot field */}
        <input
          type="text"
          name="_gotcha"
          style={{ display: "none" }}
          tabIndex={-1}
        />

        <button
          type="submit"
          className="bg-[#b75d69] hover:bg-[#9f4d5b] transition-colors text-white font-semibold py-3 px-6 rounded-full w-full sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
