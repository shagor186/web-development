import { useState } from "react";

export default function InputBox() {
    const [text, setText] = useState('');

    return (
        <div className="p-6 bg-white rounded-xl shadow text-center">
            <input type="text" placeholder="Enter text: " className="border p-2 rounded w-full" value={text} onChange={(e) => setText(e.target.value)}/>
            <p className="mt-4 text-lg font-semibold">You types: {text} </p>
        </div>
    );
}