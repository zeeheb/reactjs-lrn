import React from 'react';
import './App.css';
import Todos from './components/Todos';
import { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Take out the lag',
        completed: false
      },
      {
        id: 3,
        title: 'the trash',
        completed: false
      }
    ]
  };

  // toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div className='App'>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
        ></Todos>
      </div>
    );
  }
}

export default App;
