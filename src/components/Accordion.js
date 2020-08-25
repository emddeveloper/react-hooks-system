import React, { useState } from "react"
const Accordion = ({ items }) => {
  const [state, setState] = useState({
    activeIndex: null
  })
  const onTitleClick = index => {
    setState({
      activeIndex: index
    })
  }
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p className="">{item.content}</p>
        </div>
      </React.Fragment>
    )
  })
  return (
    <>
      <div className="ui styled accordion">{renderedItems}</div>
      <p>{state.activeIndex}</p>
    </>
  )
}

export default Accordion
