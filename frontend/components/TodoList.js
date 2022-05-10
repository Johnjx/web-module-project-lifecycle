import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        {this.props.todos.map(todo => (
          <Todo
          key={todo.name}
          todo={todo}
          />
        ))}
      </div>
    )
  }
}
