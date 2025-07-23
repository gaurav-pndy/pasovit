import React, { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  phone: "",
  description: "",
  consent: false,
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Software Development",
    "Mobile App",
    "Web Development",
    "AI/Automation",
    "IT Consulting",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.service.trim()) newErrors.service = "Please select a service";
    if (!formData.description.trim())
      newErrors.description = "Project description is required";
    if (!formData.consent) newErrors.consent = "Consent is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
      setFormData(initialFormState);
    }
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="contact">
      <div className="text-center mb-10">
        <h2 className="text-3xl text-[#262626] font-[500] md:text-[2.5rem] leading-tight">
          Need a Tech Partner for Your Next Project? <br />
          Let’s Talk.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white shadow-[0_6px_15px_rgba(0,0,0,0.1)] rounded p-6 space-y-4"
        >
          <div>
            <label className="block font-medium text-sm">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">Company Name *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
            {errors.company && (
              <p className="text-red-500 text-xs mt-1">{errors.company}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">
              What Service Are You Interested In? *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-xs mt-1">{errors.service}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium text-sm">
              Project Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm">
              I agree to Pasovit’s{" "}
              <a
                href="/privacy"
                className="underline text-blue-600"
                target="_blank"
              >
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-xs mt-1">{errors.consent}</p>
          )}

          <div className="w-full flex justify-center mt-6">
            <button
              type="submit"
              className=" bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  w-full shadow-md  transition-all duration-300"
            >
              Submit
            </button>
          </div>

          {submitted && (
            <p className="text-green-600 text-sm mt-3">
              Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
