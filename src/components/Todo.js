import React from "react";
import PropTypes from "prop-types";

const Todo = ({
  editTodo,
  remTodo,
  changeTodoTextColor,
  completed,
  text,
  id,
  textColor,
  param0
}) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none",
      color: textColor
    }}
  >
    <span onClick={editTodo}>
      {"id:[" + id.toString() + "] - "}
      {text + ", param0:[" + param0 + "]"}
    </span>
    <button
      type="button"
      onClick={remTodo}
      disabled={false}
      style={{ margin: "4px 0px 0px 4px" }}
    >
      {"x"}
    </button>
    <button
      type="button"
      onClick={editTodo}
      disabled={false}
      style={{ margin: "4px 0px 0px 4px" }}
    >
      {"e"}
    </button>
    <button
      type="button"
      onClick={changeTodoTextColor}
      disabled={false}
      style={{ margin: "4px 0px 0px 4px" }}
    >
      {"c"}
    </button>
  </li>
);

Todo.propTypes = {
  editTodo: PropTypes.func.isRequired,
  remTodo: PropTypes.func.isRequired,
  changeTodoTextColor: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  param0: PropTypes.string.isRequired
};

export default Todo;
