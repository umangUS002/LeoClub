import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LayeredWaveBackground from "./PatternBackground";
import { assets } from "../assets/assets";

export default function Hero() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gatesOpened, setGatesOpened] = useState(false); // 🆕 controls gate unmounting

  useEffect(() => {
    // Simulate progress loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true); // start gate animation
          return 100;
        }
        return prev + 1;
      });
    }, 15); // 2.5s total load

    // After gate animation ends, remove gates
    const gateTimeout = setTimeout(() => {
      setGatesOpened(true);
    }, 1500 + 1200); // 2.5s load + 1.2s animation

    return () => {
      clearInterval(interval);
      clearTimeout(gateTimeout);
    };
  }, []);

  return (
    <div className="relative h-[calc(100vh-70px)] max-sm:h-[calc(100vh-120px)] w-full bg-primary text-text1 overflow-hidden flex items-center justify-center px-4">
      
      {/* === GATE Overlays === */}
      {!gatesOpened && (
        <>
          {/* Center Logo & Progress Bar */}
          <div className="absolute z-50 flex flex-col items-center justify-center w-full h-full pointer-events-none">
            <img src={assets.leologo} alt="Club Logo" className="w-20 h-20 object-contain mb-4" />
            <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-text1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Left Gate */}
          <motion.div
            initial={{ x: 0 }}
            animate={isLoaded ? { x: "-100%" } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-text1/30 via-primary to-primary border-r-4 border-zinc-700 shadow-2xl z-40"
          />

          {/* Right Gate */}
          <motion.div
            initial={{ x: 0 }}
            animate={isLoaded ? { x: "100%" } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-text1/30 via-primary to-primary border-l-4 border-zinc-700 shadow-2xl z-40"
          />
        </>
      )}

      {/* === Floating Blobs === */}
      <motion.div
        animate={{ y: [0, 500, 0], x: [0, 100, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute top-10 -left-10 w-[100px] h-[100px] bg-cyan-500 opacity-100 blur-3xl rounded-full z-0"
      />
      <motion.div
        animate={{ y: [0, -500, 0], x: [0, 100, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[100px] h-[100px] bg-cyan-500 opacity-100 blur-3xl rounded-full z-0"
      />

      {/* === Wave Background === */}
      <LayeredWaveBackground />

      {/* === Hero Content === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.2, delay: isLoaded ? 1.2 : 0 }}
        className="z-10 text-center max-w-3xl max-sm:flex max-sm:flex-col gap-5"
      >
        <h1 className="text-5xl md:text-8xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] ">
          Welcome to{" "}
          <span className="uppercase max-sm:text-6xl text-8xl">LEO</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80">
          Leading Excellence & Opportunity – The official student club for innovation, leadership, and beyond.
        </p>

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
