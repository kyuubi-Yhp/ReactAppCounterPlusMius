import { useState } from 'react'
import Counter from './components/Counter/Counter'
import Button from './components/Button/Button'
import Logs from './components/LogsList/LogsList'
import './App.css'

const logTitle = 'Логи'
const INITIAL_COUNTER = 0
const COUNTER_STEP = 1
const MAX_COUNTER_VALUE = 5
const MIN_COUNTER_VALUE = -5
const ACTION_VALUE = {
  plus: 'plus',
  minus: 'minus',
  obnal: 'obnal'
}

function App() {
  const [counter, setCounter] = useState(INITIAL_COUNTER)
  const [logs, setLogs] = useState([])


  function handelPlusButtonClick() {
    const newValue = counter + COUNTER_STEP
    const log = {
      id: crypto.randomUUID(),
      action: ACTION_VALUE.plus,
      prevValue: counter,
      value: newValue
    }
    setCounter(newValue)
    setLogs([...logs, log])
  }

  function handelMinusButtonClicktwo() {
    const newValue = counter - COUNTER_STEP
    const log = {
      id: crypto.randomUUID(),
      action: ACTION_VALUE.minus,
      prevValue: counter,
      value: newValue
    }
    setCounter(newValue)
    setLogs([...logs, log])
  }
  function isdisableminus() {
    return counter <= MIN_COUNTER_VALUE
  }
  function isdisablePlus() {
    return counter >= MAX_COUNTER_VALUE
  }
  function obnal() {
    const newValue = 0
    const log = {
      id: crypto.randomUUID(),
      action: ACTION_VALUE.obnal,
      prevValue: counter,
      value: newValue
    }
    setCounter(INITIAL_COUNTER)
    setLogs([...logs, log])
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
        title={logTitle}
        logs={logs}
      />
    </div>
  )
}


export default App
