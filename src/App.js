import React from "react"
import DemoUseReducer from "./page/DemoUseReducer/DemoUseReducer"
import DemoUseContext from "./page/DemoUseContext/DemoUseContext"
import DemoUseState from "./page/DemoUseState/DemoUseState"

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
    </>
  )
}

export default App