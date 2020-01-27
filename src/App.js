import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { Component } from 'react';
import uuid from 'uuid';
import ButtonAppBar from './components/layout/ButtonAppBar';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Take out the lag',
        completed: false
      },
      {
        id: uuid.v4(),
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

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className='App'>
        <ButtonAppBar></ButtonAppBar>
        <div className='container'>
          <Header></Header>
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          ></Todos>
        </div>
      </div>
    );
  }
}

export default App;
