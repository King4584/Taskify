/* eslint-disable react/prop-types */
// import React from 'react'

const TaskItem = ({task,deleteTask,toggleCompletion}) => {
  return (
    <li className="flex items-center justify-between p-2 bg-gray-100 rounded-lg shadow-sm">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
          className="mr-2"
        />
        <span className={`text-black ${task.completed ? 'line-through' : ''}`} >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem
