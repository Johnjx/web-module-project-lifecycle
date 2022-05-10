import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          <input
          type="text"
          name="todo"
          value={this.props.todoInput}
          onChange={this.props.onChange}
          />
          <button>Add Todo</button>
        </form>
        <button onClick={() =>this.props.clear()}>Clear Completed</button>
      </div>
    )
  }
}
