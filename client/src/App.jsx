import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-primary text-text1'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
