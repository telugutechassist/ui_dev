import React, { useState } from 'react';
import './App.css'; // Import CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    age: '',
    gender: '',
    emailid: '',
    dob: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
   
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      
      console.log('Form Data:', formData);
      
      setFormData({
        firstname: '',
        lastname: '',
        phone: '',
        age: '',
        gender: '',
        emailid: '',
        dob: '',
        address: ''
      });
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    
    if (!data.firstname.trim()) {
      errors.firstname = 'First name is required';
    }
    if (!data.lastname.trim()) {
      errors.lastname = 'Last name is required';
    }
    if (!data.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    if (!data.age.trim()) {
      errors.age = 'Age is required';
    }
    if (!data.gender.trim()) {
      errors.gender = 'Gender is required';
    }
    if (!data.emailid.trim()) {
      errors.emailid = 'Email ID is required';
    } else if (!/\S+@\S+\.\S+/.test(data.emailid)) {
      errors.emailid = 'Invalid email address';
    }
    if (!data.dob.trim()) {
      errors.dob = 'Date of Birth is required';
    }
    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }
    return errors;
  };

  return (
    <div>
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            className={errors.firstname ? 'required' : ''}
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            className={errors.lastname ? 'required' : ''}
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={errors.phone ? 'required' : ''}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className={errors.age ? 'required' : ''}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className={errors.gender ? 'required' : ''}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
        <div>
          <label htmlFor="emailid">Email ID:</label>
          <input
            type="email"
            id="emailid"
            name="emailid"
            value={formData.emailid}
            onChange={handleInputChange}
            className={errors.emailid ? 'required' : ''}
          />
          {errors.emailid && <p className="error">{errors.emailid}</p>}
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className={errors.dob ? 'required' : ''}
          />
          {errors.dob && <p className="error">{errors.dob}</p>}
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={errors.address ? 'required' : ''}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
