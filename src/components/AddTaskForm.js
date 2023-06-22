import React from 'react'

function AddTaskForm({newTask,handleSubmit,handleInputchange}) {
  return (
    <form onSubmit={handleSubmit} className="form">
        <lable htmlFor="newitem">Add to to do List</lable>
        <input
          type="text"
          id="newitem"
          value={newTask}
          onChange={handleInputchange}
        />
        <button type="submit">Add Item</button>
      </form>
  )
}

export default AddTaskForm