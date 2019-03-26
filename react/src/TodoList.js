import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";

function TodoList(props) {
  const [todoValue, setTodoValue] = useState("");
  return (
    <div>
      <header>Todolist</header>
      {props.todos.map(function(todo) {
        return (
          <p key={todo.name}>
            {todo.name}
            <input type="checkbox" />
          </p>
        );
      })}
      <form
        onSubmit={e => {
          props.addTodo(todoValue);
          e.preventDefault();
        }}
      >
        <input value={todoValue} onChange={e => setTodoValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

// Your task is to reflect the checkbox of a todo as checked if isCompleted:true and unchecked if isCompleted:false.

// to reflect a checkbox as checked, give the checkbox element an attribute of checked=true like this: <input type="checkbox" checked=true />
// View demo at https://codesandbox.io/s/github/Ourstress/temp-test/tree/lesson5/react

// Additional notes:

// In the example above, we are using the map() method on this.state.todos which is an array of objects.
// Each todo consist of a name and isCompleted status.
// The map() method applies a function on every todo object in this.state.todos.
// The function returns a <p> element for every todo reflecting the todo's name and a checkbox.

// Key attribute
// React expects us to add a unique key to child elements created by iteration.
// For more info, visit https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

// This keyword
// Why do we write "this.state.todos" instead of "state.todos"?
// TodoList is a class component and all class components have state as a class attribute.
// For TodoList to access its class attribute of state, the this keyword is required.
// There is an enclosing div around <header> & <p> because React components can only return 1 element.
