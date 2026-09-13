import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: readings, error } = await supabase
    .from("bp_readings")
    .select("*")
    .eq("user_id", user.id)
    .order("reading_date", { ascending: true });

  return (
    <main className="min-h-screen bg-[#F4F9F0] px-4 pt-28 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">
          Welcome, {user.email}
        </h1>

        {error && (
          <p className="text-red-600 mb-4">
            Couldn&apos;t load your readings: {error.message}
          </p>
        )}

        <pre className="bg-white rounded-xl p-4 text-xs overflow-auto">
          {JSON.stringify(readings, null, 2)}
        </pre>
      </div>
    </main>
  );
}
