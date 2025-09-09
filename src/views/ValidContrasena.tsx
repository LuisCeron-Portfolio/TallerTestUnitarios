import { useState } from "react";

export default function ValidContrasena() {
  const [password, setPassword] = useState("");

  const rules = [
    { test: (p: string) => p.length >= 8, label: "Al menos 8 caracteres" },
    { test: (p: string) => /\d/.test(p), label: "Contiene un número" },
    { test: (p: string) => /[A-Z]/.test(p), label: "Contiene mayúscula" },
  ];

  const valid = rules.every(r => r.test(password));

  return (
    <div>
      <h2>Validador de Contraseñas</h2>
      <label htmlFor="pwd">Contraseña:</label>
      <input
        id="pwd"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <ul>
        {rules.map((r, i) => (
          <li key={i} style={{ color: r.test(password) ? "green" : "red" }}>
            {r.label}
          </li>
        ))}
      </ul>
      {valid && <p>Contraseña válida</p>}
    </div>
  );
}