import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const eventImages = [
  assets.eventposter,
  assets.eventposter,
  assets.eventposter,
  assets.eventposter,
  assets.eventposter,
  assets.eventposter,
];

const EventsScroller = () => {
  const scrollTopRef = useRef(null);
  const scrollBottomRef = useRef(null);

  // Scroll Top L → R
  useEffect(() => {
    const el = scrollTopRef.current;
    let req;
    const scroll = () => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      req = requestAnimationFrame(scroll);
    };
    scroll();
    return () => cancelAnimationFrame(req);
  }, []);

  // Scroll Bottom R → L
  useEffect(() => {
    const el = scrollBottomRef.current;
    if (!el) return;

    let req;

    const scroll = () => {
      el.scrollLeft -= 1;
      if (el.scrollLeft <= 0) {
        el.scrollLeft = el.scrollWidth / 2;
      }
      req = requestAnimationFrame(scroll);
    };

    const waitForContent = () => {
      if (el.scrollWidth <= el.clientWidth) {
        requestAnimationFrame(waitForContent);
      } else {
        el.scrollLeft = el.scrollWidth / 2;
        scroll();
      }
    };

    waitForContent();
    return () => cancelAnimationFrame(req);
  }, []);

  return (
    <div className="bg-primary py-16 px-4 md:px-30 min-h-[80vh] flex items-center ">
      <div className="flex flex-col md:pl-10 md:flex-row items-center md:items-center gap-10 w-full bg-primary rounded-lg pt-10 pb-10 shadow-lg shadow-text1/30">
        {/* === Left Content === */}
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl max-sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
          >
            Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 mt-4 text-base sm:text-lg max-w-md mx-auto md:mx-0"
          >
            Explore our club events, workshops, and speaker sessions. Join us
            for engaging learning experiences and networking opportunities.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 max-sm:mx-auto w-[40%] max-sm:w-[50%] px-10 py-3 bg-text1 hover:bg-text1/30 text-black hover:text-white rounded-xl shadow-md transition-all duration-300"
          >
            Show More
          </motion.button>
        </div>

        {/* === Right Scrolling Section === */}
        <div className="w-full md:w-3/5 space-y-6 relative flex flex-col justify-center h-130 max-sm:h-80">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 h-full w-8 md:w-18 bg-gradient-to-l from-primary to-text1 z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

          {/* Top Row: L → R */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            ref={scrollTopRef}
            className="overflow-hidden whitespace-nowrap scroll-smooth"
          >
            <div className="flex gap-4 w-max">
              {[...eventImages, ...eventImages].map((img, idx) => (
                <img
                  key={`top-${idx}`}
                  src={img}
                  alt={`event-top-${idx}`}
                  className="h-46 max-sm:h-40 min-w-[220px] sm:min-w-[260px] md:min-w-[280px] rounded-xl shadow-xl object-cover transition-all duration-300 hover:scale-105"
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom Row: R → L */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            ref={scrollBottomRef}
            className="overflow-hidden whitespace-nowrap scroll-smooth"
          >
            <div className="flex gap-4 w-max">
              {[...eventImages, ...eventImages].map((img, idx) => (
                <img
                  key={`bottom-${idx}`}
                  src={img}
                  alt={`event-bottom-${idx}`}
                  className="h-66 max-sm:h-40 min-w-[220px] sm:min-w-[260px] md:min-w-[280px] rounded-xl shadow-xl object-cover transition-all duration-300 hover:scale-105"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventsScroller;
