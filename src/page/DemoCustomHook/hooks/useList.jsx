import {useState} from "react"

const useList = () => {
  const [list, setList] = useState(0)
  return ({
    list: list,
    setList: setList
  })
}

export default useList