import './App.css';
import InputWithLabel from './Components/InputWithLabel/InputWithLabel';
import Displayer from './Components/Displayer/Displayer';
import { useState } from 'react';
import StateBlock from './Components/StateBlock/StateBlock';

function App() {

  const [firstNumber, setFirstNumber] = useState(3)
  const [secondNumber, setSecondNumber] = useState(4)
  const [maxValue, setMaxValue] = useState(80)

  const countMaxValue = function (value) {
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

  const countEvenNumbers = function (array) {
    let summ = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        summ += array[i]
      }
    }
    return summ
  }

  return (
    <div className="container">
      <div>
        <div className="input-container">
          <InputWithLabel setState={setFirstNumber} state={firstNumber} label={"Первое число"} />
          <InputWithLabel setState={setSecondNumber} state={secondNumber} label={"Второе число"} />
        </div>
        <StateBlock summ={countEvenNumbers(numbers)} value={countMaxValue(maxValue)} setState={setMaxValue}></StateBlock>
      </div>
      <div className="displayer-container">
        {numbers.map((element) => <Displayer value={element}></Displayer>)}
      </div>
    </div>
  );
}

export default App;
