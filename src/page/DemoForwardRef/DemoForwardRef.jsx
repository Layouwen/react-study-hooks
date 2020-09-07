import React, {forwardRef, useRef} from "react"

const DemoForwardRef = () => {
  const ref = useRef(null)
  return (
    <>
      <div>我是本身的元素</div>
      <ChildNode ref={ref}>按钮</ChildNode>
    </>
  )
}

const ChildNode = forwardRef((props, ref) => {
  return (
    <>
      <button ref={ref} onClick={() => console.log(ref)}>{props.children}</button>
    </>
  )
})

export default DemoForwardRef