import React, {forwardRef, useRef, useEffect, useImperativeHandle} from "react"

const DemoImperativeHandle = () => {
  const buttonRef = useRef()
  useEffect(() => {
    console.log(buttonRef)
  })
  return (<>
    <Son ref={buttonRef} onClick={() => console.log(buttonRef.current.x())}>按钮</Son>
  </>)
}

const Son = forwardRef((props, ref) => {
  const realRef = useRef()
  useImperativeHandle(ref, () => {
    return {
      x: () => {
        console.log(1)
      },
      ref: realRef
    }
  })
  return (<>
    <button ref={realRef} {...props}/>
  </>)
})

export default DemoImperativeHandle