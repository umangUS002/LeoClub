import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const aboutItems = [
  {
    title: "Leadership",
    description:
      "We nurture individuals into confident, ethical, and visionary leaders through initiatives, workshops, and team projects.",
  },
  {
    title: "Experience",
    description:
      "Hands-on opportunities and real-world exposure are at the heart of LEO. We believe experience drives growth.",
  },
  {
    title: "Opportunity",
    description:
      "LEO creates gateways—be it networking, innovation, or skill-building—for members to thrive and excel.",
  },
];

export default function About() {
  return (
    <div id="about" className="relative bg-primary text-text1 py-28 px-4 md:px-16 min-h-[300vh] overflow-hidden">

      {/* Floating Abstract Blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        className="absolute top-10 left-0 w-[400px] h-[400px] bg-cyan-500 opacity-10 blur-3xl rounded-full z-0"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-violet-600 opacity-10 blur-3xl rounded-full z-0"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-blue-400 opacity-10 blur-2xl rounded-full z-0"
      />

      {/* Content */}
      <h2 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-20 z-10 relative">
        About LEO
      </h2>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-slate-600 z-0" />

        <div className="flex flex-col gap-[15vh] relative z-10">
          {aboutItems.map((item, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: false, amount: 0.2 });

            return (
              <div
                key={i}
                ref={ref}
                className="flex flex-col items-center text-center px-4"
              >
                {/* Tick Circle */}
                <motion.div
                  className="mb-6 w-20 h-20 rounded-full border-8 shadow-xl"
                  animate={{
                    backgroundColor: inView ? "#3ABEFF" : "#1e293b", // text1 : slate-800
                    borderColor: inView ? "#ffffff" : "#64748b",
                    scale: inView ? 1.1 : 0.7,
                    opacity: inView ? 1 : 0.3,
                    boxShadow: inView
                      ? "0 0 25px #3ABEFF88"
                      : "0 0 0px transparent",
                  }}
                  transition={{ duration: 0.6 }}
                />

                {/* Title */}
                <motion.h3
                  initial={false}
                  animate={{ opacity: inView ? 1 : 0.3, y: inView ? 0 : 10 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold text-text1"
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={false}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-lg text-text1/80 max-w-xl"
                >
                  {item.description}
                </motion.p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
