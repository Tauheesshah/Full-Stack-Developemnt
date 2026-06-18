import { useState } from "react";
import axios from "axios";

const LeadForm = () => {
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [course, setCourse] = useState("");
const [message, setMessage] = useState("");

const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  setSuccess("");
  setError("");

  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/leads",
      {
        fullName,
        email,
        phone,
        course,
        message,
      }
    );

    setSuccess(res.data.message);

    setFullName("");
    setEmail("");
    setPhone("");
    setCourse("");
    setMessage("");

  } catch (error) {
    console.log(error);

    setError(
      error?.response?.data?.message ||
      "Something went wrong. Please try again."
    );
  }
};




  return (
    <section id="book-demo" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6">

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-[32px]
          p-10
          md:p-14
          shadow-2xl
        "
        >

          {/* Heading */}

          <div className="text-center">

            <span
              className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-orange-500/10
              border
              border-orange-500/20
              text-orange-400
              text-sm
              font-medium
              mb-5
            "
            >
              Free Career Guidance
            </span>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              leading-tight
            "
            >
              Book Your
              <span className="text-orange-500">
                {" "}Free Career Consultation
              </span>
            </h2>

            <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
              Speak with our career experts and discover the
              best learning path to land high-paying jobs in
              Full Stack Development, AI, Data Science and Cloud.
            </p>

          </div>
          {/* Success Message */}

          {success && (
            <div className="mt-8 mb-6 bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-4 rounded-xl text-center">
              {success}
            </div>
          )}
          
          {/* Error Message */}
          
          {error && (
            <div className="mt-8 mb-6 bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-4 rounded-xl text-center">
              {error}
            </div>
          )}

          {/* Form */}

          <form onSubmit={handleSubmit} className="mt-10">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                 type="text"
                 placeholder="Full Name"
                 value={fullName}
                 onChange={(e) => setFullName(e.target.value)}
                 required
                 className="
                 bg-slate-900/80
                 border
                 border-slate-700
                 text-white
                 p-4
                 rounded-xl
                 outline-none
                 focus:border-orange-500
                 transition
                "
                />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                bg-slate-900/80
                border
                border-slate-700
                text-white
                p-4
                rounded-xl
                outline-none
                focus:border-orange-500
                transition
              "
              />

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-5">

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="
                bg-slate-900/80
                border
                border-slate-700
                text-white
                p-4
                rounded-xl
                outline-none
                focus:border-orange-500
                transition
              "
              />

              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                className="
                bg-slate-900/80
                border
                border-slate-700
                text-white
                p-4
                rounded-xl
                outline-none
                focus:border-orange-500
                transition
              "
              >
                <option value="">Select Course</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="MERN Stack">MERN Stack</option>
                <option value="Data Science & AI">Data Science & AI</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="DevOps Engineering">DevOps Engineering</option>
              </select>

            </div>

            <textarea
              rows="4"
              placeholder="Tell us about your career goals..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
              w-full
              mt-5
              bg-slate-900/80
              border
              border-slate-700
              text-white
              p-4
              rounded-xl
              outline-none
              focus:border-orange-500
              transition
            "
            />

            <div className="text-center mt-8">

              <button
              type="submit"
              className="
              px-10
              py-4
              rounded-xl
              font-semibold
              text-white
              bg-gradient-to-r
              from-orange-500
              to-amber-500
              hover:from-orange-600
              hover:to-amber-600
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
              hover:shadow-orange-500/30
            "
            >
              Book Free Consultation
            </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default LeadForm;