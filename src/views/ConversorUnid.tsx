import { useState } from "react";

export default function ConversorUnid() {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number | null>(null);

  const convert = () => {
    setFahrenheit(celsius * 1.8 + 32);
  };

  return (
    <div>
      <h2>Conversor de Unidades</h2>
      <input
        type="number"
        value={celsius}
        onChange={e => setCelsius(Number(e.target.value))}
      />
      <button onClick={convert}>Convertir</button>
      <input type="text" readOnly value={fahrenheit ?? ""} />
    </div>
  );
}
