import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>


      

    </div>
  )
}

export default App
