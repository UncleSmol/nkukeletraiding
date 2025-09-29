import React from "react";
import { Mail, Phone, MapPin, Clock, Award, Shield } from "lucide-react";
import DevDocSig from "../../devsig/dev-doc-logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white shadow-lg z-40">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--accent-red)]">
              Nkukele Trading & Projects
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for certified sanitation, construction,
              cleaning, and industrial services across South Africa.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Award className="w-4 h-4 text-[var(--accent-red)]" />
              <span>ISO 9001, 14001 & 45001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Shield className="w-4 h-4 text-[var(--accent-red)]" />
              <span>BBBEE Level 1 - 100% Black Owned</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[var(--accent-red)]" />
                <div>
                  <a
                    href="tel:+27-79-753-5832"
                    className="hover:text-[var(--accent-red)] transition-colors block"
                  >
                    +27 79 753 5832
                  </a>
                  <span className="text-xs text-gray-400">Kamogelo</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[var(--accent-red)]" />
                <div>
                  <a
                    href="tel:+27-68-094-6703"
                    className="hover:text-[var(--accent-red)] transition-colors block"
                  >
                    +27 68 094 6703
                  </a>
                  <span className="text-xs text-gray-400">Sekete</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[var(--accent-red)]" />
                <a
                  href="mailto:nkukeletrading@gmail.com"
                  className="hover:text-[var(--accent-red)] transition-colors"
                >
                  nkukeletrading@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Address & Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Location & Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[var(--accent-red)] mt-1" />
                <span className="text-sm text-gray-300">
                  21 Visagie Street EXT8
                  <br />
                  Klipfontein, Witbank
                  <br />
                  1034, South Africa
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[var(--accent-red)]" />
                <span className="text-sm text-gray-300">
                  Mon - Sat: 08:00 - 17:00
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/info" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/connect" },
                { name: "Certifications", href: "/accreditations" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-[var(--accent-red)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-center md:text-left">
              <span className="font-medium tracking-wide">
                &copy; {new Date().getFullYear()} Nkukele Trading & Projects
                (Pty) Ltd.
              </span>
              <span className="text-gray-400 ml-2">Reg No: 2016/058502/07</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center space-x-4">
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-[var(--accent-red)] transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-[var(--accent-red)] transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>

              {/* DevDoc Signature */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 text-xs">Developed by</span>
                <a
                  href="https://unclesmol.github.io/dev-doc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[var(--accent-red)] transition-colors text-sm font-medium"
                >
                  <img
                    src={DevDocSig}
                    alt="Dev Doc Logo"
                    className="h-8 w-auto rounded"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
