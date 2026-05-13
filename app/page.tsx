import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      <Navbar />

      <section className="flex h-screen items-center justify-center">
        <div className="text-center">
          
          <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
            CAP AU LARGE
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            Premium Coastal Lifestyle
          </p>

        </div>
      </section>

    </main>
  );
}