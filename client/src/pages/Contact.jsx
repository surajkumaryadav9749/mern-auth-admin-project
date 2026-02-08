import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  // handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Data:", formData);
    setFormData({ username: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-900 pt-8 px-10">
      {/* Global Heading */}
      <h1 className="text-3xl font-bold text-white text-center mb-10">
        Contact Us
      </h1>

      <div className="flex items-start justify-center gap-4">
        {/* Image Section */}
        <div className="contact-img w-[40vw] h-[60vh] bg-green-400 rounded-lg">
          {/* Add image later */}
        </div>

        {/* Form Section */}
        <div className="contact-form w-[40vw] h-[80vh] flex flex-col gap-8 items-start justify-start pl-16">
          <form
            onSubmit={handleSubmit}
            className="flex items-start justify-center flex-col gap-3"
          >
            {/* Username */}
            <div className="flex flex-col gap-1">
              <label
                className="text-white font-medium text-sm"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                id="username"
                className="w-[28vw] px-3 py-2 rounded outline-none bg-gray-700 border border-gray-700 text-white"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-white font-medium text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                className="w-[28vw] px-3 py-2 rounded outline-none bg-gray-700 border border-gray-700 text-white"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                className="text-white font-medium text-sm"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                id="message"
                rows="5"
                className="w-[28vw] px-3 py-2 rounded outline-none bg-gray-700 border border-gray-700 text-white resize-none"
              ></textarea>
            </div>

            <button className="rounded mt-2 bg-orange-400 hover:bg-orange-500 transition font-medium text-sm px-4 py-2 text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.9412639735!2d77.29572834169022!3d28.592716610979572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48b866af1ef%3A0x58913d62225c2c0!2sNew%20Ashok%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1770545319744!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen=""
        className="w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
