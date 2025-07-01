import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Trophy, Brain, Rocket } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'Interactive Coding',
      description: 'Practice with real-time code execution and instant feedback on your solutions.',
      color: 'from-purple-500 to-purple-600',
      delay: 0.1,
    },
    {
      icon: Users,
      title: 'Peer Learning',
      description: 'Collaborate with fellow learners, share knowledge, and grow together as a community.',
      color: 'from-blue-500 to-blue-600',
      delay: 0.2,
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized platform for seamless coding experience with zero lag.',
      color: 'from-teal-500 to-teal-600',
      delay: 0.3,
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Learn together with thousands of students and get help when you need it.',
      color: 'from-orange-500 to-orange-600',
      delay: 0.4,
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'Earn badges and certificates as you progress through your coding journey.',
      color: 'from-pink-500 to-pink-600',
      delay: 0.5,
    },
    {
      icon: Rocket,
      title: 'Career Ready',
      description: 'Build portfolio projects and prepare for technical interviews.',
      color: 'from-indigo-500 to-indigo-600',
      delay: 0.6,
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              CodeAcademy
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of coding education with our innovative platform designed for modern learners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group h-full"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full min-h-[300px] max-h-[300px]">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Features;