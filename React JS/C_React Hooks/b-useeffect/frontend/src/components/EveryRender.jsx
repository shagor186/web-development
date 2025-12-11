import { useEffect, useState } from "react";

export default function EveryRender() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component Rendered")
    });

    return (
        <div className="p-6 bg-white rounded-xl shadow text-center">
            <h2 className="text-xl font-bold">Render Example</h2>
            <button onClick={() => setCount(count + 1)} className="bg-blue-600 text-white px-4 py-2 mt-3 rounded">Click {count} </button>
        </div>
    );
}