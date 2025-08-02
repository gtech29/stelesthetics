"use client";

import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _gotcha: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <Head>
        <title>Contact StelEsthetics - Book A Facial or Ask a Question</title>
        <meta
          name="description"
          content="Get in touch with StelEsthetics for personalized skincare treatments, facials, waxing and more. Book online or ask questions via our secure contact form."
        />
      </Head>
      <main className="pt-24 pb-20 px-4 w-full max-w-3xl mx-auto bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <h1 className="text-5xl font-bold text-center text-[#b75d69] dark:text-[#f7cacf] mb-4 font-serif mt-10">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
          Whether you have questions about our skincare treatments or need help
          booking an appointment, we&#39;re here to help.
        </p>

        <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
          noValidate
          className="space-y-8 bg-[#fdfafa] dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors"
        >
          {/* Honeypot field: bots will fill this*/}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            value={formData._gotcha}
            onChange={handleChange}
            className="hidden"
          />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#b75d69] dark:text-[#f7cacf] mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-[#b75d69] focus:border-[#b75d69] placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#b75d69] dark:text-[#f7cacf] mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-[#b75d69] focus:border-[#b75d69] placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#b75d69] dark:text-[#f7cacf] mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={1000}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-[#b75d69] focus:border-[#b75d69] placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="How can we help you?"
            />
          </div>

          {/* reCAPTCHA placeholder */}
          <div id="recaptcha-placeholder" className="my-4">
            {/* TODO: Integrate reCAPTCHA v2 or v3 here to prevent spam */}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#b75d69] hover:bg-[#9f4d5b] transition-colors text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b75d69]"
            aria-label="Send message via secure contact form"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
