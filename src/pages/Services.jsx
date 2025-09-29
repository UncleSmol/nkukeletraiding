import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Building,
  Sparkles,
  Wrench,
  HardHat,
  Car,
  Factory,
  Home,
  School,
  Calendar,
  Users,
  CheckCircle,
  Shield,
  Clock,
  Award,
} from "lucide-react";

// Import images from assets
import mobileToilet1 from "../assets/mobileToiletServices1.jpeg";
import mobileToilet2 from "../assets/mobileToiletServices2.jpeg";
import mobileToilet3 from "../assets/mobileToiletServices3.jpeg";
import mobileToilet4 from "../assets/mobileToiletServices4.jpeg";
import miningEquipment from "../assets/miningAndEquipmentHire.jpeg";
import transportation from "../assets/transportationServices.jpeg";

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

const Services = () => {
  const mainServices = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Mobile Toilet Services",
      description: "Professional sanitation solutions for any location",
      features: [
        "VIP & Standard mobile toilet units",
        "Regular servicing and maintenance",
        "Waste collection and hygienic disposal",
        "Emergency sanitation support",
        "On-site sanitation management",
      ],
      images: [mobileToilet1, mobileToilet2, mobileToilet3, mobileToilet4],
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Construction Services",
      description: "Complete building and construction solutions",
      features: [
        "Building work - all brick types",
        "Plumbing & drainage systems",
        "Electrical installations & maintenance",
        "Roofing, plastering & painting",
        "Concrete work & civil construction",
        "Renovations & tiling",
      ],
      images: [mobileToilet2], // Using construction-related image as placeholder
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Cleaning Services",
      description: "Commercial and industrial cleaning excellence",
      features: [
        "Office building cleaning",
        "Industrial & mining sector cleaning",
        "Retail store maintenance",
        "Government institution cleaning",
        "Deep cleaning services",
        "Once-off contract cleaning",
      ],
      images: [mobileToilet3], // Using cleaning-related image as placeholder
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Mining Supplies & Equipment Hire",
      description: "Comprehensive mining support services",
      features: [
        "Pumps, valves & conveyor belts",
        "Heavy equipment hire (cranes, bulldozers, TLB)",
        "Skilled personnel supply",
        "PPE & general mining supplies",
        "Mobile toilet maintenance for sites",
        "Waste removal services",
      ],
      images: [miningEquipment],
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Transportation Services",
      description: "Reliable commodity transport and logistics",
      features: [
        "Coal transportation",
        "Steel & commodity haulage",
        "Sand, chrome & material transport",
        "Tipper truck services",
        "Nationwide logistics",
        "Timely delivery guaranteed",
      ],
      images: [transportation],
      color: "bg-red-50 border-red-200",
    },
    {
      icon: <HardHat className="w-12 h-12" />,
      title: "Accommodation Solutions",
      description: "Quality accommodation for mining and industrial employees",
      features: [
        "Mining employee accommodation",
        "Eskom project housing",
        "Temporary site accommodation",
        "Fully serviced units",
        "Remote location solutions",
        "Custom accommodation plans",
      ],
      images: [mobileToilet4], // Using accommodation-related image as placeholder
      color: "bg-teal-50 border-teal-200",
    },
  ];

  const targetMarkets = [
    {
      icon: <Factory className="w-8 h-8" />,
      name: "Mining Sector",
      description:
        "Eskom Power Stations, mining companies, and industrial sites",
    },
    {
      icon: <Building className="w-8 h-8" />,
      name: "Construction Companies",
      description: "Building sites, civil projects, and development companies",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      name: "Event Planners",
      description:
        "Festivals, conferences, and public events requiring sanitation",
    },
    {
      icon: <Home className="w-8 h-8" />,
      name: "Municipalities & Government",
      description: "Local government departments and public institutions",
    },
    {
      icon: <School className="w-8 h-8" />,
      name: "Educational Institutions",
      description: "Schools, colleges, and remote community facilities",
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Private Clients",
      description:
        "Individual and corporate clients needing temporary services",
    },
  ];

  const serviceBenefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO Certified Quality",
      description:
        "ISO 9001:2015, 14001:2015 & 45001:2018 certified operations",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "BBBEE Level 1",
      description: "100% Black Owned with top-level B-BBEE certification",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Rapid Response",
      description: "Fast deployment and flexible service scheduling",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Compliance Guaranteed",
      description:
        "Full compliance with health, safety, and environmental regulations",
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
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for sanitation, construction, cleaning,
            mining supplies, and transportation. Certified excellence delivered
            across South Africa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Service Benefits */}
          <motion.section variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {serviceBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-red-500 mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Main Services */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-black text-center">
              Our Comprehensive Service Portfolio
            </h2>
            <div className="space-y-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`grid md:grid-cols-2 gap-8 rounded-xl p-6 ${service.color} border`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-red-500">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-black">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Target Markets */}
          <motion.section
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-8 text-black text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetMarkets.map((market, index) => (
                <motion.div
                  key={market.name}
                  className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-red-500 mb-4 flex justify-center">
                    {market.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {market.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{market.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            variants={itemVariants}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a
              customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27-79-753-5832"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Call Now: 079 753 5832
              </a>
              <a
                href="mailto:nkukeletrading@gmail.com"
                className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
