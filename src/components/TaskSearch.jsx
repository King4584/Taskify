/* eslint-disable react/prop-types */
// import React from 'react'
import { motion } from 'framer-motion';

const TaskSearch = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="mb-4">
      <motion.input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        whileFocus={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
        }}
      />
    </div>
  )
}

export default TaskSearch
