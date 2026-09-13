import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center bg-[#66E85D] px-4">
        <h1 className="text-[22vw] leading-none font-black tracking-tight text-black">
          Bptrnds
        </h1>
        <p className="text-xl md:text-4xl font-bold text-[#F4F9F0] mt-6 text-center">
          every heartbeat, tracked.
        </p>
      </main>

      <section className="min-h-screen flex flex-col justify-center items-center bg-[#F4F9F0] px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Know where you stand
        </h2>
        <p className="text-base md:text-xl text-gray-700 max-w-xl mb-10">
          Log your blood pressure over time, see the trend at a glance, and get
          AI-powered guidance to help you stay under 120/80.
        </p>

        <div className="flex gap-4">
          <Link
            href="/signup"
            className="bg-black text-white font-bold px-6 py-3 rounded-lg"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="bg-white border-2 border-black text-black font-bold px-6 py-3 rounded-lg"
          >
            Log in
          </Link>
        </div>
      </section>
    </>
  );
}
