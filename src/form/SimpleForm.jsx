import React, { useState } from 'react'

const SimpleForm = () => {
    const [email, setEmail] = useState('');
     const [error, setError] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
        setError("Email is required");
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        setError("Email is invalid");
    } else {
        setError('');
        alert('form submitted');
        console.log('form email', email);
    }
}
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="email" 
        value={email}
        placeholder='Enter your email'
        onChange={(e) => setEmail(e.target.value)}
        /> <br /><br />
        {error && <p style={{color: 'red'}}>{error}</p>}

        <button type='submit'>Submit</button>
    </form>
  )
}

export default SimpleForm
