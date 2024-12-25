import React, { useState, useEffect } from "react";

export default function ToDo() {
  const [testCase, setTestCase] = useState(false);
  const [toDos, setToDos] = useState([]);

  const addToggle = () => {
    setTestCase(!testCase);
  };

  const [formData, setFormData] = useState({
    title: "",
    dueDate: new Date().toISOString().split("T")[0],
    priority: "High",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.title);
    console.log(formData.dueDate);
    console.log(formData.priority);

    setFormData({
      title: "",
      dueDate: new Date().toISOString().split("T")[0], // just to convert the method into TODAY's date for default.
      priority: "High",
    });

    setToDos([...toDos, formData]);
    setTestCase(!testCase);
  };

  const deleteToDo = (index) => {
    setToDos(
      toDos.filter((toDo, i) => {
        return i !== index;
      })
    );
  };

  return (
    <div className="toDo">
      <div className="sideBar">
        <button className="addTask" onClick={addToggle}>
          Add task
        </button>
        <div className="search">Search</div>
        <div className="inbox">Inbox</div>
        <div className="today">Today</div>
        <div className="upcoming">Upcoming</div>
      </div>

      <div className="mainBar">
        <div className="toDoHeader">To Do</div>
        <div className="toDoLists">
          {toDos.length > 0 ? (
            <ul>
              {toDos.map((task, index) => {
                return (
                  <li key={index}>
                    <strong>{task.title}</strong> - {task.dueDate} -{" "}
                    {task.priority}
                    <input type="checkbox" />
                    <button onClick={() => deleteToDo(index)}>Delete</button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No tasks available</p>
          )}
        </div>

        {testCase && (
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Date:
              <input
                name="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Priority
              <select
                name="priority"
                onChange={handleChange}
                value={formData.priority}
                required
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
