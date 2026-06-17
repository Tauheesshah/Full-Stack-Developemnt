import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { courses } from "../data/cources";

const CourseCard = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-black to-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            Industry Ready Programs
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Our
            <span className="text-orange-500">
              {" "}Popular Courses
            </span>
          </h2>

          <p className="text-slate-400 mt-4">
            Learn from experts and get placement-ready.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {courses.map((course) => (

            <div
              key={course.slug}
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              hover:border-orange-500/30
              hover:-translate-y-2
              transition-all
              duration-300
            "
            >

              <div className="text-5xl">
                {course.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {course.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {course.description}
              </p>

              <div className="mt-6 flex justify-between">

                <div>
                  <p className="text-slate-500 text-sm">
                    Duration
                  </p>

                  <p className="text-green-400 font-semibold">
                    {course.duration}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Students
                  </p>

                  <p className="text-orange-400 font-semibold">
                    {course.students}
                  </p>
                </div>

              </div>

              <Link
                to={`/courses/${course.slug}`}
                className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-orange-400
                font-semibold
                hover:text-orange-300
              "
              >
                Learn More
                <FaArrowRight />
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CourseCard;