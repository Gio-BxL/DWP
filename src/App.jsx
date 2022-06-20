import React, {useState} from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const hclic = (e) => {
    setResult(result.concat(e.target.name));
  }
  const borrar = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, result.lenght - 1));
  }

  const calcular = () => {
    try {
      setResult(eval(result).toSyting());
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <div class="container">
      <form>
        <imput type="text" value={result} />
      </form>

      <div class="keypad">
        <button class="highlight" onClick={borrar} id="borrar">Borrar</button>
        <button onClick={backspace} id="backspace">C</button>
        <button class="highlight" name="/" onClick={hclic} id="divisor">&divide;</button>
        <button name="7" onClick={hclic}>7</button>
        <button name="8" onClick={hclic}>8</button>
        <button name="9" onClick={hclic}>9</button>
        <button class="highlight" name="*" onClick={hclic}>&times;</button>
        <button name="4" onClick={hclic}>4</button>
        <button name="5" onClick={hclic}>5</button>
        <button name="6" onClick={hclic}>6</button>
        <button class="highlight" name="-" onClick={hclic}>&ndash;</button>
        <button name="1" onClick={hclic}>1</button>
        <button name="2" onClick={hclic}>2</button>
        <button name="3" onClick={hclic}>3</button>
        <button class="highlight" name="+" onClick={hclic}>+</button>
        <button name="0" onClick={hclic}>0</button>
        <button name="." onClick={hclic}>.</button>
        <button class="highlight" onClick={calcular} id="result">=</button>
      </div>
    </div>
  );
}

export default App;
