import  { useState } from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle(''); // Clear the input field after adding the task
    }
  };

  return (
    <div className="flex items-center space-x-4 w-full max-w-md mx-auto">
      <motion.input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a new task"
        className="flex-1 p-3 border border-gray-300 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        whileFocus={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      />
      <motion.button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
        whileHover={{
          scale: 1.1,
          backgroundColor: '#2563eb',
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
          backgroundColor: '#1d4ed8',
          transition: { duration: 0.2 },
        }}
      >
        Add Task
      </motion.button>
    </div>

  );
};

export default TaskInput;
