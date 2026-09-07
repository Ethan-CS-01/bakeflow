export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">BakeFlow</h1>
        <p className="mt-4 text-xl text-gray-400">
          AI-powered bakery management SaaS
        </p>

        <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-black">
          Get Started
        </button>
      </div>
    </main>
  );
}