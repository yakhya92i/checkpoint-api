import React, { useState, useEffect } from 'react';
import './App.css';

function UserList() {
const [users, setUsers] = useState([]);

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => setUsers(data));
}, []);

return (
    <div className="UserTable">
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Street</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
            <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.street}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
}

export default UserList;