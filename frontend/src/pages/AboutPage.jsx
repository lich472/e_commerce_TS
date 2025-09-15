import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16 text-black">
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-black text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      {/* Company Intro */}
      <section className="mb-12 text-center">
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold">Mobile Hospital</span>, we are
          passionate about providing high-quality mobile phone repair and trade
          services. Our mission is to make technology accessible, affordable,
          and stress-free for everyone.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="grid sm:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Our Mission</h2>
          <p className="text-base leading-relaxed">
            We aim to deliver reliable, fast, and affordable solutions for all
            mobile phone problems, ensuring customer satisfaction with every
            repair and product we provide.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Our Values</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Honesty & Transparency</li>
            <li>Affordable & Fair Pricing</li>
            <li>Customer-First Service</li>
            <li>Innovation & Growth</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
