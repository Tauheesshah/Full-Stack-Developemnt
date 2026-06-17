import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Do you provide placements?",
    answer:
      "Yes, we provide dedicated placement assistance including resume building, mock interviews, aptitude training and direct interview opportunities with hiring partners.",
  },
  {
    question: "Are classes live?",
    answer:
      "Yes, all classes are conducted live by industry experts with hands-on projects and doubt-solving sessions.",
  },
  {
    question: "Do I get certificates?",
    answer:
      "Yes, course completion certificates are provided after successful completion of training and projects.",
  },
  {
    question: "Are recordings available?",
    answer:
      "Yes, all live sessions are recorded and accessible to enrolled students.",
  },
  {
    question: "Who can join these courses?",
    answer:
      "Students, freshers, working professionals and career switchers can join our programs.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

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
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            Got Questions?

            <span className="text-orange-500">
              {" "}We've Got Answers
            </span>

          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about our training,
            placements, certifications and career support.
          </p>

        </div>

        {/* FAQ Items */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-2xl
              overflow-hidden
              transition-all
              duration-300
              hover:border-orange-500/30
            "
            >

              <button
                onClick={() =>
                  setActive(
                    active === index ? null : index
                  )
                }
                className="
                w-full
                p-6
                flex
                justify-between
                items-center
                text-left
              "
              >

                <span
                  className="
                  text-white
                  font-semibold
                  text-lg
                "
                >
                  {faq.question}
                </span>

                <span
                  className={`
                  flex
                  items-center
                  justify-center
                  w-8
                  h-8
                  rounded-full
                  ${
                    active === index
                      ? "bg-orange-500 text-white"
                      : "bg-green-500 text-white"
                  }
                `}
                >
                  {active === index ? (
                    <FaMinus size={12} />
                  ) : (
                    <FaPlus size={12} />
                  )}
                </span>

              </button>

              {active === index && (

                <div
                  className="
                  px-6
                  pb-6
                  text-slate-300
                  leading-relaxed
                  border-t
                  border-white/10
                "
                >
                  <div className="pt-4">
                    {faq.answer}
                  </div>
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;