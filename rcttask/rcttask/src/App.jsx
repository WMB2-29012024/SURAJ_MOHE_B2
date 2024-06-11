import React, { useEffect, useState } from "react";
import Edit from "./component/Edit";
const App = () => {
  const [data, setData] = useState([]);
  const [delet, setDelet] = useState("none");
  const [flag, setFlag] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // State for selected user

  const handleDeletBtn = (user) => {
    if (!flag) {
      setDelet("block");
      setFlag(true);
      setSelectedUser(user); // Set the selected user
    } else {
      setDelet("none");
      setFlag(false);
      setSelectedUser(null); // Clear the selected user
    }
  };

  const handleDelete = () => {
    if (selectedUser) {
      // Remove the selected user from the data array
      setData(data.filter((user) => user.id !== selectedUser.id));
      setDelet("none");
      setFlag(false);
      setSelectedUser(null); // Clear the selected user
    }
  };

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
            <th>Suite</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
              <td>{user.address.suite}</td>
              <td className="icons">
                <div className="icon-section">
                 
                  <img
                    onClick={() => handleDeletBtn(user)} // Pass the user to the handler
                    src="./trash.svg"
                    alt="Delete"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && ( // Only show the modal if a user is selected
        <div className="dletepop" style={{ display: delet }}>
          <div className="dlettop">
            <div className="dletop-part1">
              <img style={{ display: delet }} src="./Featured trash.svg" alt="" />
              <img
                onClick={handleDeletBtn}
                style={{ display: delet, width: "60px" }}
                src="./Button close X.svg"
                alt=""
              />
            </div>
            <div className="dletop-part2">
              <h1>Delete User?</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eligendi!</h4>
            </div>
          </div>
          <div className="dletbottom">
            <button className="deltebtn" onClick={handleDelete}>Delete</button><br/>
            <button onClick={handleDeletBtn} className="canclebtn">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
