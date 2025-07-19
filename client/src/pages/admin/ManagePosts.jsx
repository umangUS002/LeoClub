import React, { useEffect, useState } from 'react'
import { assets, contentData } from '../../assets/assets'
import Title from '../../components/admin/Title'

function ManagePosts() {

  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    setPosts(contentData)
  }

  const deletePost = async (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className='px-4 pt-10 pb-10 md:px-10 w-full'>

      <Title title="Manage Posts" subTitle="View all listed posts and delete the one you want." />

      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Title</th>
              <th className='p-3 font-medium'>Category</th>
              <th className='p-3 font-medium max-md:hidden'>Date</th>
              <th className='p-3 font-medium'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index} className='border-t border-borderColor'>

                <td className='p-3 flex items-center gap-3'>
                  <img src={post.image} alt="" className='h-12 w-12 aspect-square rounded-md object-cover' />
                  <div className='max-md:hidden'>
                    <p className='font-medium'>{post.title}</p>
                  </div>
                </td>

                <td className='p-3'>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.type === 'Blog'
                      ? 'bg-green-100 text-green-500'
                      : post.type === 'Video'
                        ? 'bg-red-100 text-red-500'
                        : 'bg-purple-100 text-purple-500'
                    }`}>
                    {post.type}
                  </span>                  
                </td>

                <td className='p-3 max-md:hidden'>{post.date}</td>

                <td className='flex items-center p-3'>
                  <img onClick={() => deletePost(post._id)} src={assets.delete_icon} alt="" className='cursor-pointer' />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ManagePosts
