import React from "react";
import TodoList from "./TodoList";

describe("The TodoList component", () => {
  it("Todolist's state should contain an array of todos with 3 elements", () => {
    const instance = new TodoList();
    expect(instance.state.todos).toHaveLength(3);
  });
});
