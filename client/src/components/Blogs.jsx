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
    <h3 className="text-xl font-semibold text-primary">{testimonial.name}</h3>
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
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl">
        {/* === Left Content === */}
        <div className="w-full md:w-1/2 flex flex-col items-center">

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
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* === Right Section === */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center ">
        <div className="absolute top-0 left-0 h-full w-80 bg-gradient-to-r from-primary to-text1 z-10 pointer-events-none" />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
          >
            Our Posts
          </motion.h1>

          <p className="text-white/80 mt-4 text-base sm:text-lg max-w-md">
            Explore our club blogs, posts and other content. Join us
            for engaging learning visual experience.
          </p>

          <button className="mt-6 px-8 py-3 bg-text1 hover:bg-text1/30 text-black hover:text-white rounded-xl shadow-md transition-all duration-300">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
