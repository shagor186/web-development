import { useState } from "react";

export default function CharCounter() {
  const [text, setText] = useState("");

  return (
    <div className="p-6 w-96 bg-gray-100 rounded-xl mx-auto">
      <textarea
        className="w-full border p-2 rounded"
        rows="4"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p className="mt-3 text-lg font-semibold">
        Characters: {text.length}
      </p>
    </div>
  );
}
