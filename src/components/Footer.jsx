import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaVk,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#001e8a] text-white mt-20 py-10">
      <div className=" mx-auto px-5 md:px-8 grid lg:grid-cols-[0.6fr_1.2fr_auto]  xl:grid-cols-[1fr_1.5fr_auto] gap-8 md:gap-10 ">
        {/* Left Section - Logo & Socials */}
        <div>
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/logo-white.png"
            alt="Pasovit Logo"
            className="h-12"
          />
          <p className="mt-6 ">
            Leading global technology consultancy that integrates strategy,
            design, and software engineering.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-3 mt-6 text-[#001e8a]">
            <Link
              to="https://vk.com/pasovit"
              target="_blank"
              className="bg-white hover:scale-110 transition-all duration-300 hover:bg-[#e91f38] hover:text-white p-2 rounded shadow-md"
            >
              <FaVk className="" size={24} />
            </Link>
            <Link
              to="http://facebook.com/pasovit"
              target="_blank"
              className="bg-white hover:scale-110 transition-all duration-300 hover:bg-[#e91f38] hover:text-white p-2 rounded shadow-md"
            >
              {" "}
              <FaFacebookF className="" size={24} />
            </Link>
            <Link
              to="https://www.linkedin.com/company/pasovit/"
              target="_blank"
              className="bg-white hover:scale-110 transition-all duration-300 hover:bg-[#e91f38] hover:text-white p-2 rounded shadow-md"
            >
              {" "}
              <FaLinkedinIn className="" size={24} />
            </Link>
            <Link
              to="http://twitter.com/pasovit"
              target="_blank"
              className="bg-white hover:scale-110 transition-all duration-300 hover:bg-[#e91f38] hover:text-white p-2 rounded shadow-md"
            >
              {" "}
              <FaXTwitter className="" size={24} />
            </Link>
            <Link
              to="https://www.instagram.com/pasov.it/"
              target="_blank"
              className="bg-white hover:scale-110 transition-all duration-300 hover:bg-[#e91f38] hover:text-white p-2 rounded shadow-md"
            >
              {" "}
              <FaInstagram className="" size={24} />
            </Link>
            <Link
              to="https://wa.me/919871819993"
              target="_blank"
              className="bg-white hover:scale-110 transition-all duration-300 hover:bg-[#e91f38] hover:text-white p-2 rounded shadow-md"
            >
              {" "}
              <FaWhatsapp className="" size={24} />
            </Link>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="xl:pl-20 ">
          <h3 className="font-semibold text-lg text-center lg:text-left">
            QUICK LINKS
          </h3>
          <div className="flex flex-col md:flex-row  justify-between lg:justify-start gap-4 xl:gap-20 ">
            <ul className="mt-4 space-y-2.5 ">
              <li>
                <Link to="/" className="hover:underline hover:text-yellow-200 ">
                  Pasovit
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-yellow-200 ">
                  What We Do ?
                </Link>
              </li>
              <ul className="ml-4 list-[square] space-y-1">
                <li>
                  <Link
                    to="/application-development"
                    className="hover:underline hover:text-yellow-200 "
                  >
                    Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/artificial-intelligence"
                    className="hover:underline hover:text-yellow-200 "
                  >
                    Artificial Intelligence & Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/digital-marketing"
                    className="hover:underline hover:text-yellow-200 "
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/healthcare-facilitator"
                    className="hover:underline hover:text-yellow-200 "
                  >
                    Healthcare Facilitator
                  </Link>
                </li>
              </ul>
              <li>
                <Link
                  to="/about"
                  className="hover:underline hover:text-yellow-200 "
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:underline hover:text-yellow-200 "
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex md:flex-col justify-center md:justify-normal md:space-y-2.5">
              <Link
                to="/terms"
                className="hover:underline hover:text-yellow-200 "
              >
                Terms of Use
              </Link>{" "}
              <span className="md:hidden px-2">|</span>
              <Link
                to="/privacy"
                className="hover:underline hover:text-yellow-200 "
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Info */}
        <div className=" flex flex-col items-center lg:items-start  ">
          <h3 className="font-semibold text-lg">CONTACT INFO</h3>
          <ul className="mt-4 space-y-2 flex lg:flex-col  w-full  justify-evenly lg:justify-between items-center lg:items-start">
            <li>
              <a
                href="tel:+919871819993"
                target="_blank"
                className="flex items-center"
              >
                <Phone size={18} className="mr-2" /> +91 98718 19993
              </a>
            </li>
            <li>
              <a
                href="mailto:info@pasovit.com"
                target="_blank"
                className="flex items-center"
              >
                <Mail size={18} className="mr-2" /> info@pasovit.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#eeeeee] text-center text-gray-700 text-sm py-3 mt-6">
        © 2025 Pasovit Technologies Private Limited. All rights reserved
      </div>
    </footer>
  );
}
