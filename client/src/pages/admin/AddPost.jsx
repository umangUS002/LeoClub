import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import Title from '../../components/admin/Title'

function AddPost() {

  const [image, setImage] = useState(null)
  const [post, setPost] = useState({
    title: "",
    description: "",
    date: "",
    workCredit: "",
    contentCredit: "",
    type: "",
    instaLink: "",
    fbLink: "",
    linkedinLink: ""
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmitHandler = async(e) => {
    e.preventDefault()
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title='Add a new Post' subTitle='Fill in details to list a new post, either Blog, Video or Carousel.' />
      <form className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl' onSubmit={onSubmitHandler}>

          <div className='flex items-center gap-2 w-full'>
            <label htmlFor="post-image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
              <input type="file" id='post-image' accept='image/*' hidden onChange={e => setImage(e.target.files[0])}/>
            </label>
            <p className='text-sm text-gray-500'>Upload a thumbnail</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols02 gap-6'>
            <div className='flex flex-col w-full'>
              <label>Title</label>
              <input type="text" placeholder='e.g. World Population Day' required  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='flex flex-col w-full'>
              <label>Date</label>
              <input type="date" placeholder='12th Feb, 2025' required  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={post.date} onChange={e => setPost({...post, date: e.target.value})}/>
            </div>
            <div className='flex flex-col w-full'>
              <label>Work Credit</label>
              <input type="text" placeholder='' required  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={post.workCredit} onChange={e => setPost({...post, workCredit: e.target.value})}/>
            </div>
            <div className='flex flex-col w-full'>
              <label>Content Credit</label>
              <input type="text" placeholder='' required  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={post.contentCredit} onChange={e => setPost({...post, contentCredit: e.target.value})}/>
            </div>

            <div className='flex flex-col w-full'>
              <label>Type</label>
              <select onChange={e => setPost({...post, Type: e.target.value})} value={post.type} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select a type</option>
                <option value="Blog">Blog</option>
                <option value="Video">Video</option>
                <option value="Post">Post</option>
              </select>
            </div>
          </div>

          {/* post Description */}
          <div className='flex flex-col w-full'>
              <label>Description</label>
              <textarea rows={5} placeholder='' required  className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={post.description} onChange={e => setPost({...post, description: e.target.value})} >
              </textarea>
          </div>

          <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-text1 text-white rounded-md font-medium w-max cursor-pointer'>
            <img src={assets.tick_icon} alt="" />
            {isLoading ? 'Adding' : 'List your Post'}
          </button>

      </form>

    </div>
  )
}

export default AddPost
