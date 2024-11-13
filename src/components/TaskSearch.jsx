// import React from 'react'

const TaskSearch = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg bg-slate-700"
      />
    </div>
  )
}

export default TaskSearch
