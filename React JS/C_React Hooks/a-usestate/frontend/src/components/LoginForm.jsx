import { useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (user.email && user.password) setSubmitted(true);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-xl w-96 mx-auto">
      {!submitted ? (
        <>
          <input
            type="email"
            className="border p-2 w-full rounded mb-3"
            placeholder="Email"
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
          />
          <input
            type="password"
            className="border p-2 w-full rounded mb-3"
            placeholder="Password"
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Login
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold">Welcome!</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}
