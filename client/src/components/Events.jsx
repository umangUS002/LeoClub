import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets"; // Replace with your actual assets
import { motion } from "framer-motion";

// Replace with your actual images
const eventImages = [
  assets.eventposter,
  assets.eventposter,
  assets.eventposter,
  assets.eventposter,
  assets.eventposter,
  assets.eventposter,
  assets.eventposter,
];



const EventsScroller = () => {
  const scrollRefL = useRef(null); // Top row (left to right)
  const scrollRefLn = useRef(null); // Bottom row (right to left)

  // Left to Right Scroll
  useEffect(() => {
    const el = scrollRefL.current;
    if (!el) return;
    let req;

    const scroll = () => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      req = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(req);
  }, []);

  // Right to Left Scroll (delayed to ensure DOM is ready)
  useEffect(() => {
    const el = scrollRefLn.current;
    if (!el) return;
    let req;

    const scroll = () => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      req = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(req);
  }, []);
  return (
    <div className="bg-primary py-10 md:px-25">
      <div className="relative bg-primary py-20  flex flex-col md:flex-row items-center bg-gradient-to-l from-text1/40 to-transparent">
        {/* Left Text Section */}
        <div className="py-10 w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:items-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] mb-6"
          >
            Events
          </motion.h1>
          <p className="text-white/80 text-lg max-w-md flex text-center">
            Explore our club events, workshops, and speaker sessions. Join us
            for engaging learning experiences and networking opportunities.
          </p>
          <button className="mt-6 px-6 py-3 bg-text1 hover:bg-text1/30 text-white rounded-xl shadow-md transition-all duration-300">
            Show More
          </button>
        </div>

        {/* Right Auto-Scrolling Thumbnails */}
        <div className="w-full md:w-1/2 px-10 mt-10 md:mt-0 relative space-y-6">
          {/* Top: Left to Right */}
          <div
            ref={scrollRefL}
            className="overflow-hidden whitespace-nowrap scroll-smooth"
          >
            <motion.div 
                initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 w-max">
              {[...eventImages, ...eventImages].map((img, idx) => (
                <img
                  key={`top-${idx}`}
                  src={img}
                  alt={`event-top-${idx}`}
                  className="h-40 min-w-[300px] min-h-[200px] rounded-xl shadow-lg object-cover transition-all duration-300 hover:scale-105"
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom: Right to Left */}
          <div
            ref={scrollRefLn}
            className="overflow-hidden whitespace-nowrap scroll-smooth"
          >
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 w-max">
              {[...eventImages, ...eventImages].map((img, idx) => (
                <img
                  key={`bottom-${idx}`}
                  src={img}
                  alt={`event-bottom-${idx}`}
                  className="h-40 min-w-[300px] min-h-[200px] rounded-xl shadow-lg object-cover transition-all duration-300 hover:scale-105"
                />
              ))}
            </motion.div>
          </div>

          {/* Left & Right Gradient Fades */}
        </div>
      </div>
    </div>
  );
};

export default EventsScroller;
