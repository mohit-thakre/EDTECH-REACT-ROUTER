import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container  px-4 py-8 text-white w-[50%] mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <div className="flex items-center mb-4">
        <FaUser className="text-blue-500 mr-2" />
        <p className="text-lg text-gray-300">John Doe</p>
      </div>
      <div className="flex items-center mb-4">
        <FaEnvelope className="text-blue-500 mr-2" />
        <p className="text-lg text-gray-300">info@stusynotion.com</p>
      </div>
      <div className="flex items-center mb-4">
        <FaPhone className="text-blue-500 mr-2" />
        <p className="text-lg text-gray-300">+1234567890</p>
      </div>
      <div className="flex items-center mb-4">
        <FaMapMarkerAlt className="text-blue-500 mr-2" />
        <p className="text-lg text-gray-300">123 Main Street, City, Country</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md py-2 px-4 bg-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md py-2 px-4 bg-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border-gray-300 rounded-md py-2 px-4 bg-gray-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
