import React from "react"
import Accordion from "./components/Accordion"

const items = [
  {
    title: "What is react",
    content: "React is a front end javascript frame"
  },
  {
    title: "What is Angular",
    content: "Angular is a front end javascript frame"
  },
  {
    title: "What is Vue",
    content: "Vue is a front end javascript frame"
  }
]
const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default App
