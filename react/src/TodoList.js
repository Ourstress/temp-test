import React, { Component } from "react";

class TodoList extends Component {
  state = {
    todos: ["task1", "task2", "task3"]
  };
  render() {
    return (
      <div>
        <header>Todolist</header>
        {this.state.todos.map(function(todo) {
          return <p key={todo}>{todo}</p>;
        })}
      </div>
    );
  }
}

export default TodoList;

// Your task is to add a checkbox element <input type="checkbox" /> within the p tag above.
// example: <p>Tick if you are attending code camp<input type="checkbox" /></p>
// View demo at https://codesandbox.io/s/github/Ourstress/temp-test/tree/lesson4/react

// Additional notes:
// The array of todos stored in TodoList's state can be accessed through this.state.todos.
// Curly braces around this.state.todos indicates that the contents in between them as JavaScript.
// In the example above, we are using the map() method on this.state.todos which is an array.
// The map() method applies a function on every todo in this.state.todos.
// The function returns a <p> element for every todo.
// End result <header>Todolist</header> <p>Task1</p> <p>Task2</p> <p>Task3</p>
// React expects us to add a unique key to child elements created by iteration.
// For more info, visit https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

// This keyword
// Why do we write "this.state.todos" instead of "state.todos"?
// TodoList is a class component and all class components have state as a class attribute.
// For TodoList to access its class attribute of state, the this keyword is required.
// There is an enclosing div around <header> & <p> because React components can only return 1 element.
