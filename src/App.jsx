// import React from 'react'
// import Navbar from './components/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import Services from './components/Services'
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Home/>
//       <Services/>
//       <Testimonials/>
//       <Footer/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Contact from './components/Contact'

// Full landing page (Home + Services + Testimonials + Footer)
const LandingPage = () => (
  <>
    <Home />
    <Services />
    <Testimonials />
    <Contact/>
    <Footer />
  </>
)

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<><Services /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="/support" element={<><Contact /><Footer /></>} />
      </Routes>
    </div>
  )
}

export default App
