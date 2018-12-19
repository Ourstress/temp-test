import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <h3>Change the text for the Welcome component to be 'Hello'.</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
