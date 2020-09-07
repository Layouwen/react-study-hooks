import React from "react"
import DemoUseReducer from "./page/DemoUseReducer/DemoUseReducer"
import DemoUseContext from "./page/DemoUseContext/DemoUseContext"
import DemoUseState from "./page/DemoUseState/DemoUseState"
import DemoContextReducer from "./page/DemoContextAndReducer/DemoContextReducer"

const App = () => {
  return (
    <>
      <h2>DemoUseState</h2>
      <DemoUseState/>
      <hr/>
      <h2>DemoUseReducer</h2>
      <DemoUseReducer/>
      <hr/>
      <h2>DemoUseContext</h2>
      <DemoUseContext/>
      <hr/>
      <h2>DemoContextReducer</h2>
      <DemoContextReducer/>
    </>
  )
}

export default App