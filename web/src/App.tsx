import React from 'react';
import './App.css';

//JSX: Sintaxe de XML dentro do Javascript

import Routes from './routes'

function App() {
  return (
    <Routes/>
  );
}

export default App;

/*   const [counter, setCounter] = useState(0); //[valor do estado, função para atualizar o valor do estado]

  function handleButtonClick(){
    setCounter(counter + 1);
  } */

   /*  <div>
      <Header title={`Contador: ${counter}`}/>

      <h1>{counter}</h1>
      <h1>{counter * 2}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>

      <h1>Conteudo da Aplicação</h1>
    </div> */