import React from "react";
import { getRandomInt } from "./utils";
import { useState } from "react";
// В этой задаче вам нужно создать компонент React, который генерирует случайное число между 1 и 100.
// - Компонент должен позволять пользователю делать предположения о числе.
// - Компонент должен отображать количество попыток пользователя.
// - Компонент должен отображать сообщение, указывающее, является ли предположение пользователя выше или ниже, чем актуальное число.
// - Компонент должен отображать список чисел введенных при попытках угадать число

export function Task() {
  const initRandom = () => getRandomInt(1, 100)
  const [randomv,setRandomv] = useState(initRandom)
  const [inputV, setInputV] = useState(0)
  const [msg, setMsg] = useState('')
  const [list, setList] = useState([])
  return (
    <div>
      {randomv}
      <h1>Guess the Number!</h1>
      <input type="number" value={inputV} onChange={(e)=>setInputV(Number(e.target.value))}/>
      {/* подсказка */}
      <p></p>
      <button onClick={()=>{
        if(inputV > randomv) setMsg('Инпут больше');
        else if(inputV === randomv) setMsg('Инпут равен');
        else setMsg('Инпут меньше')

        setList([...list, inputV])
      }}>Guess!</button>
      {msg}

      <p>Attempts: </p>
      {/* список попыток */}
      <ul>{list.map(child=><li>{child}</li>)}</ul>
    </div>
  );
}

