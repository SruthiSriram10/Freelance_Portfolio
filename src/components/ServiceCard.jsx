import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${service.gradient})` }}
      />
      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-full h-full text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;