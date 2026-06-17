import {
  FaChalkboardTeacher,
  FaUserTie,
  FaLaptopCode,
  FaComments,
  FaFileAlt,
  FaBriefcase,
} from "react-icons/fa";

const features = [
  {
    title: " 100 % Placement Guranteed",
    icon: <FaBriefcase />,
    description:
      "Dedicated placement assistance with job referrals and interview opportunities.",
  },
  {
    title: "Live Classes",
    icon: <FaChalkboardTeacher />,
    description:
      "Interactive live sessions with expert trainers and real-time doubt solving.",
  },
  {
    title: "Industry Mentors",
    icon: <FaUserTie />,
    description:
      "Learn directly from professionals working in top tech companies.",
  },
  {
    title: "Real Projects",
    icon: <FaLaptopCode />,
    description:
      "Build portfolio-worthy projects based on real industry requirements.",
  },
  {
    title: "Interview Preparation",
    icon: <FaComments />,
    description:
      "Mock interviews, aptitude training and technical interview practice.",
  },
  {
    title: "Resume Building",
    icon: <FaFileAlt />,
    description:
      "Create ATS-friendly resumes that attract recruiters and hiring managers.",
  },
  
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-black to-slate-950">

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
            Why Students Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            Why Choose

            <span className="text-orange-500">
              {" "}CyberNetSkills?
            </span>

          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            We provide everything you need to transform your career
            and become industry-ready with confidence.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item) => (

            <div
              key={item.title}
              className="
              group
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

              {/* Icon */}

              <div
                className="
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                text-2xl
                text-white
                bg-gradient-to-r
                from-orange-500
                to-green-500
                mb-6
                shadow-lg
              "
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-slate-400 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom Accent */}

              <div
                className="
                h-[2px]
                w-0
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

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;