import { useState } from "react";

export default function TablasMul() {
  const [number, setNumber] = useState<number | null>(null);
  const [result, setResult] = useState<number[]>([]);

  const handleClick = () => {
    if (number !== null) {
      setResult(Array.from({ length: 10 }, (_, i) => (i + 1) * number));
    }
  };

  return (
    <div>
      <h2>Calculadora de Tablas de Multiplicar</h2>
      <input type="number" onChange={e => setNumber(Number(e.target.value))} />
      <button onClick={handleClick}>Generar</button>
      <ul>
        {result.map((val, i) => (
          <li key={i}>{`${number} x ${i + 1} = ${val}`}</li>
        ))}
      </ul>
    </div>
  );
}
