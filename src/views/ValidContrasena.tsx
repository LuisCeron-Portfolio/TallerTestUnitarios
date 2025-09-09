import { useState, useEffect } from "react";

export default function ValidContrasena() {
  const [password, setPassword] = useState("");

  useEffect(() => {
    const savedPassword = window.localStorage.getItem('password');
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('password', password);
  }, [password]);

  const rules = [
    { test: (p: string) => p.length >= 8, label: "Al menos 8 caracteres" },
    { test: (p: string) => /\d/.test(p), label: "Contiene un número" },
    { test: (p: string) => /[A-Z]/.test(p), label: "Contiene mayúscula" },
  ];

  const valid = rules.every(r => r.test(password));

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Validador de Contraseñas</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label htmlFor="pwd" className="block text-gray-700 font-medium mb-2">Contraseña:</label>
        <input
          id="pwd"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="mb-4">
          {rules.map((r, i) => (
            <li key={i} className={`flex items-center ${r.test(password) ? "text-green-600" : "text-red-600"}`}>
              <span className="mr-2">{r.test(password) ? "✓" : "✗"}</span>
              {r.label}
            </li>
          ))}
        </ul>
        {valid && <p className="text-green-600 font-semibold">Contraseña válida</p>}
      </div>
    </div>
  );
}
