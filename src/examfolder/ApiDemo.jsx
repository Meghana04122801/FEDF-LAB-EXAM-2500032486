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

      <table border="1" cellPadding="10" style={{marginTop:"20px"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default ApiDemo;
