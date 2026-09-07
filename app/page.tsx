export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
  <div className="text-2xl font-bold">
    BakeFlow
  </div>

  <div className="flex items-center gap-8 text-sm text-gray-300">
    <span>Features</span>
    <span>Pricing</span>
    <span>About</span>

    <a
  href="/login"
  className="rounded-lg bg-white px-4 py-2 font-semibold text-black"
>
  Sign In
</a>
  </div>
</nav>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          Smart Bakery Management
        </p>

        <h1 className="text-5xl font-bold sm:text-7xl">
          Run your bakery smarter with BakeFlow
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Manage orders, inventory, products, customers and sales in one place,
          with AI-powered insights to help your bakery grow.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black">
            Get Started
          </button>

          <button className="rounded-lg border border-gray-700 px-6 py-3 font-semibold text-white">
            View Features
          </button>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
  <div className="text-center">
    <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
      Features
    </p>

    <h2 className="mt-4 text-4xl font-bold">
      Everything your bakery needs
    </h2>

    <p className="mt-4 text-gray-400">
      Manage your bakery from one simple dashboard.
    </p>
  </div>

  <div className="mt-12 grid gap-6 md:grid-cols-3">
    <div className="rounded-2xl border border-gray-800 p-6">
      <h3 className="text-xl font-semibold">
        Order Management
      </h3>

      <p className="mt-3 text-gray-400">
        Track customer orders and manage their status in real time.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-800 p-6">
      <h3 className="text-xl font-semibold">
        Smart Inventory
      </h3>

      <p className="mt-3 text-gray-400">
        Monitor ingredients and receive alerts when stock is running low.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-800 p-6">
      <h3 className="text-xl font-semibold">
        AI Insights
      </h3>

      <p className="mt-3 text-gray-400">
        Use AI to understand sales trends and make smarter business decisions.
      </p>
    </div>
  </div>
</section>
    </main>
  );
}