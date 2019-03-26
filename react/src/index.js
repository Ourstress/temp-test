import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
