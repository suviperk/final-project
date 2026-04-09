function BookingsTable() {
  return (
    <section className="pb-16 grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-12">
        <div className="rounded-3xl bg-white p-8 shadow-soft">

          <h2 className="text-xl font-semibold">Current bookings</h2>

          <p className="mt-1 text-sm text-black/60">
            Public availability overview. Booking owner details are visible after sign-in.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-black/50 uppercase text-xs">
                <tr>
                  <th className="py-3">Resource</th>
                  <th className="py-3">Start</th>
                  <th className="py-3">End</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-2">Room A</td>
                  <td className="py-2">10:00</td>
                  <td className="py-2">11:00</td>
                </tr>
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BookingsTable