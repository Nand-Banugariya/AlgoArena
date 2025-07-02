import React, { useState } from 'react';
import { Code, Star, Clock, Users, ChevronRight, Play, List, Layers, Book, Database, Hash } from 'lucide-react';

const topicIcons = {
  'Array': List,
  'Linked List': Layers,
  'Stack': List, // fallback icon
  'Queue': Users, // fallback icon
  'Tree': Book, // fallback icon
  'Binary Search Tree': Book, // fallback icon
  'Graph': Database, // fallback icon
  'Heap': Database, // fallback icon
  'Trie': Book, // fallback icon
  'Hash Table': Hash,
};

const dsaTopics = [
  {
    id: 1,
    title: 'Array',
    description: 'Master array operations and solve problems like Two Sum, Subarray Sum, and more.',
    difficulty: 'Beginner',
    participants: 15420,
    timeEstimate: '15 min',
    rating: 4.8,
    tags: ['Arrays'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 2,
    title: 'Linked List',
    description: 'Learn about singly, doubly, and circular linked lists and their applications.',
    difficulty: 'Beginner',
    participants: 11200,
    timeEstimate: '20 min',
    rating: 4.7,
    tags: ['Linked List'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Stack',
    description: 'Understand stack operations and solve problems like Valid Parentheses, Min Stack, etc.',
    difficulty: 'Beginner',
    participants: 9800,
    timeEstimate: '18 min',
    rating: 4.6,
    tags: ['Stack'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Queue',
    description: 'Explore queue and its types: simple, circular, and priority queues.',
    difficulty: 'Beginner',
    participants: 8700,
    timeEstimate: '17 min',
    rating: 4.5,
    tags: ['Queue'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Tree',
    description: 'Learn about binary trees, traversals, and tree-based problems.',
    difficulty: 'Intermediate',
    participants: 12340,
    timeEstimate: '25 min',
    rating: 4.7,
    tags: ['Tree'],
    color: 'from-teal-500 to-green-500',
  },
  {
    id: 6,
    title: 'Binary Search Tree',
    description: 'Understand BST properties and solve search, insert, and delete problems.',
    difficulty: 'Intermediate',
    participants: 10200,
    timeEstimate: '22 min',
    rating: 4.6,
    tags: ['BST'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 7,
    title: 'Graph',
    description: 'Explore graph representations, traversals (BFS, DFS), and shortest path algorithms.',
    difficulty: 'Advanced',
    participants: 9000,
    timeEstimate: '30 min',
    rating: 4.8,
    tags: ['Graph'],
    color: 'from-pink-500 to-yellow-500',
  },
  {
    id: 8,
    title: 'Heap',
    description: 'Learn about min-heap, max-heap, and heap-based priority queues.',
    difficulty: 'Intermediate',
    participants: 7800,
    timeEstimate: '20 min',
    rating: 4.5,
    tags: ['Heap'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 9,
    title: 'Trie',
    description: 'Implement trie for efficient string search and autocomplete problems.',
    difficulty: 'Advanced',
    participants: 6500,
    timeEstimate: '28 min',
    rating: 4.7,
    tags: ['Trie'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 10,
    title: 'Hash Table',
    description: 'Understand hash maps, collision handling, and solve lookup problems.',
    difficulty: 'Intermediate',
    participants: 11000,
    timeEstimate: '19 min',
    rating: 4.8,
    tags: ['Hash Table'],
    color: 'from-gray-500 to-gray-700',
  },
  {
    id: 11,
    title: 'Two Pointers',
    description: 'Learn the two pointers technique for solving array and string problems efficiently.',
    difficulty: 'Intermediate',
    participants: 9500,
    timeEstimate: '16 min',
    rating: 4.7,
    tags: ['Two Pointers'],
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    id: 12,
    title: 'Sliding Window',
    description: 'Master the sliding window approach for subarray and substring problems.',
    difficulty: 'Intermediate',
    participants: 8700,
    timeEstimate: '18 min',
    rating: 4.6,
    tags: ['Sliding Window'],
    color: 'from-lime-500 to-green-500',
  },
  {
    id: 13,
    title: 'Recursion',
    description: 'Understand recursion and solve problems like factorial, Fibonacci, and backtracking.',
    difficulty: 'Intermediate',
    participants: 10500,
    timeEstimate: '20 min',
    rating: 4.7,
    tags: ['Recursion'],
    color: 'from-rose-500 to-red-500',
  },
  {
    id: 14,
    title: 'Dynamic Programming',
    description: 'Learn DP concepts and solve problems like knapsack, LIS, and more.',
    difficulty: 'Advanced',
    participants: 8000,
    timeEstimate: '35 min',
    rating: 4.9,
    tags: ['Dynamic Programming', 'DP'],
    color: 'from-blue-700 to-indigo-700',
  },
  {
    id: 15,
    title: 'Maths',
    description: 'Tackle math-based problems including primes, GCD, combinatorics, and more.',
    difficulty: 'Beginner',
    participants: 9200,
    timeEstimate: '14 min',
    rating: 4.5,
    tags: ['Maths'],
    color: 'from-yellow-600 to-orange-600',
  },
];

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Beginner': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
    case 'Intermediate': return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
    case 'Advanced': return 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30';
    case 'Interview Prep': return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30';
    default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30';
  }
};

const Practise = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleTopics = expanded ? dsaTopics : dsaTopics.slice(0, 3);

  return (
    <div className="w-full max-w-7xl mx-auto pt-32 pb-12 px-4 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleTopics.map((topic) => {
          const Icon = topicIcons[topic.title] || Code;
          return (
            <div
              key={topic.id}
              className="bg-gray-900 rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 group flex flex-col justify-between min-h-[350px]"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${topic.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(topic.difficulty)}`}>
                  {topic.difficulty}
                </span>
              </div>
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-2">
                {topic.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{topic.participants.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{topic.timeEstimate}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>{topic.rating}</span>
                </div>
              </div>
              {/* Action Button */}
              <button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg"
              >
                <Play className="w-4 h-4" />
                <span>Start Challenge</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          );
        })}
      </div>
      {!expanded && dsaTopics.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
            onClick={() => setExpanded(true)}
          >
            Expand all
          </button>
        </div>
      )}
      {expanded && dsaTopics.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 px-8 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-950 transition-all shadow-lg"
            onClick={() => setExpanded(false)}
          >
            Collapse
          </button>
        </div>
      )}
    </div>
  );
};

export default Practise;
