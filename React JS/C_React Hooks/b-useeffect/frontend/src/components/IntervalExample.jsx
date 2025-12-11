import { useEffect } from "react";

export default function IntervalExample() {
  useEffect(() => {
    const t = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => clearInterval(t);
  }, []);

  return (
    <h2 className="text-center text-xl">Interval Running (check console)</h2>
  );
}