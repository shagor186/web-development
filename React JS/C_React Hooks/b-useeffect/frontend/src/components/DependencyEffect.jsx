import { useEffect, useState } from "react";

export default function DependencyEffect() {
    const [value, setValue] = useState('');

    useEffect(() => {
        console.log("Value changed:", value)
    }, [value]);

    return (
        <div className="p-6 bg-white rounded-xl shadow text-center">
            <input onChange={(e) => setValue(e.target.value)} placeholder="Type something" className="border p-2 w-full rounded" />
        </div>
    );
}