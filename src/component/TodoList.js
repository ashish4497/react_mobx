import React from "react"
import { observer } from "mobx-react"


@observer
export default class TodoList extends React.Component {
  createNew = (e) => {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }


  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {
    const { clearComplete, filteredTodos,} = this.props.store

    const todoList = filteredTodos.map(todo => (
      <li key={todo.id}>
       <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
       <span>{todo.value}</span>
      </li>
    ))

    return <div>
      <h1>todos</h1>
      <input 
      type ="text" 
      className="new" 
      onKeyPress={this.createNew} 
      placeholder="Enter what to do ? "
      />
      <ul>{todoList}</ul>
      <button onClick={clearComplete}>Clear Compleate</button>
    </div>
  }
}
