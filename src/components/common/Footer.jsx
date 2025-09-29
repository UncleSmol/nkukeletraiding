import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white shadow-lg z-40">
      <div
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-2 text-sm"
        style={{
          fontFamily: "var(--font-family-primary)",
        }}
      >
        <span className="font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Nkukele Trading & Projects (Pty)
          Ltd. All rights reserved.
        </span>
        <span>
          <a
            href="mailto:info@nkukele.co.za"
            className="hover:text-[var(--accent-red)] transition-colors"
          >
            info@nkukele.co.za
          </a>
          {" | "}
          <a
            href="tel:+27-XXX-XXX-XXX"
            className="hover:text-[var(--accent-red)] transition-colors"
          >
            +27 XXX XXX XXX
          </a>
        </span>
        <span>
          <a
            href="/privacy-policy"
            className="hover:text-[var(--accent-red)] transition-colors"
          >
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
