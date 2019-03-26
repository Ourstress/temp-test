import React from "react";
import { render } from "react-testing-library";
import TodoList from "./TodoList";
import "jest-dom/extend-expect";

describe("The TodoList component", () => {
  it("Todolist's state should contain an array of todos with 3 elements", () => {
    const instance = new TodoList();
    const displayedOnScreen = instance.render();
    const listOfTodos = displayedOnScreen.props.children[1];
    const task1CheckboxStatus = listOfTodos[0].props.children[1].props.checked;
    const task2CheckboxStatus = listOfTodos[1].props.children[1].props.checked;
    expect(task1CheckboxStatus).toEqual(false);
    expect(task2CheckboxStatus).toEqual(true);
  });

  it("todolist element loads on render", () => {
    const { getByText } = render(<TodoList />);
    expect(getByText(/Todolist/i)).toBeInTheDocument();
  });
});
