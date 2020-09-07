import React, {useState} from "react"

const DemoUseState = () => {
  const [n, setN] = useState(0)
  return (
    <>
      <div>number {n}</div>
      <button onClick={() => setN(n => n + 10)}>+10</button>
    </>
  )
}

export default DemoUseState