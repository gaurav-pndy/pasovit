import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CalButton from "./CalButton";
// import CalButton from "../hooks/CalButton";
// import { openCalPopup } from "../hooks/useCal";
// import CalFloatingButton from "../hooks/useCalcom";

const services = [
  {
    title: "Software Development",
    image: "/SoftwareDev/main.png",
    link: "/software-development",
  },
  {
    title: "Web Development",
    image: "/WebDev/main.png", // Replace with actual image path
    link: "/web-development",
  },
  {
    title: "Mobile App Development",
    image: "/AppDevelopment/main.png",
    link: "/mobile-app-development",
  },

  //  {
  //     title: "Healthcare <br/> Facilitator",
  //     image: "/home/service-4_1.svg",
  //     link: "/healthcare-facilitator",
  //   },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white  fixed top-0 left-0 h-24 flex shadow-md px-6 py-4 w-full z-50">
      <div className="max-w-7xl md:px-10 w-full flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">
          <Link to={"/"}>
            <img
              src="/main-logo-big.svg"
              alt="Pasovit"
              className="h-10 md:h-12"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10 text-xl text-[#001e8a] font-semibold">
          {/* Dropdown Menu */}
          <div
            className=" group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center hover:text-blue-700 transition-all cursor-pointer duration-300">
              What We Do ? <ChevronDown size={20} className="ml-2" />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute left-0 mt-6 bg-white shadow-lg py-6 w-screen z-50"
                >
                  <div className="max-w-7xl w-full mx-auto grid grid-cols-4 gap-6">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="flex flex-col items-center text-center group hover:text-blue-700 transition duration-300"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-24 w-24 object-contain mb-3 hover:scale-110 transition-transform duration-300"
                        />
                        <div className="text-base font-semibold text-gray-800 leading-tight">
                          {service.title}
                        </div>
                      </Link>
                    ))}
                    <a
                      href="https://aeontrix.com/"
                      target="_blank"
                      className="flex flex-col items-center text-center group hover:text-blue-700 transition duration-300"
                    >
                      <img
                        src="/AI/main.png"
                        alt="Artificial intelligence & Automation services"
                        className="h-24 w-24 object-contain mb-3 hover:scale-110 transition-transform duration-300"
                      />
                      <div className="text-base font-semibold text-gray-800 leading-tight">
                        Artificial intelligence & Automation services
                      </div>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/about"
            className="hover:text-blue-700 transition-all duration-300"
          >
            About Us
          </Link>
          {/* <Link
            to="/contact"
            className="hover:text-blue-700 transition-all duration-300"
          >
            Contact Us
          </Link> */}
        </nav>

        {/* <button className="hidden lg:block bg-[#001e8a] cursor-pointer text-white px-6 py-2.5 rounded font-medium hover:bg-blue-800">
          Book Free Strategy Call
        </button> */}
        <div className="hidden lg:block  ">
          <CalButton />
        </div>

        <button
          className="lg:hidden text-[#001e8a]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>

        {/* Mobile Menu */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-22 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-6 text-lg lg:hidden z-50"
            >
              {/* Dropdown for mobile */}
              <div className="w-full text-center text-[#001e8a]">
                <button
                  className=" font-medium flex justify-center items-center w-full "
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  What We Do <ChevronDown size={20} className="ml-2" />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full bg-gray-100 overflow-hidden"
                    >
                      <Link
                        to="/software-development"
                        className="block px-4 py-3 "
                        onClick={() => setIsOpen(false)}
                      >
                        Software Development
                      </Link>
                      <Link
                        to="/web-development"
                        className="block px-4 py-3 "
                        onClick={() => setIsOpen(false)}
                      >
                        Web Development
                      </Link>
                      <Link
                        to="/mobile-app-development"
                        className="block px-4 py-3 "
                        onClick={() => setIsOpen(false)}
                      >
                        Mobile App Development
                      </Link>

                      <a
                        href="https://aeontrix.com/"
                        target="_blank"
                        className="block px-4 py-3 "
                        onClick={() => setIsOpen(false)}
                      >
                        Artificial Intelligence & Automation Services
                      </a>
                      {/* <Link
                        to="/healthcare-facilitator"
                        className="block px-4 py-3 "
                        onClick={() => setIsOpen(false)}
                      >
                        Healthcare Facilitator
                      </Link> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                className="text-[#001e8a] font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              {/* <Link
                to="/contact"
                className="text-[#001e8a] font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link> */}
              <CalButton />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
