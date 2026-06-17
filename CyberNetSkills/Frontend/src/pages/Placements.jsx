import AnimatedCounter from "../components/AnimatedCounter";

const Placements = () => {
  return (
    <section className="pt-32 pb-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <h1 className="text-5xl font-black">
            Placement Records
          </h1>

          <p className="text-slate-600 mt-4">
            Proven results with top recruiters.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h2 className="text-5xl font-bold text-blue-600">
              <AnimatedCounter end={1500} suffix="+" />
            </h2>
            <p>Students Placed</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h2 className="text-5xl font-bold text-green-600">
              <AnimatedCounter end={98} suffix="%" />
            </h2>
            <p>Placement Rate</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h2 className="text-5xl font-bold text-purple-600">
              <AnimatedCounter end={900} suffix="+" />
            </h2>
            <p>Hiring Partners</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h2 className="text-5xl font-bold text-orange-600">
              ₹<AnimatedCounter end={47} />
            </h2>
            <p>Highest Package</p>
          </div>

        </div>

        <div className="bg-white rounded-3xl p-10 shadow-lg">

          <h2 className="text-3xl font-bold mb-10">
            Top Hiring Companies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div>TCS</div>
            <div>Infosys</div>
            <div>Accenture</div>
            <div>Wipro</div>
            <div>Cognizant</div>
            <div>Capgemini</div>
            <div>IBM</div>
            <div>Tech Mahindra</div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Placements;