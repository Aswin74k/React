import React, { useEffect, useState } from "react";
import "./crud.css";

const SessionCrud = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });

  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // 🔹 Load users from sessionStorage
  useEffect(() => {
    const storedUsers = sessionStorage.getItem("users");
    if (storedUsers) {
      try {
        setUsers(JSON.parse(storedUsers));
      } catch (err) {
        console.error("Session storage error", err);
        sessionStorage.removeItem("users");
      }
    }
    setIsLoaded(true);
  }, []);

  // 🔹 Save users to sessionStorage
  useEffect(() => {
    if (isLoaded) {
      sessionStorage.setItem("users", JSON.stringify(users));
    }
  }, [users, isLoaded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const { name, email, age } = formData;

    if (!name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(name))
      newErrors.name = "Only alphabets allowed";

    if (!email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Invalid email";

    if (!age) newErrors.age = "Age is required";
    else if (isNaN(age) || age < 1 || age > 120)
      newErrors.age = "Age must be between 1 and 120";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (editMode) {
      setUsers(users.map((u) => (u.id === formData.id ? formData : u)));
      setEditMode(false);
    } else {
      setUsers([...users, { ...formData, id: Date.now().toString() }]);
    }

    setFormData({ id: "", name: "", email: "", age: "" });
    setErrors({});
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleCancel = () => {
    setFormData({ id: "", name: "", email: "", age: "" });
    setErrors({});
    setEditMode(false);
  };

  const handleClearAll = () => {
    if (window.confirm("Clear all session data?")) {
      setUsers([]);
      sessionStorage.removeItem("users");
      handleCancel();
    }
  };

  return (
    <div className="formnew">
      <h1>Session Storage CRUD</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>

        <button type="submit">
          {editMode ? "Update User" : "Add User"}
        </button>

        {editMode && (
          <button
            type="button"
            style={{ marginLeft: "10px" }}
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </form>

      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>User List</h2>
        {users.length > 0 && (
          <button
            style={{ backgroundColor: "red", marginLeft: "20px" }}
            onClick={handleClearAll}
          >
            Clear All
          </button>
        )}
      </div>

      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.age}</td>
                <td>
                  <button onClick={() => handleEdit(u)}>Edit</button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(u.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No User Added Yet</p>
      )}
    </div>
  );
};

export default SessionCrud;
