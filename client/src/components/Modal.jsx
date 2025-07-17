import React from 'react'
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

function Modal({ modalOpen, selectedBlog, setModalOpen }) {
  if (!modalOpen || !selectedBlog) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white/10 pt-10 pb-10 w-[70%] max-w-7xl rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden relative">
        
        {/* Close Button */}
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        {/* Left Image */}
        <div className="md:w-1/2 w-[50%] h-84 md:h-[70%] flex justify-center items-center ">
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-[80%] h-130"
          />
        </div>

        {/* Right Content */}
        <div className="p-0 pr-10 pt-0 md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
          <p className="text-gray-400">{selectedBlog.description}</p>

          <div className='mt-3'>
            <p>Poster Credit : {selectedBlog.workCredit}</p>
            <p>Content Credity : {selectedBlog.contentCredit}</p>
            <p>Date : {selectedBlog.date}</p>
            <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='flex items-center gap-3 mt-3'>
                        <a href={selectedBlog.link}><img src={assets.facebook_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.instagram_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.twitter_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.gmail_logo} className='w-5 h-5' alt="" /></a>
                    </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
