import React from "react";

const TaskForm = ({ name, HandleInputChange, createTask }) => {
  return (
    <form className="task-form" onSubmit={createTask}>
      <input
        type="text"
        placeholder="Add a Task"
        //name="name"
        value={name}
        onChange={HandleInputChange}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
