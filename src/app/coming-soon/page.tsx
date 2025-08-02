import Head from "next/head";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <>
      <Head>
        <title>Coming Soon - StelEsthetics Shop</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="description"
          content="Our full skincare collection store is launching soon. Sign up for updates and be the first to access exclusive products!"
        />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#fdf6f8] to-white p-8 mt-20">
        <h1 className="text-5xl font-serif font-bold text-[#8f4f68] mb-6 text-center">
          Store Coming Soon
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-md">
          We&#39;re working hard to launch our full skincare shop. Sign up below to
          be the first to know when it goes live!
        </p>
        {/* <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
          className="w-full max-w-sm space-y-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#b75d69] focus:border-[#b75d69]"
          />
          <button
            type="submit"
            className="w-full bg-[#b75d69] hover:bg-[#9e4956] text-white font-semibold py-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-[#b75d69] focus:ring-offset-2"
          >
            Notify Me
          </button>
        </form> */}
        <Link href="/" className="mt-6 text-[#8f4f68] underline">
          &larr; Back to Home
        </Link>
      </main>
    </>
  );
}
