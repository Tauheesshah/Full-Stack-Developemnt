const About = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h1 className="text-5xl font-black mb-6">
            About CyberNetSkills
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We help students and professionals launch successful tech careers
            through industry-focused training, real-world projects and placement support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-8">
              To bridge the gap between academic learning and industry demands
              by providing practical technology education that leads directly
              to career opportunities.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-3xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-8">
              Why Choose Us?
            </h3>

            <div className="space-y-4">
              <p>✓ Industry Expert Mentors</p>
              <p>✓ Live Project Training</p>
              <p>✓ Placement Assistance</p>
              <p>✓ Interview Preparation</p>
              <p>✓ Certification Programs</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;