"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToDisclaimer, setAgreedToDisclaimer] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#66E85D] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-black">Sign up</h1>

        <label className="block text-sm font-semibold mb-1 text-black">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 text-black"
        />

        <label className="block text-sm font-semibold mb-1 text-black">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 text-black"
        />

        <label className="block text-sm font-semibold mb-1 text-black">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 text-black"
        />

        <label className="block text-sm font-semibold mb-1 text-black">
          Confirm password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          minLength={6}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 text-black"
        />

        <label className="flex items-start gap-2 mb-4 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={agreedToDisclaimer}
            onChange={(e) => setAgreedToDisclaimer(e.target.checked)}
            className="mt-1"
          />
          <span>
            I understand Bptrnds provides educational guidance only, not medical
            diagnoses, and I should consult a healthcare provider for medical
            advice.
          </span>
        </label>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading || !agreedToDisclaimer}
          className="w-full bg-[#66E85D] text-black font-bold py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing up..." : "Sign up"}
        </button>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-black underline">
            Log in
          </Link>
        </p>
      </form>
    </main>
  );
}
