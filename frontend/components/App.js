import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todoInput: "",
    todos: []
  }

  handleChange = evt => {
    this.setState({
      todoInput: evt.target.value
    })
  }

  addTodo = todo => {
    axios.post(URL, { 
      name: todo,
      completes: false
     })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.addTodo(this.state.todoInput)
    this.setState({
      todoInput: ""
    })
  }

  componentDidMount() {
    axios.get(URL)
    .then(res => {
      this.setState({
        todos: res.data.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.todos.length > 0? <TodoList todos={this.state.todos} />: <p>Loading...</p>}
        <Form
        todoInput={this.state.todoInput}
        onChange={this.handleChange}
        submit={this.handleSubmit}
        />
      </div>
    )
  }
}
