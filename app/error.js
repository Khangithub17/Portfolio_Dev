'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong!</h2>
      <button
        className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
} 