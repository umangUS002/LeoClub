import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

function LeftSideBar() {
  return (
    <div className='flex flex-col border-r border-text1 min-h-full pt-3'>

      <NavLink end={true} to='/admin' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-text1/10 border-r-4 border-text1"}`}>
        <img src={assets.list_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Manage Events</p>
      </NavLink>

      <NavLink end={true} to='/admin/manage-posts' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-text1/10 border-r-4 border-text1"}`}>
        <img src={assets.list_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Manage Posts</p>
      </NavLink>

      <NavLink end={true} to='/admin/add-event' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-text1/10 border-r-4 border-text1"}`}>
        <img src={assets.add_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Add Event</p>
      </NavLink>

      <NavLink end={true} to='/admin/add-post' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-text1/10 border-r-4 border-text1"}`}>
        <img src={assets.add_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Add Post</p>
      </NavLink>

    </div>
  )
}

export default LeftSideBar
