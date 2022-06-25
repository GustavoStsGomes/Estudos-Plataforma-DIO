import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const element = 'Gustavo Gomes'
const element1 = <h1>olá!</h1>

//utilizando JSX para renderizar mais de um elemento
function App() {
  return(
    <div>
      {element}
      {element1}
    </div>
  )
}

const rootElement = document.getElementById('root')
//retornar um ou outro
//ReactDOM.render(element, rootElement)

//renderizando pelo JSX
ReactDOM.render(<App />, rootElement)