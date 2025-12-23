import React, { useState } from "react";
import "./ToDo.css";

export default function ToDo() {
  const [task, setTask] = useState("");
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!task.trim()) return;

    if (editIndex !== null) {
      const updated = [...pending];
      updated[editIndex].text = task;
      setPending(updated);
      setEditIndex(null);
    } else {
      setPending([...pending, { text: task }]);
    }
    setTask("");
  };

  const handleEdit = (index) => {
    setTask(pending[index].text);
    setEditIndex(index);
  };

  const handleDeletePending = (index) => {
    setPending(pending.filter((_, i) => i !== index));
  };

  const handleDeleteCompleted = (index) => {
    setCompleted(completed.filter((_, i) => i !== index));
  };

  const handleCheck = (index) => {
    const item = pending[index];
    setCompleted([...completed, item]);
    setPending(pending.filter((_, i) => i !== index));
  };

  const handleUncheck = (index) => {
    const item = completed[index];
    setPending([...pending, item]);
    setCompleted(completed.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>React To-Do </h2>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <h3>Pending Tasks</h3>
      {pending.length === 0 && <p>No pending tasks</p>}
      <ul>
        {pending.map((item, index) => (
          <li key={index} className="todo-item">
            <input type="checkbox" onChange={() => handleCheck(index)} />
            <span>{item.text}</span>

            <button className="small-btn" onClick={() => handleEdit(index)}>
              Edit
            </button>

            <button
              className="small-btn"
              onClick={() => handleDeletePending(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3>Tasks Completed </h3>
      {completed.length === 0 && <p>No completed tasks</p>}
      <ul>
        {completed.map((item, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              checked
              onChange={() => handleUncheck(index)}
            />
            <span className="completed-text">{item.text}</span>

            <button
              className="small-btn"
              onClick={() => handleDeleteCompleted(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}