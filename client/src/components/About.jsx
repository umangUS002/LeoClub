import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { assets } from "../assets/assets";

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
    <div id="about" className="relative bg-primary text-text1 py-28 max-sm:py-10 px-4 md:px-16 min-h-[300vh] overflow-hidden">

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
        animate={{ y: [0, 200, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[100px] h-[100px] bg-violet-600 opacity-100 blur-3xl rounded-full z-0"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-blue-400 opacity-10 blur-2xl rounded-full z-0"
      />

      {/* Content */}
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:hidden text-5xl font-extrabold text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] mb-20 z-10 relative">
        About LEO
      </motion.h2>

      <div className="flex max-sm:flex-col gap-20">

        <div className="relative max-w-4xl mx-auto z-10 min-w-[50%]">
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
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
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

        <div className="max-sm:hidden max-sm:mt-20 text-2xl px-4 flex flex-col items-center justify-top">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="drop-shadow-[0_0_2px_#3ABEFF] text-center max-md:hidden text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] mb-10 z-10 relative">
            About LEO
          </motion.h2>
          <h1>At LEO Club, we are a dynamic community of young leaders committed to service, personal development, and social impact. Backed by Lions Clubs International, we empower youth to lead change through hands-on projects, leadership training, and community outreach. Together, we grow as individuals while making a difference in the world around us.</h1>

          <div className="mt-8 space-y-4 text-left- border border-white p-3">
            {[
              "Leadership development through real-world experiences",
              "Organizing impactful social service events",
              "Creating platforms for youth to express, lead, and grow",
              "Networking with changemakers across the country",
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span
                  className="w-6 h-6"
                  dangerouslySetInnerHTML={{
                    __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="url(#grad${idx})">
                      <defs>
                        <linearGradient id="grad${idx}" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stop-color="#00FFF0"/>
                          <stop offset="50%" stop-color="#3ABEFF"/>
                          <stop offset="100%" stop-color="#5F85FF"/>
                        </linearGradient>
                      </defs>
                      <path d="M9 16.17l-3.88-3.88a1 1 0 0 0-1.41 1.42l4.59 4.58a1 1 0 0 0 1.41 0l10-10a1 1 0 1 0-1.41-1.42L9 16.17z"/>
                    </svg>
                  `,
                  }}
                />
                <p className="text-gray-200 text-lg">{point}</p>
              </div>
            ))}
          </div>
          <motion.img
            animate={{
              y: [0, -20, 0], // Moves up and down
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.6,
            }}
            src={assets.heroimage}
            alt=""
            className="h-80 mt-10 drop-shadow-[0_0_15px_#3ABEFF]"
          />
        </div>
          <motion.img
            animate={{
              y: [0, -20, 0], // Moves up and down
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.6,
            }}
            src={assets.heroimage}
            alt=""
            className="h-70 px-10 mt-10 drop-shadow-[0_0_15px_#3ABEFF] md:hidden"
          />
      </div>

    </div>
  );
}
