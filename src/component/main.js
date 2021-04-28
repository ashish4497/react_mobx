import "../sytle/main.css"
import React from "react"
import ReactDOM from "react-dom"
import TodoStore from "./TodoStore"
import TodoList from "../component/TodoList"

const app = document.getElementById("app")

ReactDOM.render(<TodoList store={TodoStore} />, app)

