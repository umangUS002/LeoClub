import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import {motion} from 'motion/react'

function Navbar() {
    const navigate = useNavigate()
    const [open ,setOpen] = useState(false)

  return (
    <motion.div 
    initial= {{y: -20, opacity: 0}}
    animate= {{y: 0, opacity: 1}}
    transition= {{duration: 0.5}}
    className={'flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-24 py-3.5 text-gray-600 relative transition-all sticky bg-primary top-0 z-100'}>

        <Link className='flex gap-2 items-center text-text1' to='/'>
            <motion.img whileHover={{scale: 1.05}} src={assets.Logo} alt="" className='h-8 max-sm:h-6'/>
            <motion.p whileHover={{scale: 1.05}} className='font-bold text-4xl max-sm:text-2xl bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]'>LEO</motion.p>
        </Link>

        <div className={`text-text1 max-sm:fixed  max-sm:h-80vh backdrop-blur-xl text-sm max-sm:w-full max-sm:top-15 max-sm:border-t border-text1 right-0 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-8 max-sm:p-4
        transition-all duration-300 z-50 bg-primary/50  ${open ? 'max-sm:translate-x-0 h-screen' : 'max-sm:translate-x-full'}`}>
            {menuLinks.map((link, index) => {
  if (link.homeSection) {
    return (
      <button
        key={index}
        onClick={() => {
          setOpen(false);
          if (window.location.pathname !== "/") {
            navigate("/", { replace: false });
            // Delay scroll to #about after page change
            setTimeout(() => {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
          } else {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={`${open ? "text-3xl mb-7 cursor-pointer" : "cursor-pointer"}`}
      >
        {link.name}
      </button>
    );
  }

  return (
    <Link
      key={index}
      to={link.path}
      className={`${open ? "text-3xl mb-7 cursor-pointer" : ""}`}
      onClick={() => setOpen(false)}
    >
      {link.name}
    </Link>
  );
})}

                

            <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
                <button onClick={()=>navigate('/admin')} className='cursor-pointer px-8 py-2 bg-primary hover:bg-text1/50 transition-all text-primary bg-text1 rounded-lg'>Admin</button>

            </div>
        </div>

            <button className='sm:hidden cursor-pointer ' aria-label='Menu' onClick={()=>setOpen(!open)}>
                <img src={open ? assets.close_icon : assets.menu_icon} alt="" />
            </button>

    </motion.div>
  )
}

export default Navbar
