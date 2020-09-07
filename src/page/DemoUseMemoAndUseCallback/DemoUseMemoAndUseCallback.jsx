import React, {useMemo, useState, memo, useEffect, useCallback} from "react"

const DemoUseMemoAndUseCallback = () => {
  const [n, setN] = useState(0)
  const [childer, setChilder] = useState(0)
  useEffect(() => {
    console.log("我变化了")
  }, [n])
  // 使用useMemo阻止因为对象地址变化而重新执行
  const childClick = useMemo(() => {
    return () => {
    }
  }, [childer])
  // 等同于useMemo，比useMemo简单
  const childClick2 = useCallback(() => {
  })
  return (
    <>
      <div>{n}</div>
      <Childer childer={childer} childClick={childClick} childClick2={childClick2}/>
      <button onClick={() => setN(n => n + 10)}>+10</button>
    </>
  )
}

// 使用memo阻止子组件state没改变，因父组件属性改变而重新渲染
const Childer = memo((props) => {
  console.log("我是孩子，我不想执行")
  return (
    <>
      <div>我是孩子 {props.childer}</div>
    </>
  )
})

export default DemoUseMemoAndUseCallback