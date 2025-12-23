import axios from 'axios';
import React, { useState } from 'react'

const AxiosPost = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !email) {
            setMessage('Both fields are required');
            return;
        }
        const userData = { name, email }
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
            console.log(res.data);
            setMessage('User submitted successsfully')
        } catch (error) {
            console.error(error);
            setMessage("error submitting user")
            
            

        }
    }
    return (
        <div>
            <h2>Submit User</h2>
            <form onSubmit={handleSubmit}>

                {/* name */}
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />

                {/* email */}
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />

                <button type='submit'>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default AxiosPost
