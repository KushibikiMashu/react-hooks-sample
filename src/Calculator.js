import React, { useState } from "react"
import ChildComponent from "./ChildComponent"

function callCalculatorClass(age, income, grade) {
  return [age, income, grade, age + income]
}

function Calculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [elements, setElements] = useState(null)

  function handleChange(states) {
    setElements(states)
  }

  return (
    <>
      <ChildComponent handleChange={handleChange} />
      <div>
        <input
          type="button"
          id="open"
          value="toggle"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <Result elements={elements} setIsOpen={setIsOpen} isOpen={isOpen} />
        )}
      </div>
    </>
  )
}

const Result = ({ elements, setIsOpen, isOpen }) => {
  if (elements === null) return
  const { age, income, grade } = elements
  const [a, b, c, d] = callCalculatorClass(age, income, grade)
  const result = a + b + c + d
  return (
    <>
      <div>{result}</div>
      <input
        type="button"
        id="open"
        value="toggle"
        onClick={() => setIsOpen(!isOpen)}
      />
    </>
  )
}

export default Calculator
