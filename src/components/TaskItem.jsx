// import React from 'react'

const TaskItem = ({task,deleteTask,toggleCompletion}) => {
  return (
    <li>
        <input type="checkbox" checked={task.completed} onChange={()=> toggleCompletion(task.id)} />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
        <button onClick={()=> deleteTask(task.id)} > Delete </button>
      
    </li>
  )
}

export default TaskItem
