"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4">
      <Link href="/" className="text-xl font-black text-black">
        <img
          src="https://rhxznjscewfdfthibfvw.supabase.co/storage/v1/object/public/Assets/Bplogo.svg"
          alt="Bptrnds logo"
          className="h-9 w-auto"
        />
      </Link>

      <nav className="flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-sm">
        {user ? (
          <>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-full text-sm font-semibold text-black hover:bg-black/5"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full text-sm font-semibold bg-black text-white"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="px-4 py-2 rounded-full text-sm font-semibold text-black hover:bg-black/5"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-full text-sm font-semibold bg-black text-white"
            >
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
