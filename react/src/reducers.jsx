const reducer = (
  state = {
    todos: [
      { name: "task1", isCompleted: false },
      { name: "task2", isCompleted: true },
      { name: "task3", isCompleted: false }
    ]
  },
  action
) => {
  switch (action.type) {
    case "Add todo":
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            name: action.text,
            isCompleted: false
          }
        ]
      });
    default:
      return state;
  }
};

export default reducer;
