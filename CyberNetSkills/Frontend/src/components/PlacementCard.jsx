import { Swiper, SwiperSlide } from "swiper/react";
import { FaBriefcase, FaRupeeSign } from "react-icons/fa";

import "swiper/css";

const placements = [
  {
    name: "Rahul Sharma",
    company: "Accenture",
    package: "12 LPA",
  },
  {
    name: "Priya Verma",
    company: "TCS",
    package: "10 LPA",
  },
  {
    name: "Aman Gupta",
    company: "Infosys",
    package: "15 LPA",
  },
];

const PlacementCard = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-black to-slate-900 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span
            className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-green-500/10
            border
            border-green-500/20
            text-green-400
            text-sm
            font-medium
            mb-5
          "
          >
            100% Placement Assistance
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            Placement

            <span className="text-orange-500">
              {" "}Success Stories
            </span>

          </h2>

          <p className="mt-5 text-slate-400">
            Real students. Real careers. Real success.
          </p>

        </div>

        {/* Slider */}

        <Swiper
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {placements.map((student) => (
            <SwiperSlide key={student.name}>

              <div
                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-500/30
                hover:shadow-2xl
              "
              >

                {/* Avatar */}

                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  mx-auto
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-r
                  from-orange-500
                  to-green-500
                  text-white
                  text-2xl
                  font-bold
                  shadow-lg
                "
                >
                  {student.name.charAt(0)}
                </div>

                {/* Name */}

                <h3 className="text-center text-xl font-bold text-white mt-6">
                  {student.name}
                </h3>

                {/* Company */}

                <div className="flex justify-center items-center gap-2 mt-3 text-slate-300">

                  <FaBriefcase className="text-orange-500" />

                  <span>{student.company}</span>

                </div>

                {/* Package */}

                <div className="mt-6 flex justify-center">

                  <div
                    className="
                    flex
                    items-center
                    gap-2
                    bg-green-500/10
                    border
                    border-green-500/20
                    text-green-400
                    px-5
                    py-2
                    rounded-full
                    font-semibold
                  "
                  >
                    <FaRupeeSign />

                    {student.package}
                  </div>

                </div>

                {/* Bottom Glow */}

                <div
                  className="
                  h-[2px]
                  w-full
                  mt-8
                  bg-gradient-to-r
                  from-orange-500
                  via-green-500
                  to-orange-500
                "
                />

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
};

export default PlacementCard;