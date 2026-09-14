import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-[100dvh] flex flex-col justify-start items-center bg-[#66E85D] px-4 pt-24 md:justify-center md:pt-4">
        <h1
          className="text-[27vw] leading-none font-black tracking-tight text-black mt-45"
          style={{ fontSize: "clamp(3rem, 20vw, 22vw" }}
        >
          Bptrnds
        </h1>
        <p className="text-white mt-10 text-xl ">
          {" "}
          track your health, thats the better wealth
        </p>
      </main>

      <section className="min-h-[100dvh] flex flex-col justify-center items-center bg-[#F4F9F0] px-4 text-center">
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
