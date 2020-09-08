import React from "react"
import DemoUseReducer from "./page/DemoUseReducer/DemoUseReducer"
import DemoUseContext from "./page/DemoUseContext/DemoUseContext"
import DemoUseState from "./page/DemoUseState/DemoUseState"
import DemoContextReducer from "./page/DemoContextAndReducer/DemoContextReducer"
import DemoUseEffect from "./page/DemoUseEffect/DemoUseEffect"
import DemoUseMemoAndUseCallback from "./page/DemoUseMemoAndUseCallback/DemoUseMemoAndUseCallback"
import DemoUseRef from "./page/DemoUseRef/DemoUseRef"
import DemoImperativeHandle from "./page/DemeImperativeHandle/DemoImperativeHandle"
import DemoForwardRef from "./page/DemoForwardRef/DemoForwardRef"
import DemoCustomHook from "./page/DemoCustomHook/DemoCustomHook"

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
      <hr/>
      <h2>DemoUseEffect</h2>
      <DemoUseEffect/>
      <hr/>
      <h2>DemoUseMemoAndUseCallback</h2>
      <DemoUseMemoAndUseCallback/>
      <hr/>
      <h2>DemoUseRef</h2>
      <DemoUseRef/>
      <hr/>
      <h2>DemoImperativeHandle</h2>
      <DemoImperativeHandle/>
      <hr/>
      <h2>DemoForwardRef</h2>
      <DemoForwardRef/>
      <hr/>
      <h2>DemoCustomHook</h2>
      <DemoCustomHook/>
    </>
  )
}

export default App
