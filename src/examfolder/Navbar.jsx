import React, { useState } from "react";
import Home from "./Home";
import EmployeeRegistration from "./EmployeeRegistration";
import EmployeeList from "./EmployeeList";
import ApiDemo from "./ApiDemo";
import PageNotFound from "./PageNotFound";

function Navbar() {

  const [page, setPage] = useState("home");
  const [employees, setEmployees] = useState([]);

  const addEmployee = (emp) => {
    setEmployees([...employees, emp]);
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;

      case "register":
        return <EmployeeRegistration addEmployee={addEmployee} />;

      case "employees":
        return <EmployeeList employees={employees} />;

      case "api":
        return <ApiDemo />;

      default:
        return <PageNotFound />;
    }
  };

  return (
    <div>

      <nav style={{ background: "blue", padding: "10px" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("register")}>Employee Registration</button>
        <button onClick={() => setPage("employees")}>Display Employees</button>
        <button onClick={() => setPage("api")}>ApiDemo</button>
      </nav>

      {renderPage()}

    </div>
  );
}

export default Navbar;