import { useEffect } from "react";

export default function RunOnce() {
    useEffect(() => {
        console.log('Component Mounted!');
    }, []);

    return (
        <div className="p-6 bg-white rounded-xl shadow text-center">
            <h1 className="text-xl">This runs only once!</h1>
        </div>
    );
}