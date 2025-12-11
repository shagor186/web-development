import { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 text-center">
      <button 
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Open Modal
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80">
            <h2 className="text-xl font-bold">Modal Content</h2>
            <p className="mt-2">This is a modal popup.</p>
            <button 
              onClick={() => setOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
