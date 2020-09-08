import React from "react"
import useList from "./hooks/useList"

const DemoCustomHook = () => {
  const {list, setList} = useList()
  return (
    <>
      <div>{list}</div>
      <button onClick={() => setList(n => n + 10)}>+10</button>
    </>
  )
}

export default DemoCustomHook