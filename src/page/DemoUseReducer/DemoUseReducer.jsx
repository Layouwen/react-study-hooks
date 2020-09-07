import React, {useReducer} from "react"

const initial = {
  n: 0
}

const reducer = (state, action) => {
  if (action.type === "add") {
    return {n: state.n + action.number}
  } else {
    throw new Error("位置类型")
  }
}

const DemoUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initial)
  const add = () => {
    dispatch({type: "add", number: 2})
  }
  return (
    <>
      <div>{state.n}</div>
      <button onClick={add}>+2</button>
    </>
  )
}

export default DemoUseReducer