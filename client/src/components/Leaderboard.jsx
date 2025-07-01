import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Zap, Target } from 'lucide-react';

const Leaderboard = () => {
  const topUsers = [
    {
      rank: 1,
      name: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      score: 15420,
      streak: 45,
      badge: 'Coding Master',
      university: 'MIT',
    },
    {
      rank: 2,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      score: 14890,
      streak: 38,
      badge: 'Algorithm Expert',
      university: 'Stanford',
    },
    {
      rank: 3,
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      score: 14230,
      streak: 32,
      badge: 'Code Ninja',
      university: 'Harvard',
    },
    {
      rank: 4,
      name: 'Maria Garcia',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      score: 13780,
      streak: 28,
      badge: 'Problem Solver',
      university: 'Berkeley',
    },
    {
      rank: 5,
      name: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      score: 13450,
      streak: 25,
      badge: 'Tech Innovator',
      university: 'Caltech',
    },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-orange-500" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">#{rank}</span>;
    }
  };

  const getRankStyle = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-yellow-500/25';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-500 shadow-gray-500/25';
      case 3:
        return 'bg-gradient-to-r from-orange-400 to-orange-600 shadow-orange-500/25';
      default:
        return 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/25';
    }
  };

  return (
    <section id="leaderboard" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Top{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Performers
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how you rank against coding enthusiasts from top universities worldwide.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: Trophy, label: 'Active Competitors', value: '12,847', color: 'from-yellow-500 to-orange-500' },
            { icon: Zap, label: 'Challenges Completed', value: '847K', color: 'from-purple-500 to-pink-500' },
            { icon: Target, label: 'Average Score', value: '8,420', color: 'from-blue-500 to-teal-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
            <h3 className="text-2xl font-bold text-white text-center">Global Leaderboard</h3>
          </div>

          <div className="p-6">
            {topUsers.map((user, index) => (
              <motion.div
                key={user.rank}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center p-4 rounded-xl mb-4 transition-all hover:shadow-lg ${
                  user.rank <= 3
                    ? 'bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-600'
                    : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {/* Rank */}
                <div className="flex items-center justify-center w-12 h-12 mr-4">
                  {getRankIcon(user.rank)}
                </div>

                {/* Avatar */}
                <div className="relative mr-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
                  />
                  {user.rank <= 3 && (
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${getRankStyle(user.rank)} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                      {user.rank}
                    </div>
                  )}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {user.name}
                    </h4>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium">
                      {user.badge}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {user.university}
                  </div>
                </div>

                {/* Stats */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {user.score.toLocaleString()}
                  </div>
                  <div className="flex items-center justify-end space-x-1 text-sm text-gray-600 dark:text-gray-400">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <span>{user.streak} day streak</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Full Leaderboard */}
          <div className="p-6 bg-gray-50 dark:bg-gray-700 text-center">
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Leaderboard
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leaderboard;