"use client";
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Add your services content here */}
    </motion.section>
  );
}
