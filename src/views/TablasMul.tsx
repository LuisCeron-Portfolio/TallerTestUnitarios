import { useState, useEffect } from "react";

export default function TablasMul() {
  const [number, setNumber] = useState<number | null>(null);
  const [result, setResult] = useState<number[]>([]);

  useEffect(() => {
    const savedNumber = window.localStorage.getItem('multiplicationNumber');
    const savedResult = window.localStorage.getItem('multiplicationResult');
    if (savedNumber) {
      setNumber(parseInt(savedNumber, 10));
    }
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    }
  }, []);

  useEffect(() => {
    if (number !== null) {
      window.localStorage.setItem('multiplicationNumber', number.toString());
    }
  }, [number]);

  useEffect(() => {
    window.localStorage.setItem('multiplicationResult', JSON.stringify(result));
  }, [result]);

  const handleClick = () => {
    if (number !== null) {
      setResult(Array.from({ length: 10 }, (_, i) => (i + 1) * number));
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Calculadora de Tablas de Multiplicar</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block text-gray-700 font-medium mb-2">Número:</label>
        <input 
          type="number" 
          value={number ?? ''} 
          onChange={e => setNumber(Number(e.target.value) || null)} 
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleClick}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 font-medium mb-4"
        >
          Generar
        </button>
        <ul className="list-disc list-inside">
          {result.map((val, i) => (
            <li key={i} className="text-gray-700">{`${number} x ${i + 1} = ${val}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
