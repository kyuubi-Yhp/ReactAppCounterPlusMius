
import { useState } from 'react'
import Counter from './components/Counter/Counter'
import Button from './components/Button/Button'
import Logs from './components/Logs/Logs'
import './App.css'

const INITIAL_COUNTER = 0
const COUNTER_STEP = 1
const MAX_COUNTER_VALUE = 5
const MIN_COUNTER_VALUE = -5

function App() {
  const [counter, setCounter] = useState(INITIAL_COUNTER)
  const [logs, setLogs] = useState([])


  function handelPlusButtonClick() {
    setCounter(counter + COUNTER_STEP)
    setLogs([...logs, counter + COUNTER_STEP])
  }

  function handelMinusButtonClicktwo() {
    setCounter(counter - COUNTER_STEP)
    setLogs([...logs, counter - COUNTER_STEP])
  }
  function isdisableminus() {
    return counter <= MIN_COUNTER_VALUE
  }
  function isdisablePlus() {
    return counter >= MAX_COUNTER_VALUE
  }
  function obnal() {
    const counter = 0
    setCounter(INITIAL_COUNTER)
    setLogs([...logs, counter])
  }
  function isCounterLimit() {
    return counter <= MIN_COUNTER_VALUE || counter >= MAX_COUNTER_VALUE
  }

  return (
    <div>
      <Counter
        isDanger={isCounterLimit()}
        value={counter}
      />
      <Button
        text={'plus'}
        disebl={isdisablePlus()}
        onClick={handelPlusButtonClick}
      />
      <Button
        text={'minus'}
        disebl={isdisableminus()}
        onClick={handelMinusButtonClicktwo}
      />
      <Button
        text={'obnal'}
        onClick={obnal}
      />
      <Logs
        logs={logs}
      />
    </div>
  )
}


export default App
