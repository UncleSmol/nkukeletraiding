import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Home, Phone } from "lucide-react";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const PageNotFound = () => {
  return (
    <motion.div
      className="min-h-[calc(100vh-60px)] pt-[60px] bg-gray-50 flex items-center justify-center px-4"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-red-500" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold mb-4 text-black">
          Oops! Page Not Found
        </h1>

        {/* Message */}
        <p className="text-lg text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or might have been moved.
          Don’t worry — let’s get you back on track.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" /> Go Home
          </a>
          <a
            href="tel:+27-79-753-5832"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" /> Call Support
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PageNotFound;
