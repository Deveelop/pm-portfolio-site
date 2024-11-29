'use client'

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink =
    `mailto:evelynevee9@gmail.com?suject=Contact from ${formData.name}&body=Hi, my email is ${formData.email}. ${formData.message}`
    window.location.href = mailtoLink;
    setFormData({
      name: "",
      email: "",
      message: ""
    })
    
  };

  return (
    <section className="bg-gray-100 text-gray-800 py-16 mt-10">
      <div className="container mx-auto px-6">
    
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">
            Have a question, want to collaborate, or just say hi? Drop me a message!
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p className="text-gray-600">
              Feel free to reach out through email or connect with me on social media.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex justify-center items-center mr-4">
                  📧
                </span>
                <p className="text-gray-600">evelynevee9@gmail.com</p>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex justify-center items-center mr-4">
                  📱
                </span>
                <p className="text-gray-600">+234 706 458 9241</p>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex justify-center items-center mr-4">
                  🌐
                </span>
                <a className="text-blue-500" href="https://www.linkedin.com/in/isah-aisha-61a675272?utm_source=share&utm_campaign+share_via&utm_content=profile&utm_medium=android_app">LinkedIn: /Isah-Aisha-profile</a>
              </div>
            </div>
          </div>

          
          <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Email"
                  className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Message"
                  className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>
            </div>
            <button
            onClick={handleSubmit}
             type="submit"
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


 
