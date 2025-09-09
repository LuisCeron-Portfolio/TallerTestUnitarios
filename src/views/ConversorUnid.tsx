import { useState, useEffect } from "react";

export default function ConversorUnid() {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number | null>(null);

  useEffect(() => {
    const savedCelsius = window.localStorage.getItem('celsius');
    const savedFahrenheit = window.localStorage.getItem('fahrenheit');
    if (savedCelsius) {
      setCelsius(parseFloat(savedCelsius));
    }
    if (savedFahrenheit) {
      setFahrenheit(parseFloat(savedFahrenheit));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('celsius', celsius.toString());
  }, [celsius]);

  useEffect(() => {
    if (fahrenheit !== null) {
      window.localStorage.setItem('fahrenheit', fahrenheit.toString());
    }
  }, [fahrenheit]);

  const convert = () => {
    setFahrenheit(celsius * 1.8 + 32);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Conversor de Unidades</h2>
      
      {/* Sección de conversión */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-md">
        <label className="block text-gray-700 font-medium mb-2">Temperatura en Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={e => setCelsius(Number(e.target.value))}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={convert}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 font-medium"
        >
          Convertir
        </button>
      </div>
      
      {/* Separador */}
      <div className="w-full max-w-md border-t border-gray-300 my-4"></div>
      
      {/* Sección de resultado */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block text-gray-700 font-medium mb-2">Resultado en Fahrenheit:</label>
        <input 
          type="text" 
          readOnly 
          value={fahrenheit !== null ? fahrenheit.toString() : ""} 
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 focus:outline-none"
        />
      </div>
    </div>
  );
}
