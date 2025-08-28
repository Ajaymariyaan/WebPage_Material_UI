import { useState } from "react";

export default function UserPage() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const[message,setMessage]=useState("");
  const[oldName,setOldName]=useState("");
  const[newName,setNewName]=useState("");
  const[updateMessage,setUpdateMessage]= useState("")


  const addUser = async () => {
    if (!name) return;
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    
    setMessage(`${name} is Added Succesfully`)
    setName("");
  };


  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async () => {
  if (!name) return;
  const res = await fetch("/api/users", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  const data = await res.json();
//   alert(data.message);
setMessage(`${name} is Deleted Successfully`)
};

  const updateUser = async () => {
  if (!oldName || !newName) return;
  const res = await fetch("/api/users", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ oldName, newName }),
  });
  const data = await res.json();
//   alert(data.message);
setUpdateMessage(`the Old name:${oldName} is changed as ${newName}`)
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

     

      <button onClick={addUser}>Add User</button>
      <button onClick={fetchUsers} style={{ marginLeft: "10px" }}>
        Display The User
      </button>
      <button onClick={deleteUser}>Delete the User</button>
      <h3>{message}</h3>
      
      <h2>All Users:</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>

       <input
  placeholder="Old Name"
  value={oldName}
  onChange={(e) => setOldName(e.target.value)}
/>
<input
  placeholder="New Name"
  value={newName}
  onChange={(e) => setNewName(e.target.value)}
/>
<button onClick={updateUser}>Update User</button>

<h2>{updateMessage}</h2>
    </div>
  );
}
