export default function ContactPage() {
  return (
    <main className="py-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-pink-700 mt-20 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Questions about treatments, products, or booking? Reach out using the
        form below.
      </p>

      <form
        action="https://formspree.io/f/yourFormID" // ← Replace with actual Formspree ID
        method="POST"
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
