"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate account creation (replace with real logic later)
    if (form.username && form.password) {
      // TODO: Call your backend API or database logic here
      console.log("User created:", form.username);
      router.push("/auth/signin");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdf6f8] to-white flex items-center justify-center px-4 py-20">
      <div className="bg-white shadow-xl rounded-3xl max-w-md w-full p-10 mt-11">
        <h1 className="text-3xl font-serif text-center text-[#b75d69] font-bold mb-6">
          Create an Account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join the StelEsthetics Club and unlock your exclusive skincare
          experience.
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-600 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b75d69]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b75d69]"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b75d69]"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#b75d69] hover:bg-[#9e4956] text-white font-semibold py-2.5 rounded-lg shadow-md transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already a member?{" "}
          <Link
            href="/auth/signin"
            className="text-[#b75d69] font-semibold hover:underline"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </main>
  );
}
