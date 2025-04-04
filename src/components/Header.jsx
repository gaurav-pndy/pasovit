import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white  fixed top-0 left-0 h-24 flex shadow-md px-6 py-4 w-full z-50">
      <div className="max-w-7xl md:px-10 w-full flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/main-logo-big.svg"
            alt="Pasovit"
            className="h-10 md:h-12"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-xl text-[#001e8a] font-semibold">
          {/* Dropdown Menu */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center hover:text-blue-700 transition-all cursor-pointer duration-300">
              What We Do <ChevronDown size={20} className="ml-2" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-[50%] translate-x-[-50%] bg-white   py-2 w-80">
                <Link
                  to="/application-development"
                  className="block px-4 py-2  hover:bg-blue-100"
                >
                  Application Development
                </Link>
                <Link
                  to="/ai-automation"
                  className="block px-4 py-2  hover:bg-blue-100"
                >
                  Artificial Intelligence & Automation Services
                </Link>
                <Link
                  to="/digital-marketing"
                  className="block px-4 py-2  hover:bg-blue-100"
                >
                  Digital Marketing
                </Link>
                <Link
                  to="/healthcare-facilitator"
                  className="block px-4 py-2  hover:bg-blue-100"
                >
                  Healthcare Facilitator
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="hover:text-blue-700 transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-700 transition-all duration-300"
          >
            Contact Us
          </Link>
        </nav>

        {/* Call to Action Button */}
        <Link
          to="/book-call"
          className="hidden md:block bg-[#001e8a] text-white px-6 py-2.5 rounded font-medium hover:bg-blue-800"
        >
          Book Free Strategy Call
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#001e8a]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
            {/* Dropdown for mobile */}
            <div className="w-full text-center">
              <button
                className="text-blue-700 font-medium flex justify-center items-center w-full py-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                What We Do <ChevronDown size={20} className="ml-2" />
              </button>
              {dropdownOpen && (
                <div className="w-full bg-gray-100">
                  <Link
                    to="/application-development"
                    className="block px-4 py-2 text-blue-700 hover:bg-blue-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Application Development
                  </Link>
                  <Link
                    to="/ai-automation"
                    className="block px-4 py-2 text-blue-700 hover:bg-blue-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Artificial Intelligence & Automation Services
                  </Link>
                  <Link
                    to="/digital-marketing"
                    className="block px-4 py-2 text-blue-700 hover:bg-blue-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to="/healthcare-facilitator"
                    className="block px-4 py-2 text-blue-700 hover:bg-blue-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Healthcare Facilitator
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-blue-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-blue-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/book-call"
              className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Book Free Strategy Call
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
