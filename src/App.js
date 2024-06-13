import React, { useState, useEffect } from "react";
import { getRandomInt } from "./utils";
import { HINT_NAMES } from "./constants";

// В этой задаче вам нужно создать компонент React, который генерирует случайное число между 1 и 10.
// - Компонент должен позволять пользователю делать предположения о числе.
// - Компонент должен отображать количество попыток пользователя.
// - Компонент должен вывести подтверждение удачного угадывания.
// - Компонент должен отображать сообщение, указывающее, является ли предположение пользователя выше или ниже, чем актуальное число.
// - Компонент должен отображать список чисел введенных при попытках угадать число, список должен быть отсортирован по возрастанию
//   в списке так же должна быть подсказка о том, что предположение пользователя больше или меньше, чем актуальное число,
//   для подсказки использовать HINT_NAMES

function App() {
  const [number, setNumber] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState(null);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState(0);

  const handleGuess = () => {};

  const handleReset = () => {};

  const handleInputChange = () => {};
  return (
    <div>
      <h1>Guess the Number!</h1>
      <input onChange={handleInputChange} type="number" value={0} />
      {/* подсказка */}
      <p></p>
      <button onClick={handleGuess}>Guess!</button>
      <button onClick={handleReset}>Reset</button>
      {/* число попыток */}
      <p>Attempts: </p>
      {/* список попыток */}
      <ul></ul>
    </div>
  );
}

export default App;
