import { useEffect, useState } from "react";

export default function WindowSize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow text-center">
      <h1 className="text-xl font-bold">Window Width: {size}px</h1>
    </div>
  );
}