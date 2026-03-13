import React, { useState } from "react";

function ApiDemo() {

  const [data, setData] = useState([]);

  const fetchEmployees = async () => {

    const res = await fetch("https://dummy-json.mock.beeceptor.com/posts");
    const result = await res.json();

    setData(result);
  };

  return (
    <div className="container">

      <h2>API Demo</h2>

      <button className="api-btn" onClick={fetchEmployees}>
        Fetch Employees
      </button>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <b>{item.title}</b> - {item.body}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ApiDemo;


