import React, {useContext, useEffect, useReducer, createContext} from "react"

// 数据仓库
const store = {
  user: null,
  books: null,
  movies: null
}

// 行为类型
const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return {...state, user: action.user}
    case "setBooks":
      return {...state, books: action.books}
    case "setMovies":
      return {...state, movies: action.movies}
    default:
      throw new Error("位置类型")
  }
}

// 创建Context
const Context = createContext(null)

const DemoContextReducer = () => {
  // 创建数据读写的API
  const [state, dispatch] = useReducer(reducer, store)
  return (
    <Context.Provider value={{state, dispatch}}>
      <User/>
      <Books/>
      <Movies/>
    </Context.Provider>
  )
}

const User = () => {
  const {state, dispatch} = useContext(Context)
  useEffect(() => {
    ajax("/user").then(user => {
      dispatch({type: "setUser", user})
      console.log(user)
    })
  }, [])
  return (
    <>
      <h3>姓名</h3>
      {state.user ? <div>{state.user.name}</div> : null}
    </>
  )
}
const Books = () => {
  const {state, dispatch} = useContext(Context)
  useEffect(() => {
    ajax("/books").then(books => {
      dispatch({type: "setBooks", books})
    })
  }, [])
  return (
    <>
      <h3>书籍</h3>
      {state.books ? state.books.map(book => (<div key={book.id}>{book.name}</div>)) : null}
    </>
  )
}
const Movies = () => {
  const {state, dispatch} = useContext(Context)
  useEffect(() => {
    ajax("/movies").then(movies => {
      dispatch({type: "setMovies", movies: movies})
    })
  }, [])
  return (
    <div>
      <h3>电影</h3>
      {state.movies ? state.movies.map(item => <div key={item.id}>{item.name}</div>) : null}
    </div>
  )
}

export default DemoContextReducer

// 模拟请求数据
function ajax(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === "/user") {
        resolve({
          id: 1,
          name: "梁又文"
        })
      } else if (path === "/books") {
        resolve([{
          id: 1,
          name: "我是一本好书"
        }, {
          id: 2,
          name: "我是一本坏书"
        }])
      } else if (path === "/movies") {
        resolve([{
          id: 1,
          name: "最时间的尽头"
        }, {
          id: 2,
          name: "八百"
        }])
      }
    }, 3000)
  })
}