const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          textColor: "rgb(0,0,0)"
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "CHANGE_TODO_TEXT_COLOR":
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, textColor: action.textColor }
            : todo
      );
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.index);

    default:
      return state;
  }
};

export default todos;
