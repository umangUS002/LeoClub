import { motion } from "framer-motion";
import LayeredWaveBackground from "./PatternBackground";

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-primary text-text1 overflow-hidden flex items-center justify-center px-4">
      
      {/* Wave Background */}
      <LayeredWaveBackground />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Welcome to LEO
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text1/80">
          Leading Excellence & Opportunity – The official student club for innovation, leadership, and beyond.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition"
          >
            Join Now
          </motion.button>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            className="border border-text1 text-text1 px-6 py-3 rounded-full font-semibold hover:bg-text1 hover:text-black transition"
          >
            About Us
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
