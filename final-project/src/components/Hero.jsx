function Hero() {
  return (
    <div className="lg:col-span-7">
      <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1 text-sm font-semibold text-brand-green">
        Privacy-First Availability Overview
      </span>

      <h1 className="mt-4 text-4xl font-semibold leading-tight">
        Simplify Resource Booking – Securely
      </h1>

      <p className="mt-4 text-lg max-w-2xl text-black/70">
        Simplify resource and user management in one secure system. Show availability publicly without exposing personal details.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <a href="/login" className="w-full rounded-2xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-dark/80 text-center">
          Get started
        </a>

        <a href="/bookings" className="w-full rounded-2xl border border-brand-blue px-6 py-3 text-sm font-semibold hover:bg-brand-dark/80 hover:text-white text-center">
          View bookings
        </a>
      </div>
    </div>
  )
}

export default Hero