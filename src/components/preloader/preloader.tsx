import React, { useState, useEffect } from 'react';
import './preloader.scss';

const PreLoader = () => {
    const [stage, setStage] = useState(0);
  
    useEffect(() => {
      const timers = [
        setTimeout(() => setStage(1), 2500), // Após 2,5 segundos, muda para tela preta com texto
        setTimeout(() => setStage(2), 5000), // Após mais 2 segundos, esconde o pré-carregador
      ];
  
      return () => timers.forEach(timer => clearTimeout(timer)); // Limpa os timers se o componente for desmontado
    }, []);
  
    if (stage === 2) return null; // Não renderiza nada após completar o pré-carregamento
  
    return (
        <div className={`preloader ${stage === 1 ? 'text-stage' : ''} ${stage === 2 ? 'fade-out' : ''}`}>
          {stage === 0 ? ( <div className="pre-loading"><><img src="./images/logowebswiftcompleto.png" alt="Logo" /><div className="barra-enfeite"></div></></div>
          ) : (
            <h1 className={ 'h1-preloader' }>Bem-vindo(a)</h1>
          )}
        </div>
      );
  };
  
  export default PreLoader;