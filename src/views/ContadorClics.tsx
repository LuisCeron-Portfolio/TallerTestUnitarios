import React, { useState, useEffect } from 'react';

const ContadorClics: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const savedCount = window.localStorage.getItem('counter');
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('counter', count.toString());
  }, [count]);

  return (
    <div>
      <p>Clics: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default ContadorClics;
