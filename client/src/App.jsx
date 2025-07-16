import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Events from './pages/Events'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Posts from './pages/Posts'

function App() {
  return (
    <div className='bg-primary text-text1'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/team' element={<Team />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
