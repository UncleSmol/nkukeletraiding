import React, { useState, useEffect, useRef } from "react";
import {
  Truck,
  Building,
  Sparkles,
  Shield,
  Users,
  Clock,
  Award,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Wrench,
  HardHat,
  Car,
} from "lucide-react";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Single optimized video source
  const heroVideo = {
    mp4: "https://cdn.pixabay.com/video/2021/05/12/73977-549736324_large.mp4",
    placeholder:
      "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg",
  };

  // Video loading handler
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  };

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg",
      title: "Professional Sanitation Solutions",
      description:
        "VIP & Standard mobile toilets for events, construction, and remote areas",
    },
    {
      image:
        "https://images.pexels.com/photos/6195876/pexels-photo-6195876.jpeg",
      title: "Industrial Cleaning Services",
      description:
        "Commercial, mining, and industrial cleaning with certified standards",
    },
    {
      image:
        "https://images.pexels.com/photos/2489/street-building-construction-industry.jpg",
      title: "Construction & Building Work",
      description:
        "Complete construction services from foundations to finishing",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const services = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Mobile Toilets",
      description: "Supply, maintenance & waste disposal",
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Construction",
      description: "Building, plumbing, electrical & more",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Cleaning Services",
      description: "Commercial & industrial cleaning",
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Mining Supplies",
      description: "Equipment hire & maintenance",
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Transportation",
      description: "Commodity transport & logistics",
    },
    {
      icon: <HardHat className="w-12 h-12" />,
      title: "Project Management",
      description: "End-to-end project solutions",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      text: "ISO 9001, 14001 & 45001 Certified",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      text: "BBBEE Level 1 - 100% Black Owned",
    },
    {
      icon: <Users className="w-8 h-8" />,
      text: "Experienced Professional Team",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      text: "Fast Response & Flexible Deployment",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      text: "Health & Safety Compliance",
    },
  ];

  return (
    <div
      className="min-h-[calc(100vh-60px)] pt-[60px] bg-[var(--color-white)]"
      style={{
        fontFamily: "var(--font-family-primary)",
      }}
    >
      {/* Hero Section with Fixed Video Background */}
      <div className="relative h-96 bg-gray-900 flex items-center justify-center overflow-hidden">
        {/* Fallback image while video loads */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${heroVideo.placeholder})`,
          }}
        />

        {/* Optimized Video */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onError={() => setIsVideoLoaded(false)}
        >
          <source src={heroVideo.mp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay and Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Nkukele Trading & Projects
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Trusted Partner for Certified Services
          </p>
          <div className="bg-[var(--accent-red)] text-white px-8 py-3 rounded-full font-bold text-lg inline-block">
            Your Clean, Reliable Sanitation Partner
          </div>
        </div>

        {/* Loading indicator */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-5">
            <div className="text-white text-lg">Loading...</div>
          </div>
        )}
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Image Slideshow */}
        <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Optimized image with lazy loading */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          ))}

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[var(--accent-red)] scale-125"
                    : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-[var(--font-secondary)] text-lg md:text-xl mb-8 max-w-4xl mx-auto">
            Nkukele Trading & Projects is a South African-based company
            specializing in sanitation solutions, construction, cleaning
            services, mining supplies, and transportation. We are proud to be
            ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified –
            ensuring the highest standards of quality, environmental
            responsibility, and occupational health and safety.
          </p>
        </div>

        {/* Services with Icons */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-black)]">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center hover:transform hover:scale-105"
              >
                <div className="text-[var(--accent-red)] mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-black)]">
                  {service.title}
                </h3>
                <p className="text-[var(--font-secondary)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us with Icons */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-black)]">
            Why Choose Nkukele?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-[var(--accent-red)]">{item.icon}</div>
                <span className="text-lg font-medium text-[var(--color-black)]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information with Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--color-black)] text-[var(--font-on-black)] rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--accent-red)]" />
                <a
                  href="mailto:nkukeletrading@gmail.com"
                  className="underline hover:text-[var(--accent-red)] transition-colors"
                >
                  nkukeletrading@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--accent-red)]" />
                <a
                  href="tel:+27-79-753-5832"
                  className="underline hover:text-[var(--accent-red)] transition-colors"
                >
                  +27 79 753 5832 (Kamogelo)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--accent-red)]" />
                <a
                  href="tel:+27-68-094-6703"
                  className="underline hover:text-[var(--accent-red)] transition-colors"
                >
                  +27 68 094 6703 (Sekete)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[var(--accent-red)]" />
                <span>21 Visagie Street EXT8, Klipfontein, Witbank, 1034</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-[var(--accent-red)]" />
                <span>Monday–Saturday, 08:00–17:00</span>
              </div>
            </div>
          </div>

          {/* Target Markets */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-black)]">
              Our Target Markets
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Construction Companies",
                "Mining Sector",
                "Event Planners",
                "Municipalities",
                "Government Departments",
                "Schools & Communities",
                "Power Stations",
                "Private Clients",
              ].map((market, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-[var(--font-secondary)] text-sm">
                    {market}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ISO Certification Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl p-8 text-center mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <Award className="w-16 h-16" />
            <div>
              <h3 className="text-2xl font-bold mb-2">
                ISO Certified Excellence
              </h3>
              <p className="text-lg">
                Proudly certified with ISO 9001:2015, ISO 14001:2015 & ISO
                45001:2018
              </p>
            </div>
            <div className="bg-white text-red-600 px-6 py-2 rounded-full font-bold">
              BBBEE LEVEL 1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
