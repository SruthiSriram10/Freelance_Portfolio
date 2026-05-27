import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group glass-card rounded-2xl overflow-hidden text-center"
    >
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-purple-600 dark:text-purple-400 mb-3">{member.role}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
        
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {member.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center gap-4">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800/10 text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;