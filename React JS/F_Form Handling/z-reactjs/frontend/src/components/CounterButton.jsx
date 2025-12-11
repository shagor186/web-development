import { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Counter Button</h1>

      <div className="p-6 bg-white shadow-lg rounded-xl text-center">
        <p className="text-xl mb-4">Count: {count}</p>

        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
