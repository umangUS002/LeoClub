import React from 'react'
import { motion } from 'framer-motion'

function Testimonials() {
    return (

        <div>
            <div className='flex justify-center mt-20'>
                <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] mb-16"
            >
                Testimonials
            </motion.h1>
            </div>
            

            <div class="flex flex-wrap items-center justify-center gap-6 pt-14">
                <div class="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-gray-500 shadow-[0px_4px_15px_0px] shadow-black/5">
                    <div class="flex flex-col items-center px-5 py-4 relative">
                        <img class="h-24 w-24 absolute -top-14 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="userImage1" />
                        <div class="pt-8 text-center">
                            <h1 class="text-lg font-medium text-gray-800">Donald Jackman</h1>
                            <p class="text-gray-800/80">Content Creator</p>
                        </div>
                    </div>
                    <p class="text-white/80 px-6 text-center">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                </div>

                <div class="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-white/5">
                    <div class="flex flex-col items-center px-5 py-4 relative">
                        <img class="h-24 w-24 absolute -top-14 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="userImage2" />
                        <div class="pt-8 text-center">
                            <h1 class="text-lg font-medium text-gray-800">Richard Nelson</h1>
                            <p class="text-gray-800/80">Instagram Influencer</p>
                        </div>
                    </div>
                    <p class="text-gray-500 px-6 text-center">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                    <div class="flex justify-center pt-4">
                    </div>
                </div>

                <div class="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-gray-500 shadow-[0px_4px_15px_0px] shadow-black/5">
                    <div class="flex flex-col items-center px-5 py-4 relative">
                        <img class="h-24 w-24 absolute -top-14 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" alt="userImage3" />
                        <div class="pt-8 text-center">
                            <h1 class="text-lg font-medium text-gray-800">James Washington</h1>
                            <p class="text-gray-800/80">Marketing Manager</p>
                        </div>
                    </div>
                    <p class="text-white/80 px-6 text-center">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                </div>
            </div>

        </div>

    )
}

export default Testimonials
