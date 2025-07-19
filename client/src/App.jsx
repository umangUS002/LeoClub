import { useState } from 'react'
import './index.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Events from './pages/Events'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Posts from './pages/Posts'
import Layout from './pages/admin/Layout'
import AddEvent from './pages/admin/AddEvent'
import AddPost from './pages/admin/AddPost'
import ManageEvents from './pages/admin/ManageEvents'
import ManagePosts from './pages/admin/ManagePosts'
import { AppContext, useAppContext } from './context/AppContext'
import Login from './components/Login'

function App() {

  const {admin} = useAppContext(AppContext)
  const isOwnerPath = useLocation().pathname.startsWith('/admin')

  return (
    <div className='bg-primary text-text1'>
      {!isOwnerPath && <Navbar/>}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/team' element={<Team />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/admin' element={admin ? <Layout/> : <Login/>}>
            <Route index element={<ManageEvents/>} />
            <Route path='add-event' element={<AddEvent/>} />
            <Route path='add-post' element={<AddPost/>} />
            <Route path='manage-posts' element={<ManagePosts/>} />
        </Route>      
      </Routes>

      {!isOwnerPath && <Footer/>}
    </div>
  )
}

export default App
