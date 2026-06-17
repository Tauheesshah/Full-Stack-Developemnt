const SuccessStories = () => {
  const stories = [
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      company: "TCS",
      salary: "8 LPA",
    },
    {
      name: "Priya Singh",
      role: "Data Analyst",
      company: "Accenture",
      salary: "10 LPA",
    },
    {
      name: "Amit Verma",
      role: "Software Engineer",
      company: "Infosys",
      salary: "12 LPA",
    },
  ];

  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <h1 className="text-5xl font-black">
            Success Stories
          </h1>

          <p className="text-slate-600 mt-4">
            Our students are working at top companies.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {stories.map((student) => (
            <div
              key={student.name}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >

              <div className="h-16 w-16 rounded-full bg-blue-100 mb-4" />

              <h3 className="text-xl font-bold">
                {student.name}
              </h3>

              <p>{student.role}</p>

              <p className="text-blue-600 font-semibold mt-3">
                {student.company}
              </p>

              <p className="mt-2">
                Package: {student.salary}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SuccessStories;