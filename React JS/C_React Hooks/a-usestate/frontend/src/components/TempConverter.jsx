import { useState } from "react";

export default function TempConverter() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit = celsius ? (celsius * 9) / 5 + 32 : "";

  return (
    <div className="p-6 bg-white rounded-xl shadow w-96 mx-auto">
      <input 
        type="number"
        className="border p-2 w-full rounded"
        placeholder="Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />

      <h2 className="mt-4 text-xl font-bold">
        Fahrenheit: {fahrenheit}
      </h2>
    </div>
  );
}
