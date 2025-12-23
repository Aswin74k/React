import React, { useEffect, useState } from 'react'
import './crud.css'

const SessionCrud = () => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    // LOAD FROM SESSION STORAGE
    useEffect(() => {
        const stored = sessionStorage.getItem('users');
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser);
            } catch (error) {
                console.log('Error Parsing data', error);
                sessionStorage.removeItem("users");
            }
        }
        setIsLoaded(true);
    }, []);

    // SAVE TO SESSION STORAGE
    useEffect(() => {
        if (isLoaded) {
            sessionStorage.setItem("users", JSON.stringify(users));
        }
    }, [users, isLoaded]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = "Name is required!";
        else if (!/^[A-Za-z\s]*$/.test(name)) newErrors.name = "Only alphabets allowed";

        if (!email) newErrors.email = "Email is required!";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Invalid email";

        if (!age) newErrors.age = "Age is required!";
        else if (isNaN(age) || age < 1 || age > 120)
            newErrors.age = "Age must be between 1 and 120";

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (editMode) {
            setUsers(users.map(u => u.id === formData.id ? formData : u));
            setEditMode(false);
        } else {
            setUsers([...users, { ...formData, id: Date.now().toString() }]);
        }

        setFormData({ id: '', name: '', email: '', age: '' });
        setErrors({});
    }

    const handleEdit = (user) => {
        setFormData(user);
        setEditMode(true);
    }

    const handleCancel = () => {
        setFormData({ id: '', name: '', email: '', age: '' });
        setErrors({});
        setEditMode(false);
    }

    const handleClearAll = () => {
        if (window.confirm("Clear all data?")) {
            setUsers([]);
            sessionStorage.removeItem("users");
            setEditMode(false);
        }
    }

    const handleDelete = (id) => {
        setUsers(users.filter(u => u.id !== id));
    }

    return (
        <div className='formnew'>
            <h1>React CRUD (Session Storage)</h1>

            <form onSubmit={handleSubmit}>
                <input name="name" value={formData.name} placeholder="Name" onChange={handleChange} />
                {errors.name && <p style={{color:'red'}}>{errors.name}</p>}

                <input name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}

                <input name="age" value={formData.age} placeholder="Age" onChange={handleChange} />
                {errors.age && <p style={{color:'red'}}>{errors.age}</p>}

                <button type="submit">{editMode ? "Update" : "Add"}</button>
                {editMode && <button type="button" onClick={handleCancel}>Cancel</button>}
            </form>

            <h2>User List</h2>
            {users.length > 0 && <button onClick={handleClearAll}>Clear All</button>}

            {users.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th><th>Email</th><th>Age</th><th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => (
                            <tr key={u.id}>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.age}</td>
                                <td>
                                    <button onClick={() => handleEdit(u)}>Edit</button>
                                    <button onClick={() => handleDelete(u.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <p>No users added</p>}
        </div>
    )
}

export default Crud;
