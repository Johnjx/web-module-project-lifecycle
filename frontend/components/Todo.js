import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <section>
        <div className='list-content' id={`list${this.props.todo.id}`}>
          <div onClick={() => this.props.toggle(this.props.todo.id)}>
            <p className={this.props.todo.completed? 'completed': ''}>{this.props.todo.name}</p>
          </div>
        </div>
      </section>
    )
  }
}
