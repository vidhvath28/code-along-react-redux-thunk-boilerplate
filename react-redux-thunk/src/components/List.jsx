import React, { useState, useEffect } from "react";
import axios from "axios";
export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <div>
      {data.map((e) => {
        return (
          <div className="card" key={e.id}>
            <h2 className="name">{e.name}</h2>
            <p className="email">
              <i>{e.email}</i>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}