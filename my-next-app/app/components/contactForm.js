"use client";
import { useState } from "react";

export default function ContactForm({ContactBgColor = ""}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className= {`w-full py-16 md:py-24 lg:py-32 ${ContactBgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[59px] leading-[140%] tracking-[2.95px] text-black mb-12 md:mb-16 lg:mb-20">
          GET IN TOUCH WITH US
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
          {/* First Row - Name and Phone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Name Field */}
            <div className="form-field-wrapper">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="form-input"
                required
              />
              <div className="form-underline" />
            </div>

            {/* Phone Field */}
            <div className="form-field-wrapper">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No"
                className="form-input"
                required
              />
              <div className="form-underline" />
            </div>
          </div>

          {/* Second Row - Email and Event */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Email Field */}
            <div className="form-field-wrapper">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="form-input"
                required
              />
              <div className="form-underline" />
            </div>

  {/* Event Field with Working Dropdown */}
<div className="form-field-wrapper relative">
  <select
    name="event"
    value={formData.event}
    onChange={handleChange}
    required
    className="form-input pr-12 appearance-none bg-transparent cursor-pointer"
  >
    <option value="" disabled>
      What's the event
    </option>
    <option value="Wedding">Wedding</option>
    <option value="Engagement">Engagement</option>
    <option value="Reception">Reception</option>
    <option value="Birthday">Birthday</option>
    <option value="Corporate Event">Corporate Event</option>
    <option value="Other">Other</option>
  </select>

  <div className="form-underline" />

  {/* Dropdown Arrow */}
  <svg
    className="absolute right-0 top-2 w-4 h-2 pointer-events-none"
    viewBox="0 0 15 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.65691 8.07088C7.04743 8.4614 7.6806 8.4614 8.07112 8.07088L14.4351 1.70692C14.8256 1.31639 14.8256 0.683226 14.4351 0.292702C14.0446 -0.0978227 13.4114 -0.0978227 13.0209 0.292702L7.36401 5.94956L1.70716 0.292702C1.31664 -0.0978226 0.68347 -0.0978226 0.292946 0.292702C-0.0975786 0.683226 -0.0975786 1.31639 0.292946 1.70692L6.65691 8.07088Z"
      fill="black"
    />
  </svg>
</div>

          </div>

          {/* Submit Button */}
          <div className="lg:max-w-[50%] lg:pr-6">
            <button
              type="submit"
              style={{ backgroundColor: '#2835AB' }}
              className="w-full text-white font-satoshi text-xl md:text-2xl font-light leading-[150%] py-3 md:py-4 px-6 rounded transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .form-field-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .form-input {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Satoshi', 'Inter', sans-serif;
          font-size: 24px;
          font-weight: 300;
          line-height: 150%;
          color: #000;
          padding: 0;
        }

        .form-input::placeholder {
          color: #000;
          opacity: 1;
        }

        .form-input:focus {
          outline: none;
        }

        .form-underline {
          width: 100%;
          height: 1px;
          background: #000;
        }

        @media (max-width: 768px) {
          .form-input {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}