import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/prods");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <table border={1}>
              <tr>
                <th>nom</th>
                <th>prix</th>
                <th>date</th>
              </tr>
              <tr>
                <td>
                  <h1>{item.nom}</h1>
                </td>
                <td>
                  <h1>{item.prix}</h1>
                </td>
                <td>
                  <h1> {item.createdAt.substring(0, 10)}</h1>
                </td>
              </tr>
            </table>
          </div>
        ))}
    </div>
  );
}

export default App;
