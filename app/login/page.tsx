export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 p-8">
        
        <h1 className="text-3xl font-bold text-center">
          Welcome back
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Sign in to your BakeFlow account
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white py-3 font-semibold text-black"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
  Don&apos;t have an account?{" "}
  <a
    href="/register"
    className="text-white font-semibold"
  >
    Create account
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