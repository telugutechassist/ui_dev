import React, { useState } from "react";
import "./Register.css";

function Register() {
  const initialValues = {userType: "",username: "",email: "",phone: "",    gender: "", grade: "",  studentId: "", experience: "", licence: "", children: "", 
  schoolName: "" 
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form values
    const errors = validate(formValues);
    
    // Set the form errors
    setFormErrors(errors);
  
    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      // If no errors, submit the form
      console.log("Form submitted successfully!");
      
      // Reset form values to initial state after submission
      setFormValues(initialValues);
      
      // Set isSubmit to true if you need to track form submission
      setIsSubmit(true);
    } else {
      // If there are errors, you can choose to handle them as needed.
      // In this example, we simply log them.
      console.log("Form has validation errors:", errors);
    }
  };
  
  

  const validate = (values) => {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = "Username is required";
    }
  
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    if (!values.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
  
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
  
    if (values.userType === "student") {
      if (!values.grade.trim()) {
        errors.grade = "Grade is required for students";
      }
  
      if (!values.studentId.trim()) {
        errors.studentId = "Student ID is required for students";
      }
    }
  
    if (values.userType === "teacher" && !values.experience.trim()) {
      errors.experience = "Experience is required for teachers";
    }
  
    if (values.userType === "bus_driver" && !values.licence.trim()) {
      errors.licence = "Licence is required for bus drivers";
    }
  
    if (values.userType === "parent" && !values.children.trim()) {
      errors.children = "Children information is required for parents";
    }
  
    if (values.userType === "admin" && !values.schoolName.trim()) {
      errors.schoolName = "School name is required for admins";
    }
  
    return errors;
  };
  
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>User Type</label>
            <select
              name="userType"
              value={formValues.userType}
              onChange={handleChange}
              
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
              <option value="bus_driver">Bus Driver</option>
            </select>
            <p>{formErrors.userType}</p>
          </div>

          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
            <p>{formErrors.username}</p>
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
          </div>

          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            <p>{formErrors.phone}</p>
          </div>

          <div className="field">
            <label>Gender</label>
            <select
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p>{formErrors.gender}</p>
          </div>

          {formValues.userType === "student" && (
            <>
              <div className="field">
                <label>Grade</label>
                <input
                  type="text"
                  name="grade"
                  placeholder="Grade"
                  value={formValues.grade}
                  onChange={handleChange}
                />
                <p>{formErrors.grade}</p>
              </div>

              <div className="field">
                <label>Student ID</label>
                <input
                  type="text"
                  name="studentId"
                  placeholder="Student ID"
                  value={formValues.studentId}
                  onChange={handleChange}
                />
                <p>{formErrors.studentId}</p>
              </div>
            </>
          )}

          {formValues.userType === "teacher" && (
            <div className="field">
              <label>Experience</label>
              <input
                type="text"
                name="experience"
                placeholder="Experience"
                value={formValues.experience}
                onChange={handleChange}
              />
              <p>{formErrors.experience}</p>
            </div>
          )}

          {formValues.userType === "bus_driver" && (
            <div className="field">
              <label>Licence</label>
              <input
                type="text"
                name="licence"
                placeholder="Licence"
                value={formValues.licence}
                onChange={handleChange}
              />
              <p>{formErrors.licence}</p>
            </div>
          )}

          {formValues.userType === "parent" && (
            <div className="field">
              <label>Children</label>
              <input
                type="text"
                name="children"
                placeholder="Children"
                value={formValues.children}
                onChange={handleChange}
              />
              <p>{formErrors.children}</p>
            </div>
          )}

          {formValues.userType === "admin" && (
            <div className="field">
              <label>School Name</label>
              <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={formValues.schoolName}
                onChange={handleChange}
              />
              <p>{formErrors.schoolName}</p>
            </div>
          )}

          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;