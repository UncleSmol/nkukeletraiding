import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MobileLogo from "../../assets/mobileLogo.jpeg";
import DesktopLogo from "../../assets/mobileLogo.jpeg";
import DevDocSig from "../../devsig/dev-doc-logo.svg";
import { Home, Info, Layers, Phone, Award } from "lucide-react";

const navItems = [
  { name: "Homepage", icon: <Home size={22} />, href: "/" },
  { name: "Info", icon: <Info size={22} />, href: "/info" },
  { name: "Services", icon: <Layers size={22} />, href: "/services" },
  { name: "Connect", icon: <Phone size={22} />, href: "/connect" },
  {
    name: "Accreditations & Certifications",
    icon: <Award size={22} />,
    href: "/accreditations",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const menuVariants = {
  closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 10 },
  open: { opacity: 1, y: 0 },
};

const Hamburger = ({ open, toggle }) => (
  <button
    onClick={toggle}
    type="button"
    aria-label={open ? "Close menu" : "Open menu"}
    className="md:hidden flex flex-col justify-between w-10 h-10 p-2 relative z-50"
  >
    <motion.span
      className="block h-1 w-full bg-red-500 rounded"
      animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
    <motion.span
      className="block h-1 w-full bg-red-500 rounded"
      animate={open ? { opacity: 0 } : { opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
    <motion.span
      className="block h-1 w-full bg-red-500 rounded"
      animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
  </button>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close menu on ANY click
  useEffect(() => {
    const handleClick = () => setMenuOpen(false);

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleNav = (href) => {
    navigate(href);
    setMenuOpen(false);
  };

  const handleMenuToggle = (e) => {
    // Prevent the global click listener from immediately closing the menu
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      className="h-[60px] w-full bg-black text-white shadow-lg fixed top-0 left-0 z-50"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <nav className="h-full max-w-[1200px] mx-auto flex items-center justify-between px-4 relative">
        {/* Logo */}
        <div className="flex items-center h-full">
          <NavLink to="/" className="flex items-center h-full">
            <img
              src={MobileLogo}
              alt="Mobile Logo"
              className="h-10 w-10 block md:hidden rounded-md object-contain"
            />
            <img
              src={DesktopLogo}
              alt="Desktop Logo"
              className="h-12 w-12 hidden md:block rounded-lg object-contain"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center font-medium text-lg h-full">
          {navItems.map((item) => (
            <li key={item.name} className="h-full flex items-center">
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `hover:text-red-500 transition-colors flex items-center h-full px-2 ${
                    isActive
                      ? "text-red-500 font-bold border-b-2 border-red-500"
                      : ""
                  }`
                }
                end={item.href === "/"}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <Hamburger open={menuOpen} toggle={handleMenuToggle} />

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center gap-8 z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              onClick={(e) => e.stopPropagation()} // Prevent menu clicks from closing
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  className="flex flex-col items-center gap-1 list-none"
                  variants={itemVariants}
                >
                  <button
                    type="button"
                    className="flex flex-col items-center hover:text-red-500 transition-colors bg-transparent border-none outline-none text-white cursor-pointer"
                    onClick={() => handleNav(item.href)}
                  >
                    <span className="mb-1">{item.icon}</span>
                    <span className="mt-1 font-medium text-base">
                      {item.name}
                    </span>
                  </button>
                </motion.li>
              ))}

              {/* DevDoc Icon */}
              <motion.li
                key="devdoc"
                className="flex flex-col items-center gap-1 list-none mt-8"
                variants={itemVariants}
              >
                <a
                  href="https://unclesmol.github.io/dev-doc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mt-2 text-sm text-gray-400">
                    Developed by
                  </span>
                  <img
                    src={DevDocSig}
                    alt="Dev Doc Logo"
                    className="h-8 w-auto rounded"
                  />
                </a>
              </motion.li>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
