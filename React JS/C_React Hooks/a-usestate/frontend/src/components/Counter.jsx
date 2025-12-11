import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-gray-200 p-6 rounded-xl text-center">
            <h2 className="text-xl font-bold">Count: {count}</h2>
            <button onClick={() => setCount(count + 1)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
        </div>
    );
}