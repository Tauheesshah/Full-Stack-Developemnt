const Contact = () => {
  return (
    <section className="pt-32 pb-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-black">
            Contact Us
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-6">
              Send Message
            </h2>

            <form className="space-y-4">

              <input
                placeholder="Your Name"
                className="w-full border p-4 rounded-xl"
              />

              <input
                placeholder="Email Address"
                className="w-full border p-4 rounded-xl"
              />

              <input
                placeholder="Phone Number"
                className="w-full border p-4 rounded-xl"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border p-4 rounded-xl"
              />

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold">
                Submit
              </button>

            </form>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <p>📍 Mumbai, Maharashtra</p>
              <p>📞 +91 9876543210</p>
              <p>📧 info@cybernetskills.com</p>
            </div>

            <div className="mt-10 h-80 rounded-2xl overflow-hidden">

              <iframe
                title="map"
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;