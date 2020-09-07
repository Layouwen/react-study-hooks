import React, { useState, createContext, useContext } from "react"

const Context = createContext(null)

const DemoUseContext = () => {
    const [n, setN] = useState(0)
    return (
        <Context.Provider value={{ n, setN }}>
            <Father />
            <Son />
        </Context.Provider>
    )
}

const Father = () => {
    const { n, setN } = useContext(Context)
    return (
        <>
            <div>我是爸爸{n}</div>
            <button onClick={() => setN(n => n + 1)}>爸爸按钮+1</button>
        </>
    )
}

const Son = () => {
    const { n, setN } = useContext(Context)
    return (
        <>
            <div>我是儿子{n}</div>
            <button onClick={() => setN(n => n - 1)}>儿子按钮-1</button>
        </>
    )
}

export default DemoUseContext