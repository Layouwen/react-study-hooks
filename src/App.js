import React from "react"
import DemoUseReducer from "./page/DemoUseReducer/DemoUseReducer"
import DemoUseContext from "./page/DemoUseContext/DemoUseContext"

const App = () => {
  return (
    <>
      <h2>DemoUseReducer</h2>
      <DemoUseReducer/>
      <hr/>
      <h2>DemoUseContext</h2>
      <DemoUseContext/>
    </>
  )
}

export default App