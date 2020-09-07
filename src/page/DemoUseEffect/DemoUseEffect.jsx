import React, {useState, useEffect, useLayoutEffect} from "react"

const DemoUseEffect = () => {
  const [display, setDisplay] = useState(true)
  const [n, setN] = useState(0)
  useEffect(() => {
    console.log("我每次都执行")
  })
  useEffect(() => {
    console.log("我只在第一次执行")
    return () => {
      console.log("我只在销毁的时候执行")
    }
  }, [])
  useEffect(() => {
    console.log("我只在n变化执行")
  }, [n])
  useLayoutEffect(() => {
    console.log("我是在页面渲染前就执行结束")
  })
  return (
    <>
      {display ? <div>{n}</div> : null}
      <button onClick={() => setN(n => n + 5)}>+5</button>
      <button onClick={() => {
        setDisplay(display => !display)
      }}>消灭n
      </button>
    </>
  )
}

export default DemoUseEffect