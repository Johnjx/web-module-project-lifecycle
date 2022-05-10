import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
          type="text"
          name="todo"
          value={this.props.todoInput}
          onChange={this.props.onChange}
          />
        </form>
      </div>
    )
  }
}
