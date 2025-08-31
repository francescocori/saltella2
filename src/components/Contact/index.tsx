"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="bg-base-100 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div className="space-y-6">
            {/* Tagline */}
            <div>
              <span className="font-founders text-sm font-medium text-base-content/60 tracking-wider uppercase">
                Tagline
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-founders text-4xl md:text-5xl  text-base-content"
              // style={{ fontFamily: "var(--font-founders-grotesk)" }}
            >
              Contact us 123
            </h2>

            {/* Description */}
            <p className="font-founders font-light text-lg text-base-content/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="font-founders label-text font-medium">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input input-bordered w-full bg-base-100 border-base-300 focus:border-primary"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="font-founders label-text font-medium">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input input-bordered w-full bg-base-100 border-base-300 focus:border-primary"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="form-control">
                <label className="label">
                  <span className="font-founders label-text font-medium">
                    Message
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="textarea textarea-bordered w-full h-32 bg-base-100 border-base-300 focus:border-primary resize-none"
                  required
                ></textarea>
              </div>

              {/* Terms Checkbox */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="checkbox checkbox-sm"
                    required
                  />
                  <span className="font-founders font-light label-text">
                    I accept the{" "}
                    <a href="#" className="link link-primary">
                      Terms
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="font-founders btn bg-black hover:bg-black/80 text-white border-none px-8 py-3 font-medium"
                disabled={!formData.acceptTerms}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Map */}
          <div className="lg:pl-8">
            <div className="relative w-full h-96 lg:h-full min-h-[400px] bg-base-200 rounded-lg overflow-hidden">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-base-300 to-base-200 flex items-center justify-center">
                {/* Location Pin Icon */}
                <div className="text-base-content/40">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>

              {/* Optional: Add actual map integration here */}
              {/* You can replace this with Google Maps, Mapbox, or other map service */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
