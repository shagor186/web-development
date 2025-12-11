import { useState } from "react";

export default function Todo() {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    const addTask = () => {
        if (task.trim() === '') return;
        setList([...list, task]);
        setTask('');
    };

    return (
        <div className="p-6 bg-gray-100 rounded-xl w-96 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Todo App</h1>
            <div className="flex gap-2">
                <input className="border p-2 rounded w-full" value={task} placeholder="Add a task" onChange={(e) => setTask(e.target.value)} />
                <button onClick={addTask} className="bg-blue-600 text-white px-4 rounded">Add</button>
            </div>
            <ul className="mt-4"> {list.map((item, i) => (
                <li key={i} className="bg-white p-2 my-2 rounded shadow"> {item} </li>
                ))}
            </ul>  
        </div>
    );
}