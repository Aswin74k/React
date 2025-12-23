import React, { useState } from "react";
import "./JobForm.css";

const JobForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        address: "",
        position: "",
        info: "",
        cv: null,
        cvName: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files[0]) {
            setFormData((p) => ({
                ...p,
                cv: files[0],
                cvName: files[0].name,
            }));
        } else {
            setFormData((p) => ({ ...p, [name]: value }));
        }
    };

    const validate = () => {
        const newErrors = {};
        const nameRe = /^[A-Za-z\s]+$/;
        const phoneRe = /^[0-9]{7,15}$/;

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        else if (!nameRe.test(formData.firstName)) newErrors.firstName = "Only alphabets allowed";

        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        else if (!nameRe.test(formData.lastName)) newErrors.lastName = "Only alphabets allowed";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email";

        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        else if (!phoneRe.test(formData.phone)) newErrors.phone = "Enter valid phone number";

        if (!formData.country) newErrors.country = "Please select country";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.position) newErrors.position = "Select desired position";


        if (!formData.cv) {
            newErrors.cv = "Please upload your CV";
        } else {
            const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
            if (!allowed.includes(formData.cv.type)) {
                newErrors.cv = "Only PDF or DOC/DOCX allowed";
            }
            if (formData.cv.size > 1 * 1024 * 1024) {
                newErrors.cv = "File must be less than 1 MB";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            city: "",
            address: "",
            position: "",
            info: "",
            cv: null,
            cvName: "",
        });
        setErrors({});
        const f = document.getElementById("cvInput");
        if (f) f.value = "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;


        console.log("Submitting form:", formData);
        alert("Form submitted successfully!");

        handleReset();
    };

    return (
        <div className="page-wrapper">
            <h2 className="form-title">Job Application Form </h2>

            <div className="job-form-container">
                <form className="job-form" onSubmit={handleSubmit} noValidate>

                    <div className="form-row">
                        <div className="form-group">
                            <input
                                name="firstName"
                                type="text"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <div className="error">{errors.firstName}</div>}
                        </div>

                        <div className="form-group">
                            <input
                                name="lastName"
                                type="text"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <div className="error">{errors.lastName}</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>

                        <div className="form-group">
                            <input
                                name="phone"
                                type="text"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <div className="error">{errors.phone}</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <select name="country" value={formData.country} onChange={handleChange}>
                                <option value="">Select country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                                <option value="Australia">Australia</option>
                            </select>
                            {errors.country && <div className="error">{errors.country}</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <input
                                name="city"
                                type="text"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <div className="error">{errors.city}</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <input
                                name="address"
                                type="text"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <div className="error">{errors.address}</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <select name="position" value={formData.position} onChange={handleChange}>
                                <option value="">Choose desired position</option>
                                <option value="Frontend Developer">Frontend Developer</option>
                                <option value="Backend Developer">Backend Developer</option>
                                <option value="UI/UX Designer">UI/UX Designer</option>
                                <option value="Project Manager">Project Manager</option>
                            </select>
                            {errors.position && <div className="error">{errors.position}</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <textarea
                                name="info"
                                placeholder="Additional info"
                                value={formData.info}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-row file-row">
                        <div className="file-box full">
                            <div className="file-input-wrap">
                                <input
                                    id="cvInput"
                                    type="file"
                                    name="cv"
                                    accept=".pdf,.doc,.docx,application/msword,application/pdf"
                                    onChange={handleChange}
                                />
                                <div className="fake-input">
                                    <span className="cv-text">{formData.cvName || "Add your CV"}</span>
                                    <button
                                        type="button"
                                        className="browse-btn"
                                        onClick={() => document.getElementById("cvInput")?.click()}
                                    >
                                        Browse
                                    </button>
                                </div>
                            </div>

                            {errors.cv && <div className="error">{errors.cv}</div>}
                            <div className="file-note">Only: pdf / doc Size: lessthan 1 Mb</div>
                        </div>
                    </div>

                    <div className="form-row buttons-row">
                        <div className="button-wrap">
                            <button type="button" className="reset-btn" onClick={handleReset}>
                                Reset
                            </button>
                            <button type="submit" className="send-btn">
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobForm;