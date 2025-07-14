import { motion } from "framer-motion";
import LayeredWaveBackground from "./PatternBackground";

export default function Hero() {

  
  return (

    
    <div className="relative h-[calc(100vh-70px)] max-sm:h-[calc(100vh-120px)] w-full bg-primary text-text1 overflow-hidden flex items-center justify-center px-4">
      {/* Floating Abstract Blobs */}
      <motion.div
        animate={{ y: [0, 500, 0], x: [0, 100, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-10 left-0 w-[100px] h-[100px] bg-cyan-500 opacity-100 blur-3xl rounded-full z-0"
      />
      <motion.div
        animate={{ y: [0, -500, 0], x: [0, 100, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[100px] h-[100px] bg-violet-600 opacity-100 blur-3xl rounded-full z-0"
      />
      {/* Wave Background */}
      <LayeredWaveBackground />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-8xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] ">
            Welcome to <span className="uppercase max-sm:text-6xl text-8xl bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]">LEO</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80">
          Leading Excellence & Opportunity – The official student club for innovation, leadership, and beyond.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-text1 text-black px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-text1 hover:border hover:border-text1 transition"
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
