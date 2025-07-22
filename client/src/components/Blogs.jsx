import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const blogs = [
  {
    quote:
      "The finance club has allowed me to level my game professionally and personally. It has provided me invaluable experiences in team management, strategic planning, and networking with industry professionals, opening up numerous career opportunities.",
    name: "Yoga Day",
    title: "Umang",
    image: assets.eventposter,
  },
  {
    quote:
      "Being part of the club has taught me leadership and allowed me to connect with mentors in the industry. Truly a transformative experience!",
    name: "Yoga Day",
    title: "Umang",
    image: assets.eventposter,
  },
  {
    quote:
      "This experience broadened my perspective and gave me lifelong friends and valuable skills.",
    name: "Yoga Day",
    title: "Umang",
    image: assets.eventposter,
  },
];

const BlogCard = ({ testimonial }) => (
  <div className="bg-gray-800 backdrop-blur p-6 rounded-2xl max-w-md mx-auto text-center shadow-lg transition-all duration-300">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-full h-84 max-sm:h-54 rounded-lg mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold text-gray-400">{testimonial.name}</h3>
    <p className="text-sm text-text1">{testimonial.title}</p>
  </div>
);

const Blogs = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary py-16 px-4 md:px-20 min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl w-full bg-primary rounded-lg pt-10 pb-10 shadow-lg shadow-text1/30 px-10">
        {/* === Left Content === */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center py-10">
          <div className="absolute top-0 right-0 h-full md:w-18 w-8 bg-gradient-to-r max-sm:bg-gradient-to-r from-primary to-text1 z-10 pointer-events-none" />


          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <BlogCard testimonial={blogs[index]} />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {blogs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* === Right Section === */}
        <div className="w-full max-sm:-mt-10 md:w-1/2 flex flex-col items-center md:items-center justify-center text-center md:text-center">
          <div className="max-w-md">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
            >
              Our Posts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 sm:mt-4 mt-1 sm:text-lg text-sm"
            >
              Explore our club blogs, posts and other content. Join us for engaging learning visual experience.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="sm:mt-6 sm:px-8 sm:py-3 mt-4 px-4 py-2 bg-text1 hover:bg-text1/30 text-black hover:text-white rounded-xl shadow-md transition-all duration-300"
            >
              Show More
            </motion.button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Blogs;
