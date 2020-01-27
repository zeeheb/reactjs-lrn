import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '3px red dotted',
      backgroundColor: 'lightblue',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onChange={this.props.markComplete}></input>{' '}
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

// proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
