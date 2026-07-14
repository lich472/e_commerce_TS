import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-40">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-10">
        {/* Logo + Description */}
        <div>
          <img src="/otherBrand.png" className="mb-5 w-32" alt="Other Brand Logo" />
          <p className="text-sm leading-relaxed">
            Mobile Hospital is one of the best businesses for trading and fixing any issue related to your mobile phone. We guarantee to offer you a reasonable price.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-gray-500">Home</a></li>
            <li><a href="/about" className="hover:text-gray-500">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@mobilehospital.com</li>
            <li>Phone: +61 123 456 789</li>
            <li>Adelaide, SA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
