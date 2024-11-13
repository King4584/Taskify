// import React from 'react'

import TaskItem from "./TaskItem"

const TaskList = ({tasks,deleteTask,toggleCompletion}) => {
  return (
    <ul>
        {tasks.map((task)=>(
            <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleCompletion={toggleCompletion} />
        ))}
      
    </ul>
  );
}

export default TaskList
