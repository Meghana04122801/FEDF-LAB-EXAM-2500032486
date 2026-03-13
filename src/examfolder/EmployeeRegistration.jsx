import React, { useState } from "react";

function EmployeeRegistration({ addEmployee }) {

  const [emp, setEmp] = useState({
    empId: "",
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(emp);

    setEmp({
      empId: "",
      name: "",
      email: "",
      department: "",
      salary: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Registration</h2>

      <input
        name="empId"
        placeholder="Employee ID"
        value={emp.empId}
        onChange={handleChange}
      />

      <br />

      <input
        name="name"
        placeholder="Employee Name"
        value={emp.name}
        onChange={handleChange}
      />

      <br />

      <input
        name="email"
        placeholder="Email"
        value={emp.email}
        onChange={handleChange}
      />

      <br />

      <input
        name="department"
        placeholder="Department"
        value={emp.department}
        onChange={handleChange}
      />

      <br />

      <input
        name="salary"
        placeholder="Salary"
        value={emp.salary}
        onChange={handleChange}
      />

      <br />

      <button type="submit">Register</button>
    </form>
  );
}

export default EmployeeRegistration;