import React, { Component } from "react";

class TodoList extends Component {
  state = {
    todos: ["task1", "task2"]
  };
  render() {
    return <header>Todolist</header>;
  }
}

export default TodoList;

// Your task is add another item to the array of todos in TodoList's state
// Additional notes:
// TodoList is a React component
// React components tell the browser what to put up on screen
// In our example above, TodoList component tells the browser to put up a Header element on screen
// We can use different React components. In this case, TodoList is a React class component.
// React class components can manage data dynamically through their state.
// In our example above, TodoList manages the todos that will be shown on screen.
// Nothing shows up on-screen yet. But we have created an array of todos to be stored in TodoList's state.
