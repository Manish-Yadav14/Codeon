import { Navbar } from "../components/navigation/Navbar"
import { Hero } from "../components/sections/Hero"
import { Features } from "../components/sections/Features"
// import { Stats } from "./components/sections/Stats"
// import { Testimonials } from "./components/sections/Testimonials"
import { Technologies } from "../components/sections/Technologies"
import Footer from "../components/sections/Footer"

function Homepage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />  
        {/* <Stats /> */}
        <Technologies/>
        {/* <Testimonials /> */}
        <Footer/>
      </main>
    </div>
  )
}

export default Homepage