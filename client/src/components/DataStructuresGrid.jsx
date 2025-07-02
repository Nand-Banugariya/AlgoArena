import React from 'react';
import { List, Layers, Repeat, TreePine, Hash, Brackets, BookOpen, Database, Code2, Box } from 'lucide-react';

const dataStructures = [
  { name: 'Array', icon: <List className="w-8 h-8 text-blue-500" /> },
  { name: 'Linked List', icon: <Layers className="w-8 h-8 text-green-500" /> },
  { name: 'Stack', icon: <Box className="w-8 h-8 text-purple-500" /> },
  { name: 'Queue', icon: <Repeat className="w-8 h-8 text-yellow-500" /> },
  { name: 'Tree', icon: <TreePine className="w-8 h-8 text-emerald-500" /> },
  { name: 'Hash Table', icon: <Hash className="w-8 h-8 text-pink-500" /> },
  { name: 'Graph', icon: <Brackets className="w-8 h-8 text-red-500" /> },
  { name: 'Heap', icon: <BookOpen className="w-8 h-8 text-indigo-500" /> },
  { name: 'Trie', icon: <Database className="w-8 h-8 text-cyan-500" /> },
  { name: 'Segment Tree', icon: <Code2 className="w-8 h-8 text-orange-500" /> },
];

const DataStructuresGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
    {dataStructures.map((ds) => (
      <div
        key={ds.name}
        className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 cursor-pointer group"
      >
        <div className="mb-3 group-hover:scale-110 transition-transform">{ds.icon}</div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">{ds.name}</h3>
      </div>
    ))}
  </div>
);

export default DataStructuresGrid;
