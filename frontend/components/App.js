import React from 'react'
import TodoList from './TodoList'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    itemText: '',
    todos: []
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
      </div>
    )
  }
}
