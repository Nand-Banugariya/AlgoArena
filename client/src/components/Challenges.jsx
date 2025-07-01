import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Star, Clock, Users, ChevronRight, Play } from 'lucide-react';

const Challenges = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Interview Prep'];

  const challenges = [
    {
      id: 1,
      title: 'Two Sum Problem',
      description: 'Find two numbers in an array that add up to a target sum.',
      difficulty: 'Beginner',
      participants: 15420,
      timeEstimate: '15 min',
      rating: 4.8,
      tags: ['Arrays', 'Hash Table'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 2,
      title: 'Binary Tree Traversal',
      description: 'Implement different methods to traverse a binary tree structure.',
      difficulty: 'Intermediate',
      participants: 8750,
      timeEstimate: '30 min',
      rating: 4.6,
      tags: ['Trees', 'Recursion'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Dynamic Programming',
      description: 'Solve complex optimization problems using dynamic programming.',
      difficulty: 'Advanced',
      participants: 3240,
      timeEstimate: '45 min',
      rating: 4.9,
      tags: ['DP', 'Algorithms'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'System Design Basics',
      description: 'Design a scalable URL shortening service like bit.ly.',
      difficulty: 'Interview Prep',
      participants: 6890,
      timeEstimate: '60 min',
      rating: 4.7,
      tags: ['System Design', 'Scalability'],
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'String Manipulation',
      description: 'Master string algorithms and pattern matching techniques.',
      difficulty: 'Beginner',
      participants: 12340,
      timeEstimate: '20 min',
      rating: 4.5,
      tags: ['Strings', 'Patterns'],
      color: 'from-teal-500 to-green-500',
    },
    {
      id: 6,
      title: 'Graph Algorithms',
      description: 'Implement BFS, DFS, and shortest path algorithms.',
      difficulty: 'Advanced',
      participants: 4560,
      timeEstimate: '50 min',
      rating: 4.8,
      tags: ['Graphs', 'BFS', 'DFS'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const filteredChallenges = selectedCategory === 'All' 
    ? challenges 
    : challenges.filter(challenge => challenge.difficulty === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
      case 'Intermediate': return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
      case 'Advanced': return 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30';
      case 'Interview Prep': return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30';
    }
  };

  return (
    <section id="challenges" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Coding{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Challenges
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharpen your programming skills with our curated collection of coding challenges.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Challenges Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${challenge.color} flex items-center justify-center`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {challenge.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {challenge.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{challenge.participants.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{challenge.timeEstimate}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{challenge.rating}</span>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-4 h-4" />
                  <span>Start Challenge</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-2xl shadow-purple-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Challenges
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenges;