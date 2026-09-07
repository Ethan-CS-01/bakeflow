export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Create your account</h1>

          <p className="mt-2 text-gray-400">
            Start managing your bakery with BakeFlow
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white px-4 py-3 font-semibold text-black"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-white">
            Sign in
          </a>
        </p>

        <a
          href="/"
          className="mt-6 block text-center text-sm text-gray-400"
        >
          ← Back to BakeFlow
        </a>
      </div>
    </main>
  );
}