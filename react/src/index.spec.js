import React from "react";
import TodoList from "./TodoList";

describe("The TodoList component", () => {
  it("Todolist's state should contain an array of todos with 3 elements", () => {
    const instance = new TodoList();
    const displayedOnScreen = instance.render();
    expect(displayedOnScreen.props.children[1].props.children).toMatch(
      /task2/i
    );
  });
});
