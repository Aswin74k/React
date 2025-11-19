import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target; //called every time a user types or changes from field.

        setFormData(prev => ({
            ...prev,  //uses the spread operator to keep other values unchanged
            [name]: value  //update formData using the input's name as ket & the values as the new value.
        }))
    }

    const validation = () => {
        const newErrors = {};

        const { name, email, age, password, confirmPassword, gender } = formData;
        if (!name.trim()) newErrors.name = "Name is required";
        else if (!/^[A-Za-z\s]*$/.test(name)) newErrors.name = "name should only contain alphabets";

        if (!email) newErrors.email = "Email is required!";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email is invalid"

        if (!age) newErrors.age = "age is required!";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "age must be between 1 and 120";

        if (!password) newErrors.password = "password is required";
        else if (password.length < 6) newErrors.password = "password must be atleast 6 characters";

        if (!confirmPassword) newErrors.confirmPassword = "please confirm your password";
        else if (password !== confirmPassword) newErrors.confirmPassword = "password do not match.";

        if (!gender) newErrors.gender = "Gender is required";

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("form submitted successfully");
            console.log('form data:', formData);

            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmPassword: '',
                gender: ''

            })

        }
    }

    return (


        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={formData.name}
                    placeholder='Name'
                    name='name'
                    onChange={handleChange} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>

            {/* email */}
            <div>
                <input type="email"
                    name='email'
                    value={formData.email}

                    placeholder='Your Email'
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            <div>
                <input type="age"
                    name='age'
                    value={formData.age}
                    placeholder='Your age'
                    onChange={handleChange} />
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            </div>

            <div>
                <input type="password"
                    name='password'
                    value={formData.password}
                    placeholder='password'
                    onChange={handleChange} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <div>
                <input type="password"
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    placeholder='confirm Password'
                    onChange={handleChange} />
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
            </div>

            <div>
                <label>
                    <input type="radio"
                        name='gender'
                        value='male'
                        checked={formData.gender == 'male'}
                        onChange={handleChange}
                    />
                    male
                </label>
                {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}


                <label>
                    <input type="radio"
                        name='gender'
                        value='female'
                        checked={formData.gender == 'female'}
                        onChange={handleChange}
                    />
                    female
                </label>
                {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
            </div>
            <button type='submit'>Submit</button>


        </form>

    )
}

export default Form
