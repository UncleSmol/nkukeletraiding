import React, { useState } from "react";
import { motion } from "framer-motion";

// Video by Ron Lach : https://www.pexels.com/video/close-up-video-of-a-person-dialing-telephone-10397452/
import heroBGVideo from "https://www.pexels.com/video/close-up-video-of-a-person-dialing-telephone-10397452/";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  User,
  Building,
  CheckCircle,
  Shield,
  Award,
} from "lucide-react";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ConnectWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        "079 753 5832 (Kamogelo Mohlahlo)",
        "068 094 6703 (Sekete Mohlahlo)",
      ],
      action: "tel:+27-79-753-5832",
      color: "bg-green-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["nkukeletrading@gmail.com"],
      action: "mailto:nkukeletrading@gmail.com",
      color: "bg-red-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: [
        "21 Visagie Street EXT8",
        "Klipfontein, Witbank",
        "1034, South Africa",
      ],
      action: "https://maps.google.com",
      color: "bg-blue-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Operating Hours",
      details: ["Monday - Saturday", "08:00 - 17:00"],
      action: null,
      color: "bg-purple-500",
    },
  ];

  const services = [
    "Mobile Toilet Services",
    "Construction Work",
    "Cleaning Services",
    "Mining Supplies",
    "Transportation",
    "Accommodation",
    "Equipment Hire",
    "Other",
  ];

  const quickStats = [
    {
      icon: <Award className="w-8 h-8" />,
      label: "ISO Certified",
      value: "9001, 14001, 45001",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      label: "BBBEE Level",
      value: "1 - 100% Black Owned",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      label: "Years Experience",
      value: "8+ Years",
    },
    {
      icon: <Building className="w-8 h-8" />,
      label: "Projects Completed",
      value: "100+",
    },
  ];

  return (
    <motion.div
      className="min-h-[calc(100vh-60px)] pt-[60px] bg-gray-50"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Connect With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your project? Get in touch with our team for
            professional solutions and certified service excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Quick Stats */}
          <motion.section variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg p-6 text-center shadow-lg"
                >
                  <div className="text-red-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Contact Methods & Form */}
          <motion.section
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black mb-6">
                Get In Touch
              </h2>

              <div className="grid gap-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red-500"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-full ${contact.color} text-white`}
                      >
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-black mb-2">
                          {contact.title}
                        </h3>
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                    {contact.action && (
                      <a
                        href={contact.action}
                        className="inline-block mt-4 bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                      >
                        Contact Now
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl font-bold text-black">
                  Send us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+27 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.section>

          {/* Emergency Contact Banner */}
          <motion.section variants={itemVariants}>
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Emergency Service Available
              </h2>
              <p className="text-lg mb-6">
                Need immediate assistance? We offer emergency sanitation and
                cleaning services with rapid response times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+27-79-753-5832"
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Emergency Call: 079 753 5832
                </a>
                <span className="text-red-200">
                  Available 24/7 for urgent requests
                </span>
              </div>
            </div>
          </motion.section>

          {/* Map Placeholder */}
          <motion.section variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-black text-center">
                Find Us in Witbank
              </h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">21 Visagie Street EXT8</p>
                  <p className="text-gray-600">Klipfontein, Witbank, 1034</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ConnectWithUs;
