import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow w-96 mx-auto">
      <h1 className="text-xl font-bold mb-3">Users</h1>

      {users.map(u => (
        <div key={u.id} className="p-2 bg-white rounded shadow mb-2">
          {u.name}
        </div>
      ))}
    </div>
  );
}
