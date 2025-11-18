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
        const{name, value} = e.target; //called every time a user types or changes from feild.

        setFormData(prev => ({
            ...prev,  //uses the spread operator to keep other values unchanged
            [name]:value  //update formData using the input's name as ket & the values as the new value.
        }))
    }

    return (


        <form>
            <div>
                <input
                    type="text"
                    value={formData.name}
                    placeholder='Name'
                    name='name'
                    onChange={handleChange} />
            </div>

            {/* email */}
            <div>
                <input type="email"
                    name='email'
                    value={formData.email}
                    placeholder='Your Email'
                    onChange={handleChange}
                />
            </div>

            <div>
                <input type="age"
                    name='age'
                    value={formData.age}
                    placeholder='Your age'
                    onChange={handleChange} />
            </div>

            <div>
                <input type="password"
                    name='password'
                    value={formData.password}
                    placeholder='password'
                    onChange={handleChange} />
            </div>

            <div>
                <input type="password"
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    placeholder='confirm Password'
                    onChange={handleChange} />
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
           
                <label>
                    <input type="radio"
                        name='gender'
                        value='female'
                        checked={formData.gender == 'female'}
                        onChange={handleChange}
                    />
                    female
                </label>
            </div>
            <button type='submit'>Submit</button>


        </form>

    )
}

export default Form
