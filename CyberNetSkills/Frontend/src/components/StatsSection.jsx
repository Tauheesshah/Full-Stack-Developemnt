import CountUp from "react-countup";
import {
  FaUserGraduate,
  FaBuilding,
  FaTrophy,
  FaChartLine,
} from "react-icons/fa";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 1500,
    suffix: "+",
    label: "Students Placed",
    icon: FaUserGraduate,
  },
  {
    value: 100,
    suffix: "+",
    label: "Hiring Partners",
    icon: FaBuilding,
  },
  {
    value: 15,
    suffix: " LPA",
    label: "Highest Package",
    icon: FaTrophy,
  },
  {
    value: 98,
    suffix: "%",
    label: "Placement Rate",
    icon: FaChartLine,
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-slate-950 to-black">

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
          "
          >
            Our Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
            Trusted By
            <span className="text-orange-500">
              {" "}Thousands of Students
            </span>
          </h2>

          <p className="mt-4 text-slate-400">
            Building successful careers through industry-focused training.
          </p>

        </div>

        {/* Stats Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                group
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-orange-500/30
                hover:shadow-2xl
              "
              >

                {/* Icon */}

                <div
                  className="
                  w-16
                  h-16
                  mx-auto
                  mb-6
                  rounded-2xl
                  bg-gradient-to-r
                  from-orange-500
                  to-green-500
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                "
                >
                  <Icon />
                </div>

                {/* Animated Number */}

                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                   <AnimatedCounter
                     end={item.value}
                     suffix={item.suffix}
                   />
                </h2>

                {/* Label */}

                <p className="mt-3 text-slate-400 font-medium">
                  {item.label}
                </p>

                {/* Hover Line */}

                <div
                  className="
                  h-[2px]
                  w-0
                  mx-auto
                  mt-6
                  bg-gradient-to-r
                  from-orange-500
                  to-green-500
                  transition-all
                  duration-500
                  group-hover:w-full
                "
                />

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default StatsSection;