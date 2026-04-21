import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import StatusCard from "./components/Statuscard"
import BookingsTable from "./components/Bookings"
import RegisterPage from "./RegisterPage"

function App() {
  return (
     <Router>
      
      
      <Header />
   
      <main className="flex-grow w-full px-6">

       <Routes>
      <Route path="/" element={
        <>
        <section className="py-16 flex flex-col lg:flex-row gap-12">
          <Hero />
          <StatusCard />
        </section>

        <BookingsTable />
      </>
      } />

      <Route path="/register" element={<RegisterPage />} />

      </Routes>
      </main>

      <Footer />
    </Router>
    
  )
}

export default App;