import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <section>
        <div className='list-content' id={`list${this.props.todo.id}`}>
          <div
          className={this.props.todo.completed? 'completed': ''}
          onClick={() => this.props.toggle(this.props.todo.id)}
          >
            <p>{this.props.todo.name}</p>
          </div>
        </div>
      </section>
    )
  }
}
