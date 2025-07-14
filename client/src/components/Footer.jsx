import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function Footer() {
  return (
    <motion.div 
    initial= {{opacity: 0, y: 30}}
    whileInView= {{opacity: 1, y: 0}}
    transition= {{duration: 0.6}}
    className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500 '>
            
            <motion.div 
            initial= {{opacity: 0, y: 20}}
            whileInView= {{opacity: 1, y: 0}}
            transition= {{duration: 0.6, delay: 0.2}}
            className='flex max-sm:flex-col flex-wrap justify-between items-start gap-8 pb-6 pt-6 border-borderColor border-b'>
                <div>
                    <motion.img 
                    initial= {{opacity: 0}}
                    whileInView= {{opacity: 1}}
                    transition= {{duration: 0.5, delay: 0.3}}
                    src={assets.leologo} alt="logo" className='h-8 md:h-9' />

                    <motion.p 
                    initial= {{opacity: 0}}
                    whileInView= {{opacity: 1}}
                    transition= {{duration: 0.5, delay: 0.4}}
                    className='max-w-80 mt-3 text-white text-lg'>
                        Where Leadership meets a Cause.
                    </motion.p>

                    <motion.div 
                    initial= {{opacity: 0}}
                    whileInView= {{opacity: 1}}
                    transition= {{duration: 0.5, delay: 0.5}}
                    className='flex items-center gap-3 mt-6'>
                        <a href="#"><img src={assets.facebook_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.instagram_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.twitter_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"><img src={assets.gmail_logo} className='w-5 h-5' alt="" /></a>                    
                    </motion.div>
                </div>
                
                <motion.div 
                initial= {{opacity: 0, y: 20}}
                whileInView= {{opacity: 1, y: 0}}
                transition= {{duration: 0.6, delay: 0.4}}
                className='flex flex-wrap gap-38 max-sm:gap-10'>
                <div>
                    <h2 className='text-base font-medium text-text1 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-lg'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
        
                <div>
                    <h2 className='text-base font-medium text-text1 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-lg'>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Join Us</a></li>
                        <li><a href="#">Admin Login</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium text-text1 uppercase'>Contact Us</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-lg'>
                        <li>Birla Institute of Technology</li>
                        <li>Mesra, Ranchi</li>
                        <li>Jharkhand, India</li>
                        <li>leoclubbitmesra@gmail.com</li>
                    </ul>
                </div>
                </motion.div>
            </motion.div>

            <motion.div 
            initial= {{opacity: 0, y: 10}}
            whileInView= {{opacity: 1, y: 0}}
            transition= {{duration: 0.6, delay: 0.6}}
            className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} LEO Club - All rights reserved.</p>
                <p>Birla Institute of Technology, Mesra</p>
            </motion.div>

        </motion.div>
  )
}

export default Footer
