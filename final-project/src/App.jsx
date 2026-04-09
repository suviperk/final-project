import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import StatusCard from './components/Statuscard'
import BookingsTable from './components/Bookings'

function App() {
  return (
     <>
      <Header />

      <main className="mx-auto max-w-7xl px-6">

        <section className="py-16 grid gap-12 lg:grid-cols-12 items-stretch">
          <Hero />
          <StatusCard />
        </section>

        <BookingsTable />

      </main>

      <Footer />
    </>
    
  )
}

export default App;