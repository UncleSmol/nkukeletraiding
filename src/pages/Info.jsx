import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Shield,
  Heart,
  Building,
  MapPin,
  Clock,
  Mail,
  Phone,
  Calendar,
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
      staggerChildren: 0.2,
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

const Info = () => {
  const companyInfo = {
    name: "Nkukele Trading and Projects (Pty) Ltd",
    registration: "2016/058502/07",
    vat: "4520316532",
    address: "21 Visagie Street EXT8, Klipfontein, Witbank, 1034",
    email: "nkukeletrading@gmail.com",
    phone: ["079 753 5832 (Kamogelo)", "068 094 6703 (Sekete)"],
    fax: "086 561 9151",
    hours: "Monday - Saturday, 08:00 - 17:00",
    bbbee: "Level 1 - 100% Black Owned",
  };

  const coreValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We are honest and transparent in all our dealings.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reliability",
      description: "We deliver what we promise, every time.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Quality Service",
      description: "We strive for excellence in every project we undertake.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Health & Safety",
      description:
        "We prioritize the well-being of our clients, employees, and the environment.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer Satisfaction",
      description: "We listen, we respond, we improve continuously.",
    },
  ];

  const leadership = [
    {
      name: "Kamogelo Mohlahlo",
      role: "Director Operations",
      qualifications: ["Mechanical and Electrical Engineering (N1, N2, N3)"],
      experience: ["Company Founder", "Business Development"],
    },
    {
      name: "Sekete Mohlahlo",
      role: "Manager",
      qualifications: ["Mechanical Engineering (N3)"],
      experience: [
        "Foreman (Mechanical and Production)",
        "Coordinator (Engineering Services)",
        "Production Foreman (Transport Department)",
        "Diesel Mechanic (Transport Department)",
        "Fitter (Pelletsing Plant)",
      ],
      certifications: [
        "Principles of Supervision",
        "Reliability Centered Maintenance",
        "Basic Hydraulics",
        "Heavy Front-end Loader",
        "Kress Carrier",
        "Basic Business Understanding",
        "SHEQMAN Course",
        "Supervisory Key Skills",
        "Performance Management Training",
        "Safety Health Environment and Quality Incidence Investigations",
        "Advanced Law of Evidence",
      ],
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
            About Nkukele Trading & Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A leading South African company providing comprehensive sanitation,
            construction, and industrial services with certified excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Company Overview */}
          <motion.section
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-black flex items-center gap-3">
              <Building className="w-8 h-8 text-red-500" />
              Company Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Nkukele Trading and Projects is a South African-based company
                  specializing in the supply, maintenance, and servicing of
                  mobile toilets, construction services, industrial cleaning,
                  and mining supplies. Established with a commitment to hygiene,
                  convenience, and customer satisfaction, we provide reliable
                  solutions to events, construction sites, mining operations,
                  and remote areas.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We operate with integrity, efficiency, and a strong focus on
                  environmental safety, backed by ISO 9001:2015, ISO 14001:2015,
                  and ISO 45001:2018 certifications.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">Registered: 2016</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">
                      BBBEE: {companyInfo.bbbee}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">
                      ISO 9001, 14001, 45001 Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Vision & Mission */}
          <motion.section
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-red-500 text-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-7 h-7" />
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed">
                To be the leading provider of sustainable, affordable, and
                high-quality mobile sanitation services in Southern Africa.
              </p>
            </div>

            <div className="bg-black text-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-7 h-7 text-red-500" />
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed">
                To deliver professional sanitation solutions that meet the
                diverse needs of our clients through innovation, prompt service,
                and a dedicated workforce.
              </p>
            </div>
          </motion.section>

          {/* Core Values */}
          <motion.section
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-8 text-black text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-red-500 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Leadership Team */}
          <motion.section
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-8 text-black text-center">
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {leadership.map((person, index) => (
                <div key={person.name} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2 text-black">
                    {person.name}
                  </h3>
                  <p className="text-red-500 font-semibold mb-4">
                    {person.role}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">
                      Qualifications:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {person.qualifications.map((qual, i) => (
                        <li key={i}>{qual}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">
                      Experience:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {person.experience.map((exp, i) => (
                        <li key={i}>{exp}</li>
                      ))}
                    </ul>
                  </div>

                  {person.certifications && (
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Certifications:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {person.certifications.map((cert, i) => (
                          <li key={i}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            variants={itemVariants}
            className="bg-black text-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Contact Information
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-red-500" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-red-500" />
                <div>
                  <p className="font-semibold">Phone</p>
                  {companyInfo.phone.map((number, index) => (
                    <p key={index} className="text-gray-300">
                      {number}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-red-500" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">{companyInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-red-500" />
                <div>
                  <p className="font-semibold">Operating Hours</p>
                  <p className="text-gray-300">{companyInfo.hours}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-red-500" />
                <div>
                  <p className="font-semibold">Registration</p>
                  <p className="text-gray-300">{companyInfo.registration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-500" />
                <div>
                  <p className="font-semibold">VAT Number</p>
                  <p className="text-gray-300">{companyInfo.vat}</p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Info;
