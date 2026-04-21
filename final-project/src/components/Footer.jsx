function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="w-full px-6 py-10">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Booking System" className="h-8 w-8 opacity-90" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">Booking System</p>
              <p className="text-xs text-white/60">
                Secure resource booking
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-3 text-sm text-white/70">
            <a href="/privacypolicy"
              className="rounded-full px-3 py-1 hover:bg-white/10 hover:text-white transition cursor-not-allowed pointer-events-none">
              Privacy
            </a>
            <span className="text-white/30">|</span>
            <a href="/terms"
              className="rounded-full px-3 py-1 hover:bg-white/10 hover:text-white transition cursor-not-allowed pointer-events-none">
              Terms
            </a>
            <span className="text-white/30">|</span>
            <a href="/cookiepolicy"
              className="rounded-full px-3 py-1 hover:bg-white/10 hover:text-white transition cursor-not-allowed pointer-events-none">
              Cookies
            </a>
          </nav>

        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/50">
          © {new Date().getFullYear()} Ville Heikkiniemi. All rights reserved. Source code licensed under the MIT License.
        </div>

      </div>
    </footer>
  )
}

export default Footer