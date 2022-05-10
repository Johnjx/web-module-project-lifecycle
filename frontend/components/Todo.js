import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <section>
        <div className='list-content' id={`list${this.props.todo.id}`}>
          <div>
            <p>{this.props.todo.name}</p>
          </div>
        </div>
      </section>
    )
  }
}
