import React, { useState, useEffect } from 'react';

const ContadorClics: React.FC = () => {
  const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem ("clickCounter");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("clickCounter", count.toString());
  }, [count]);

  const incrementCounter = () =>{
    setCount(prevCount => prevCount +1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Contador de Clics</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <p className="text-2xl font-semibold text-gray-700 mb-4">Clics: {count}</p>
        <button
          onClick={incrementCounter}
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-200 font-medium"
        >
          Incrementar
        </button>
        <button
          onClick={resetCounter}
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition duration-200 font-medium mt-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ContadorClics;
