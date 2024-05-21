import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Zip Code</th>
            <th>Phone</th>
            <th>City</th>
            <th>sutie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.address.zipcode}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
                <td><p>{user.address.suite}</p></td>
                <td className="icons">
                    <div className="icon-section">
                      <img src="./imgs/Frame13.svg" alt=""/>
                    </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
