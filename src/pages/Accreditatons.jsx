import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Shield,
  FileCheck,
  CheckCircle,
  Star,
  Calendar,
  Users,
  Target,
  Building,
  BadgeCheck,
  Ribbon,
  FileText,
  ClipboardCheck,
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

const Accreditations = () => {
  const isoCertifications = [
    {
      icon: <Award className="w-12 h-12" />,
      standard: "ISO 9001:2015",
      title: "Quality Management System",
      description:
        "Certified for consistent quality in all our services and processes",
      benefits: [
        "Enhanced customer satisfaction",
        "Streamlined operational processes",
        "Continuous improvement culture",
        "Risk-based thinking approach",
      ],
      status: "Active",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      standard: "ISO 14001:2015",
      title: "Environmental Management System",
      description:
        "Commitment to environmental protection and sustainable practices",
      benefits: [
        "Reduced environmental impact",
        "Compliance with regulations",
        "Resource efficiency",
        "Sustainable operations",
      ],
      status: "Active",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <Users className="w-12 h-12" />,
      standard: "ISO 45001:2018",
      title: "Occupational Health & Safety",
      description:
        "Ensuring safe working conditions for all employees and stakeholders",
      benefits: [
        "Enhanced workplace safety",
        "Reduced occupational risks",
        "Health protection measures",
        "Compliance with OHS requirements",
      ],
      status: "Active",
      color: "bg-red-50 border-red-200",
    },
  ];

  const bbbeeInfo = {
    level: "LEVEL 1",
    percentage: "100%",
    ownership: "Black Owned",
    status: "Verified",
    certificate: "Available on Request",
    benefits: [
      "Highest B-BBEE recognition level",
      "Preferred supplier status",
      "Enhanced tender opportunities",
      "Corporate social responsibility",
    ],
  };

  const legalCompliance = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Company Registration",
      detail: "2016/058502/07",
      description: "Registered with CIPC since 2016",
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "VAT Registration",
      detail: "4520316532",
      description: "Fully VAT compliant",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "UIF Registration",
      detail: "Unemployed Insurance Fund",
      description: "Employee benefits compliance",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Tax Compliance",
      detail: "Income Tax Act",
      description: "Full tax compliance status",
    },
  ];

  const certificationDetails = {
    certifier: "KGS Management System Certifications South Africa (PTY) Ltd",
    recommendation:
      "ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 Registration",
    date: "07 August 2025",
    address: "21 Visagie Street EXT8, Klipfontein, Witbank, 1034",
    status: "Recommended for Certification",
  };

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
            Accreditations & Certifications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrating our commitment to quality, safety, and environmental
            responsibility through internationally recognized certifications and
            accreditations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* ISO Certifications */}
          <motion.section variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4 flex items-center justify-center gap-3">
                <Ribbon className="w-8 h-8 text-red-500" />
                ISO Certifications
              </h2>
              <p className="text-gray-600 text-lg">
                Internationally recognized standards ensuring quality,
                environmental responsibility, and workplace safety
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {isoCertifications.map((cert, index) => (
                <motion.div
                  key={cert.standard}
                  className={`bg-white rounded-xl p-6 shadow-lg border ${cert.color}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-center mb-4">
                    <div className="text-red-500 mb-3 flex justify-center">
                      {cert.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {cert.standard}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      {cert.title}
                    </p>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 text-center">
                    {cert.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-black text-sm uppercase tracking-wide">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {cert.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* B-BBEE Certification */}
          <motion.section variants={itemVariants}>
            <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <BadgeCheck className="w-8 h-8 text-red-500" />
                    B-BBEE Certification
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-2xl font-bold">
                        {bbbeeInfo.level}
                      </div>
                      <div>
                        <p className="text-2xl font-bold">
                          {bbbeeInfo.percentage}
                        </p>
                        <p className="text-gray-300">{bbbeeInfo.ownership}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      Highest level of Broad-Based Black Economic Empowerment
                      recognition
                    </p>
                    <ul className="space-y-2">
                      {bbbeeInfo.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-red-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <FileText className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">Certificate Status</p>
                  <p className="text-white font-semibold text-lg">
                    {bbbeeInfo.status}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {bbbeeInfo.certificate}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Legal Compliance */}
          <motion.section variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-black text-center">
                Legal Compliance & Registrations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {legalCompliance.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-red-500 mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-mono mb-2">
                      {item.detail}
                    </p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Certification Details */}
          <motion.section variants={itemVariants}>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">
                  Certification Authority
                </h2>
                <p className="text-red-100">
                  Issued by internationally recognized certification body
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Certifying Body
                    </h3>
                    <p className="text-red-100">
                      {certificationDetails.certifier}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Recommendation
                    </h3>
                    <p className="text-red-100">
                      {certificationDetails.recommendation}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Date Issued</h3>
                    <p className="text-red-100 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {certificationDetails.date}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Status</h3>
                    <p className="text-red-100 font-semibold">
                      {certificationDetails.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Why Certifications Matter */}
          <motion.section variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-black text-center">
                Why Our Certifications Matter
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-black">
                    For Our Clients
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Assured quality and consistency in service delivery",
                      "Compliance with health, safety, and environmental regulations",
                      "Reduced risk and enhanced project success rates",
                      "Professional and standardized service approach",
                      "Sustainable and environmentally responsible operations",
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-black">
                    For Our Business
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Continuous improvement through systematic processes",
                      "Enhanced operational efficiency and effectiveness",
                      "Competitive advantage in tender processes",
                      "Employee safety and well-being prioritization",
                      "Environmental stewardship and sustainability",
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Building className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section variants={itemVariants}>
            <div className="bg-black text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Request Certificate Copies
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Need verified copies of our certifications for your tender
                submissions or compliance requirements? Contact us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:nkukeletrading@gmail.com"
                  className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Email for Certificates
                </a>
                <a
                  href="tel:+27-79-753-5832"
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call for Verification
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Accreditations;
