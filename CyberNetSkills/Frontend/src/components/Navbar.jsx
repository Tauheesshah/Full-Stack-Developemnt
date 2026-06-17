import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const links = [
    {
      name: "Placements",
      path: "/placements",
    },
    {
      name: "Success Stories",
      path: "/success-stories",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-slate-950/95
        backdrop-blur-xl
        border-b
        border-white/10
        shadow-xl
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-22 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/CyberNetLogo_Cropped.png"
              alt="CyberNet"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            <div className="group relative cursor-pointer">

              <div className="flex items-center gap-2 font-medium text-white hover:text-orange-400 transition">
                Courses
                <FaChevronDown size={12} />
              </div>

              <div className="absolute top-8 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">

                <div className="bg-white shadow-xl rounded-2xl p-4 w-64">

                  <p className="py-2 hover:text-orange-500 cursor-pointer transition duration-300">
                    Networking
                  </p>

                  <p className="py-2 hover:text-orange-500 cursor-pointer transition duration-300">
                    Cyber Security
                  </p>

                  <p className="py-2 hover:text-orange-500 cursor-pointer transition duration-300">
                    Cloud Computing
                  </p>

                  <p className="py-2 hover:text-orange-500 cursor-pointer transition duration-300">
                    Full Stack Development
                  </p>

                  <p className="py-2 hover:text-orange-500 cursor-pointer transition duration-300">
                    Data Science & Analytics
                  </p>

                </div>

              </div>

            </div>

            {links.map((link) => (
              <Link
  key={link.name}
  to={link.path}
  className="
relative
font-medium
text-white
hover:text-orange-400
transition-all
duration-300
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-gradient-to-r
after:from-orange-500
after:to-green-500
after:transition-all
after:duration-300
hover:after:w-full
"
>
                {link.name}
              </Link>
            ))}

          </nav>

          {/* Right Buttons */}

{/* Right Buttons */}

<div className="hidden lg:flex items-center gap-5">

  {!user ? (
    <Link
      to="/login"
     className="font-semibold text-white hover:text-orange-400 transition-all duration-300"
    >
      Login
    </Link>
  ) : (
    <div className="relative group">

      {/* User Info */}

      <div className="flex items-center gap-2 cursor-pointer">

        <FaUserCircle
          size={32}
          className="text-green-700"
        />

        <span className="font-semibold text-white">
          {user.fullName}
        </span>

        <FaChevronDown
          size={12}
          className="text-slate-500"
        />

      </div>

      {/* Dropdown */}

      <div
        className="
        absolute
        right-0
        top-full
        mt-3
        w-60
       bg-slate-950 backdrop-blur-xl border border-white/10
        rounded-2xl
        shadow-xl
        border
        border-slate-100
        opacity-0
        invisible
        group-hover:opacity-100
        group-hover:visible
        transition-all
        duration-300
        z-50
        overflow-hidden
      "
      >

        <div className="p-4 bg-slate-900">

          <div className="flex items-center gap-3">

            <FaUserCircle
              size={40}
              className="text-green-700"
            />

            <div>

              <p className="font-semibold text-white">
                {user.fullName}
              </p>

              <p className="text-xs text-slate-500 break-all">
                {user.email}
              </p>

            </div>

          </div>

        </div>

        <div className="py-2">

          <Link
            to="/profile"
            className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition duration-300"
          >
            My Profile
          </Link>

          <Link
            to="/my-courses"
            className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition duration-300"
          >
            My Courses
          </Link>

          <button
            onClick={handleLogout}
            className="
bg-gradient-to-r
from-orange-500
to-green-500
text-white
px-6
py-3
rounded-xl
font-semibold
transition-all
duration-300
hover:scale-105
shadow-lg
"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  )}

  {/* Book Demo Always Visible */}

  <button
    className="
    bg-orange-500
hover:bg-orange-600
    text-white
    px-6
    py-3
    rounded-xl
    font-semibold
    transition-all
    duration-300
    shadow-lg
    hover:shadow-xl
  "
  >
    Book Demo
  </button>

</div>



          {/* Mobile Button */}

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="lg:hidden text-3xl"
          >
            {mobileMenu ? (
              <HiX />
            ) : (
              <HiOutlineMenuAlt3 />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}

      <AnimatePresence>
            
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="lg:hidden bg-slate-950 border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">

              <Link to="/">
                Courses
              </Link>

              <Link to="/">
                Placements
              </Link>

              <Link to="/">
                Success Stories
              </Link>

              <Link to="/">
                About
              </Link>

              <Link to="/">
                Contact
              </Link>

              <button className="bg-gradient-to-r from-orange-500 to-green-500 text-white py-3 rounded-xl font-semibold">
                Book Demo
              </button>

            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </header>
  );
};

export default Navbar;