import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Code } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every line of code we write."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Always learning and adopting the latest technologies."
    },
    {
      icon: Code,
      title: "Quality",
      description: "Clean, maintainable, and scalable code is our standard."
    }
  ];

  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">SheBuild</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are a collective of passionate women developers dedicated to building exceptional digital solutions that empower businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Founded in 2021, SheBuild emerged from a vision to create a space where talented women developers could build cutting-edge solutions while fostering an inclusive, supportive environment.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Today, our team of 5 expert developers has helped over 30 clients across various industries, from startups to enterprises, transform their ideas into successful digital products.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Mission</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Empower businesses through innovative, scalable digital solutions.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Vision</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">To be the leading women-led development agency globally.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Team working together"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;