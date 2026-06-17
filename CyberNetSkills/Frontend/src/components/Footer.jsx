import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* Top Orange Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}
          <div>

            <Link to="/">
              <img
                src="/CyberNetLogo.jpeg"
                alt="CyberNetSkills"
                className="
                  h-20
                  w-auto
                  object-contain
                  transition-all
                  duration-300
                  hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.7)]
                "
              />
            </Link>

            <p className="mt-5 text-slate-400 leading-relaxed">
              CyberNetSkills is India's leading IT training institute helping
              students build successful careers in Full Stack Development,
              Data Science, Artificial Intelligence, Cloud Computing and
              emerging technologies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  hover:bg-orange-500
                  hover:scale-110
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  hover:bg-orange-500
                  hover:scale-110
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  hover:bg-orange-500
                  hover:scale-110
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  hover:bg-orange-500
                  hover:scale-110
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-Green">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-orange-400 transition-all duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-400 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/placements"
                  className="hover:text-orange-400 transition-all duration-300"
                >
                  Placements
                </Link>
              </li>

              <li>
                <Link
                  to="/success-stories"
                  className="hover:text-orange-400 transition-all duration-300"
                >
                  Success Stories
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-400 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Courses */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-white">
              Popular Courses
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-orange-400 cursor-pointer transition-all duration-300 hover:translate-x-2">
                Full Stack Development
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all duration-300 hover:translate-x-2">
                MERN Stack Development
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all duration-300 hover:translate-x-2">
                Data Science & AI
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all duration-300 hover:translate-x-2">
                Cloud Computing
              </li>

              <li className="hover:text-orange-400 cursor-pointer transition-all duration-300 hover:translate-x-2">
                DevOps Engineering
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-white">
              Contact Us
            </h3>

            <div className="space-y-5 text-slate-400">

              <div className="flex gap-3">

                <FaMapMarkerAlt className="mt-1 text-orange-500" />

                <p>
                  BKC, Mumbai,
                  Maharashtra, India
                </p>

              </div>

              <div className="flex gap-3">

                <FaPhoneAlt className="text-orange-500" />

                <p>
                  +91 98765 43210
                </p>

              </div>

              <div className="flex gap-3">

                <FaEnvelope className="text-orange-500" />

                <p>
                  info@cybernetskills.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm text-center">
            © 2026 CyberNetSkills. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">

            <Link
              to="/privacy-policy"
              className="hover:text-orange-400 transition-all duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-orange-400 transition-all duration-300"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/refund-policy"
              className="hover:text-orange-400 transition-all duration-300"
            >
              Refund Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;