import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import EventsScroller from '../components/Events'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <EventsScroller/>
      <Testimonials/>
      <Blogs/>
    </div>
  )
}

export default Home
