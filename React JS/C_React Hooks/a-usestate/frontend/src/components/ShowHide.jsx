import { useState } from "react";

export default function ShowHide() {
    const [show, setShow] = useState(true);
     
    return (
        <div className="p-6 bg-gray-100 rounded-xl">
            <button onClick={() => setShow(!show)}>Toggle Text</button>
            {show && <p className="mt-4 text-lg">This is visible text.</p>}
        </div>
    );
}