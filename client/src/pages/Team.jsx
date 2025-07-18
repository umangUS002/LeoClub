import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { faculty, seniorExecutives, juniorExecutives } from "../data/teamData";
//import pawIcon from "../assets/icons/paw4.svg";
import bg from "../assets/icons/bg2.svg";


const Card = ({ member, isFaculty }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 shadow-[0_0_20px_rgba(255,255,255,0.1)] w-72 text-center text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:bg-white/20 transition-all duration-300"
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white/20"
    />
    <h3 className="text-xl font-semibold">{member.name}</h3>
    <p className="text-sm text-gray-300">{member.designation}</p>
    <p className="text-sm mt-1">{member.email}</p>
    {!isFaculty && (
      <div className="flex justify-center gap-4 mt-3 text-lg text-blue-400">
        {member.instagram && (
          <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
      </div>
    )}
  </motion.div>
);

const TeamSection = ({ title, members, isFaculty = false }) => (
  <section className="py-12">
    <h2 className="text-3xl font-bold text-center text-white mb-8">{title}</h2>
    <div className="flex flex-wrap gap-8 justify-center">
      {members.map((member, idx) => (
        <Card key={idx} member={member} isFaculty={isFaculty} />
      ))}
    </div>
  </section>
);


const Team = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <img
          src={bg}
          alt="Decorative Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none"
        />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-12 pb-20">
          {/* Text Section */}
          <motion.div
            className="text-left max-w-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl max-sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Meet Our Team
            </motion.h1>

            <motion.p
              className="text-gray-300 mt-3 text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              The passionate individuals driving our club forward with dedication and vision.
            </motion.p>
          </motion.div> 

          {/* Paw Icon Section */}
          {/* <motion.div
            className="w-full md:w-[400px] lg:w-[480px]"
            initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={pawIcon}
              alt="Paw Icon"
              className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />
          </motion.div> */}
        </div>
      </section>

      {/* Team Sections */}
      <motion.div
        className="pt-12 pb-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <TeamSection title="Faculty Co-ordinator" members={faculty} isFaculty />
        <TeamSection title="Senior Executives" members={seniorExecutives} />
        <TeamSection title="Junior Executives" members={juniorExecutives} />
      </motion.div>
    </div>
  );
};

export default Team;