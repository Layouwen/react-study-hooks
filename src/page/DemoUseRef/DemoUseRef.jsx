import React, {useEffect, useRef, useState} from "react"

const DemoUseRef = () => {
  const count = useRef(0)
  const [n, setN] = useState(0)
  useEffect(() => {
    count.current += 1
    console.log("第" + count.current + "执行")
  })
  return (
    <>
      <div>{n}</div>
      <button onClick={() => setN(n => n + 1)}>n+1</button>
    </>
  )
}

export default DemoUseRef