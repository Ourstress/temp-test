import React, { Component } from "react";

class TodoList extends Component {
  state = {
    todos: ["task1", "task2", "task3"]
  };
  render() {
    return (
      <div>
        <header>Todolist</header>
        <p>{this.state.todos[0]}</p>
      </div>
    );
  }
}

export default TodoList;

// Your task is to display task2 instead of task1 (Note: this.state.todos[0] has the value of "task1").
// Additional notes:
// TodoList is a React component
// React components tell the browser what to put up on screen
// In our example above, TodoList component tells the browser to put up a Header element on screen
// We can use different React components. In this case, TodoList is a React class component.
// React class components can manage data dynamically through their state.
// We have created an array of todos to be stored in TodoList's state.
// The array of todos stored in TodoList's state can be accessed through this.state.todos.
// Why do we write "this.state.todos" instead of "state.todos"?
// TodoList is a class component and all class components have state as a class attribute.
// For TodoList to access its class attribute of state, the this keyword is required.
// Note that there is an enclosing div around <header> & <p> because React components can only return 1 element
