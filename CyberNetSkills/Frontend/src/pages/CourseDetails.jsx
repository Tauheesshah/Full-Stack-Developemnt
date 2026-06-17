import { useParams } from "react-router-dom";
import { courses } from "../data/cources";

const CourseDetails = () => {

  const { slug } = useParams();

  const course = courses.find(
    (c) => c.slug === slug
  );

  if (!course) {
    return (
      <h1 className="text-center py-20">
        Course Not Found
      </h1>
    );
  }

  return (
    <section className="py-24 bg-slate-950 min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <div className="text-7xl">
            {course.icon}
          </div>

          <h1 className="text-5xl font-bold text-white mt-6">
            {course.title}
          </h1>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            {course.description}
          </p>

        </div>

      </div>

    </section>
  );
};

export default CourseDetails;