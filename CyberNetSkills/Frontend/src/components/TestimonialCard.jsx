import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Developer",
    review:
      "The mentors helped me crack my first software job. The placement support and interview preparation were outstanding.",
  },
  {
    name: "Priya Patel",
    role: "Data Analyst",
    review:
      "Best learning experience with live projects. The trainers explained every concept clearly and helped me build confidence.",
  },
  {
    name: "Aman Verma",
    role: "Full Stack Developer",
    review:
      "Placement support was excellent. I received multiple interview opportunities and landed a great package.",
  },
];

const TestimonialCard = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-slate-900 to-slate-950">

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
            Student Success Stories
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            What Our

            <span className="text-orange-500">
              {" "}Students Say
            </span>

          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Thousands of students have transformed their careers
            through our industry-focused training programs.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
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

              {/* Quote Icon */}

              <div
                className="
                w-12
                h-12
                rounded-xl
                bg-orange-500/10
                flex
                items-center
                justify-center
                text-orange-500
                mb-5
              "
              >
                <FaQuoteLeft />
              </div>

              {/* Stars */}

              <div className="flex gap-1 text-green-500 mb-5">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* Review */}

              <p className="text-slate-300 leading-relaxed">
                {item.review}
              </p>

              {/* User */}

              <div className="mt-6 pt-6 border-t border-white/10">

                <h4 className="font-bold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-orange-400">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TestimonialCard;