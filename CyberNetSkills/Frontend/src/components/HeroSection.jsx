import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import {
  FaArrowRight,
  FaPlay,
  FaBriefcase,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

const HeroSection = () => {
  return (
<section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-black to-slate-900">
     
      <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-green-500/15 blur-3xl" /> 

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-medium backdrop-blur-xl">
              🚀 Trusted By <AnimatedCounter end={1500} suffix="+" /> Students
            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-[0.95] text-white">

              Build a

              <span className="block bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                Tech Career
              </span>

              That Companies Hire For

            </h1>

            <p className="mt-8 text-lg text-slate-300 max-w-xl leading-relaxed">

              Master Full Stack Development,
              Data Science, AI, Cloud Computing
              and Cyber Security through live
              projects, industry mentors and
              placement-focused training.

            </p>

            {/* CTA */}

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="
                bg-gradient-to-r
                from-orange-500
                to-green-500
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                flex
                items-center
                gap-3
                shadow-xl
                hover:scale-105
                transition
                "
              >

                Explore Courses

                <FaArrowRight />

              </button>

              <button className="
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                flex
                items-center
                gap-3
                hover:border-orange-500/30
                transition
                ">

                <FaPlay />

                Watch Stories

              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-4 mt-14">

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-orange-400">
                  <AnimatedCounter end={1500} suffix="+" />
                </h3>

                <p className="text-slate-500">
                  Students
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-orange-400">
                  <AnimatedCounter end={98} suffix="%" />
                </h3>

                <p className="text-slate-500">
                  Placement Rate
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-orange-400">
                  <AnimatedCounter end={900} suffix="+" />
                </h3>

                <p className="text-slate-500">
                  Hiring Partners
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* Main Dashboard */}

            <div className="
            backdrop-blur-2xl
            bg-white/5
            border
            border-white/10
            rounded-[32px]
            p-8
            shadow-[0_20px_80px_rgba(0,0,0,0.4)]
            ">

              <div className="space-y-6">

                <div className="bg-white rounded-3xl p-6 shadow-sm">

                  <div className="flex justify-between items-center">

                    <div>
                      <p className="text-slate-500">
                        Placement Rate
                      </p>

                      <h2 className="text-4xl font-bold text-orange-400">
                        <AnimatedCounter end={98} suffix="%" />
                      </h2>
                    </div>

                    <FaBriefcase
                      className="text-orange-500"
                      size={42}
                    />

                  </div>

                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">

                  <div className="flex justify-between items-center">

                    <div>
                      <p className="text-slate-500">
                        Active Learners
                      </p>

                      <h2 className="text-4xl font-bold text-green-400">
                        <AnimatedCounter end={1500} suffix="+" />
                      </h2>
                    </div>

                    <FaUsers
                      className="text-green-500"
                      size={42}
                    />

                  </div>

                </div>

                <div className="
                  bg-gradient-to-r
                  from-orange-500
                  to-green-500
                  text-white
                  rounded-3xl
                  p-6
                ">

                  <p>Highest Package Upto</p>

                  <h2 className="text-5xl font-bold mt-2">
                    ₹ 3-15 LPA
                  </h2>

                </div>

              </div>

            </div>

            {/* Floating Salary Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -top-8 -left-8 bg-white rounded-2xl p-5 shadow-xl"
            >
              🎯 Guaranteed Placement
              <h4 className="font-bold text-xl mt-1">
                <AnimatedCounter end={100} suffix="%" />
              </h4>
            </motion.div>

            {/* Floating Mentor Card */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -bottom-8 right-0 bg-white rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center gap-3">

                <FaGraduationCap />

                <div>

                  <p className="font-semibold">
                    Industry Mentors
                  </p>

                  <span className="text-sm text-slate-500">
                    <AnimatedCounter end={50} suffix="+" /> Experts
                  </span>

                </div>

              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;