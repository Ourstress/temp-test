import React from "react";
import TodoList from "./TodoList";

describe("The TodoList component", () => {
  it("header should be Todolist", () => {
    const instance = new TodoList();
    const componentOnScreen = instance.render();
    const expectedHeader = new RegExp(/todolist/i);
    expect(componentOnScreen.props.children).toMatch(expectedHeader);
  });
});
