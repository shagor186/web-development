import { useState } from "react";

export default function BgChanger() {
    const [color, setColor] = useState('white');

    return (
        <div>
            <div className="w-full p-10 rounded-xl" style={{background: color}}>
                <h1 className="text-xl font-bold">Background: {color}</h1>
            </div>
            <div className="flex gap-4 mt-4">
                <button onClick={() => setColor('red')} className="px-4 py-2 bg-red-500 text-white rounded-lg">Red</button>
                <button onClick={() => setColor('green')} className="px-4 py-2 bg-green-500 text-white rounded-lg">Green</button>
                <button onClick={() => setColor('blue')} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Blue</button>
            </div>
        </div>
    );
}