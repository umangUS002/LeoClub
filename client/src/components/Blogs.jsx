import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Blogs = () => {
    const cardsData = [
        {
            image: assets.eventposter,
            name: 'Briar Martin',
            handle: '@neilstellar',
            date: 'April 20, 2025'
        },
        {
            image: assets.eventposter,
            name: 'Avery Johnson',
            handle: '@averywrites',
            date: 'May 10, 2025'
        },
        {
            image: assets.eventposter,
            name: 'Jordan Lee',
            handle: '@jordantalks',
            date: 'June 5, 2025'
        },
        {
            image: assets.eventposter,
            name: 'Avery Johnson',
            handle: '@averywrites',
            date: 'May 10, 2025'
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="rounded-lg mx-4 h-65 shadow-lg hover:shadow-xl transition-all duration-200 w-52 shrink-0">
            <div className="h-50">
                <img className="w-70 h-50 px-2 py-2 rounded-lg" src={card.image} alt="User Image" />
            </div>
            <p className="text-sm flex px-2 mb-2 text-sky-500">International Yoga Day</p>
            <div className="flex px-2 items-center justify-between text-slate-500 text-xs">
                <div className="flex items-center gap-1">
                    <a href="https://x.com" target="_blank" className="hover:text-sky-500">
                        <img src={assets.facebook_logo} alt="" />
                    </a>
                    <a href="">
                        <img src={assets.instagram_logo} alt="" />
                    </a>
                </div>
                <p>{card.date}</p>
            </div>
        </div>
    );

    return (

        <div className="md:px-25">
            <div className="py-10 flex mt-40 max-sm:flex-col bg-gradient-to-r from-text1/40 to-transparent">
            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>
            <div className="w-1/2">
                <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none "></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] pt-5 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none "></div>
            </div>

            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none "></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-0 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none "></div>
            </div>
            </div>

             <div className="py-10 w-full md:w-1/2 flex flex-col items-center text-center justify-center md:text-left md:items-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF] mb-6"
          >
            Blogs
          </motion.h1>
          <p className="text-white/80 text-lg max-w-md flex text-center">
            Explore our club events, workshops, and speaker sessions. Join us
            for engaging learning experiences and networking opportunities.
          </p>
          <button className="mt-6 px-6 py-3 bg-text1 hover:bg-text1/30 text-white rounded-xl shadow-md transition-all duration-300">
            Show More
          </button>
        </div>

        </div>
        </div>
        
    )
}

export default Blogs