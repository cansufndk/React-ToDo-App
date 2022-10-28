import { createContext, useState, useReducer } from "react"
import { v4 as uuidv4 } from "uuid"

const TodoListContext = createContext()

const TodoListContextProvider = ({ children }) => {
    const [input, setInput] = useState("")
    const [todos, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "delete":
                return state.filter(todo => todo.id !== action.id)
            case "complete":
                return state.map(todo =>
                    todo.id === action.id ? { ...todo, completed: true } : todo
                )
            case "reopen":
                return state.map(todo =>
                    todo.id === action.id ? { ...todo, completed: false } : todo
                )
            case "add":
                if(input === "") alert("Please Add To Do")
                else {
                    state.push({ id: uuidv4(), title: input, completed: false })
                    setInput("")
                }
                return state
            case "edit":
                return state.map(todo =>
                    todo.id === action.id ? { ...todo, title: action.title } : todo
                )
            default:
                return state
        }
    }, [])

    return (
        <TodoListContext.Provider value={{ input, setInput, todos, dispatch }}>
            {children}
        </TodoListContext.Provider>
    )
}

export { TodoListContext, TodoListContextProvider }