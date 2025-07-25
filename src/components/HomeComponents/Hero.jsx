import { useState } from "react";
import CalButton from "../CalButton";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    phone: "",
    consent: false,
  });

  const [errors, setErrors] = useState([]);

  const services = [
    "Software Development",
    "Mobile App",
    "Web Development",
    "AI/Automation",
    "IT Consulting",
    "Other",
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.company.trim())
      newErrors.company = "Company name is required.";
    if (!formData.service.trim())
      newErrors.service = "Please select a service.";
    if (!formData.consent)
      newErrors.consent = "You must agree to the privacy policy.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("attemp");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between xl:h-[calc(100vh-6rem)] gap-10 md:gap-16 px-4 md:px-16 xl:px-28  py-5 lg:py-16"
      style={{
        backgroundImage: "url('/home/Hero-background-min.png')",
        backgroundSize: "cover",
      }}
    >
      {/* Left Side Content */}
      <div className="lg:w-1/2 ">
        <h1 className="text-[2.4rem] md:text-7xl font-bold leading-tight text-center lg:text-left ">
          We develop <br />
          <span className="text-black">Digital Solutions</span>
          <span className="text-red-600">.</span>
        </h1>
        <p className="mt-2 text-gray-800 text-xl text-center lg:text-left">
          We build scalable, custom software solutions to drive digital growth
          and solve business challenges{" "}
        </p>

        {/* <div className="mt-6 text-center lg:text-left">
          <CalButton />
        </div> */}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-4 grid grid-cols-2 gap-1 md:gap-2 gap-x-3 md:gap-x-4 py-2 md:py-4 rounded-xl "
        >
          <div>
            <input
              type="text"
              placeholder="Name *"
              className="border border-[#001e8a] w-full p-2 rounded-md"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <p className="text-red-600 text-[0.7rem] md:text-xs h-3 ">
              {errors.name || ""}
            </p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email *"
              className="border border-[#001e8a] w-full p-2 rounded-md"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <p className="text-red-600 text-[0.7rem] md:text-xs h-3 ">
              {errors.email || "\u00A0"}
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Company Name *"
              className="border border-[#001e8a] w-full p-2 rounded-md"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
            <p className="text-red-600 text-[0.7rem] md:text-xs h-3 ">
              {errors.company || ""}
            </p>
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone (optional)"
              className="border w-full border-[#001e8a] p-2 rounded-md"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="col-span-2 w-full">
            <select
              className="border w-full border-[#001e8a] p-2 rounded-md "
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
            >
              <option value="">Select Service *</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <p className="text-red-600 text-[0.7rem] md:text-xs h-3 ">
              {errors.service || ""}
            </p>
          </div>
          <div className="col-span-2">
            <label className="flex items-start gap-2 text-sm ">
              <input
                type="checkbox"
                className="mt-1"
                checked={formData.consent}
                onChange={(e) =>
                  setFormData({ ...formData, consent: e.target.checked })
                }
              />
              <span>
                I agree to Pasovit’s{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            <p className="text-red-600 text-[0.7rem] md:text-xs h-3 ">
              {errors.consent || ""}
            </p>
          </div>
          <button
            type="submit"
            className=" bg-[#001e8a] text-white  rounded-md font-medium hover:bg-blue-800 cursor-pointer px-6 py-2 mt-2 w-full shadow-md  transition-all duration-300 col-span-2"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Side Illustration */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="/home/Asset-6.svg"
          alt="Rocket Illustration"
          className="w-full max-w-md md:max-w-5xl scale-110"
        />
      </div>
    </section>
  );
}
