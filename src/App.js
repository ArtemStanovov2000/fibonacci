import './App.css';
import NumberInputWithLabel from './Components/NumberInputWithLabel/NumberInputWithLabel';
import { useState } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(3)
  const [secondNumber, setSecondNumber] = useState(4)
  const [maxValue, setMaxValue] = useState(80)

  const countMaxValue = (value) => {
    const pow = value / 10
    const maxValue = Number(Math.pow(10, pow).toFixed(0))
    return maxValue
  }

  const numbers = [firstNumber, secondNumber]
  for (let i = 0; i < 50; i++) {
    let newFibinacciNumber = numbers[numbers.length - 1] + numbers[numbers.length - 2]
    if (newFibinacciNumber > countMaxValue(maxValue)) {
      break
    }
    numbers.push(newFibinacciNumber)
  }

  const countEvenNumbers = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sum += array[i]
      }
    }
    return sum
  }

  return (
    <div className="container">
      <div>
        <div className="input-container">
          <NumberInputWithLabel setState={setFirstNumber} state={firstNumber} label={"Первое число"} />
          <NumberInputWithLabel setState={setSecondNumber} state={secondNumber} label={"Второе число"} />
        </div>
        <div className="label">
            <p className="label">{`Максимальное значение: ${countMaxValue(maxValue)}`}</p>
            <p className="label">{`Сумма четных чисел: ${countEvenNumbers(numbers)}`}</p>
            <input min="0" max="100" onChange={e => setMaxValue(Number(e.target.value))} step="1" type="range"/>
        </div>
      </div>
      <div className="displayer-container">
        {numbers.map((element, index) => <p key={index} className="displayer">{element}</p>)}
      </div>
    </div>
  );
}

export default App;
