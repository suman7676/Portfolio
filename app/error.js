"use client"; 

import { useEffect } from "react";

export default function Error({ error, reset }) {
  
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-red-50 text-red-900">
      <h1 className="text-4xl font-bold mb-4">কিছু একটা ভুল হয়েছে 😢</h1>
      <p className="mb-4">{error?.message || "Unknown error occurred"}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Retry
      </button>
    </div>
  );
}
