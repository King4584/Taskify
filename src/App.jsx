import { useEffect, useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTask = localStorage.getItem('tasks');
    if (savedTask) {
      setTasks(JSON.parse(savedTask));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (tasks.length) {
      console.log("Saving tasks to localStorage:", tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (title) => {
    if (title.trim() === '') return; // Prevent adding empty tasks
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTask = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <motion.div
      className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-white mb-6 text-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        Taskify - Simplify Your Day, Amplify Your Productivity
      </motion.h1>

      <motion.div
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 space-y-4 drop-shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        <TaskInput addTask={addTask} />
        <TaskSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TaskList
          tasks={filteredTask}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
        />
      </motion.div>
    </motion.div>
  );
};

export default App;
