import  { useState } from 'react'

const TaskInput = ({addTask}) => {
  const [taskTitle,setTaskTitle] = useState('');

  const handleAddTask=()=>{
    if(taskTitle.trim()){
        addTask(taskTitle);
        setTaskTitle('');
    }
  };
  
    return (
      <div className="flex items-center space-x-2">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a new task"
        className="flex-1 p-2 border border-gray-300 rounded-lg bg-slate-700"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  )
}

export default TaskInput
