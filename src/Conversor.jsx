import { useEffect, useState } from 'react';
import './Conversor.css';

export default function Quotes() {
  const [dados, setDados] = useState(null);

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setDados(data.slip));
  };

  useEffect(() => {
    fetchAdvice(); // Carrega um conselho inicial ao montar o componente
  }, []);

  return (
    <div className="container">
      <div className="DivMaior">
        {dados ? (
          <div>
            <h2>Advice #{dados.id}</h2>
            <p>"{dados.advice}"</p>
            <button id="butao" onClick={fetchAdvice}>Clique aqui</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div className="linha"></div>
      </div>
    </div>
  );
}
