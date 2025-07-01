import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Challenges', href: '#challenges' },
        { name: 'Learn', href: '#learn' },
        { name: 'Practice', href: '#practice' },
        { name: 'Compete', href: '#compete' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Forums', href: '#forums' },
        { name: 'Discord', href: '#discord' },
        { name: 'Events', href: '#events' },
        { name: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Tutorials', href: '#tutorials' },
        { name: 'API', href: '#api' },
        { name: 'Support', href: '#support' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Privacy', href: '#privacy' },
        { name: 'Terms', href: '#terms' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#github', name: 'GitHub' },
    { icon: Twitter, href: '#twitter', name: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', name: 'LinkedIn' },
    { icon: Instagram, href: '#instagram', name: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  CodeAcademy
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering the next generation of developers through interactive learning, 
                challenging problems, and a supportive community.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Stay Updated</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <motion.button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400"
            >
              © 2024 CodeAcademy. All rights reserved. Built with ❤️ for students.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;