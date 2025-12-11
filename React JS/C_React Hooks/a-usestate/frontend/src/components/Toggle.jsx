import { useState } from "react";

export default function Toggle() {
    const [on, setOn] = useState(false);

    return (
        <div className="p-6 text-center">
            <button onClick={() => setOn(!on)} className="px-6 py-2 bg-indigo-600 text-white rounded-lg">{on ? 'ON' : 'OFF'}</button>
        </div>
    );
}