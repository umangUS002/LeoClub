import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/admin/Title'

function AddEvent() {

  const [image, setImage] = useState(null)
  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: "",
    instaLink: "",
    status: "",
    venue: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmitHandler = async(e) => {
    e.preventDefault()
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title='Add a new Event' subTitle='Fill in details of the event.' />
      <form className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl' onSubmit={onSubmitHandler}>

          <div className='flex items-center gap-2 w-full'>
            <label htmlFor="event-image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
              <input type="file" id='event-image' accept='image/*' hidden onChange={e => setImage(e.target.files[0])}/>
            </label>
            <p className='text-sm text-gray-500'>Upload a thumbnail</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols02 gap-6'>
            <div className='flex flex-col w-full'>
              <label>Name</label>
              <input type="text" placeholder='e.g. World Population Day' required  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={event.name} onChange={e => setEvent({...event, name: e.target.value})}/>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='flex flex-col w-full'>
              <label>Date</label>
              <input type="date" placeholder='12th Feb, 2025' required  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={event.date} onChange={e => setEvent({...event, date: e.target.value})}/>
            </div>
            <div className='flex flex-col w-full'>
              <label>Venue</label>
              <input type="text" placeholder='Mehek' required  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={event.venue} onChange={e => setEvent({...event, venue: e.target.value})}/>
            </div>

            <div className='flex flex-col w-full'>
              <label>Status</label>
              <select onChange={e => setEvent({...event, status: e.target.value})} value={event.status} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select a status</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          {/* event Description */}
          <div className='flex flex-col w-full'>
              <label>Description</label>
              <textarea rows={5} placeholder='' required  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={event.description} onChange={e => setEvent({...event, description: e.target.value})} >
              </textarea>
          </div>

          <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-text1 text-white rounded-md font-medium w-max cursor-pointer'>
            <img src={assets.tick_icon} alt="" />
            {isLoading ? 'Adding' : 'List your event'}
          </button>

      </form>

    </div>
  )
}

export default AddEvent
