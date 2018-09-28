import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, removeTodo, changeTodoTextColor }) => (
  <ul>
    {todos.map(todo =>
      /* JSX - syntactic sugar for 
         React.createElement(component, props, ...children) fun */
      /*<Todo 
          key={todo.id}{...todo}
          param0='<test>' 
          onClick={() => toggleTodo(todo.id)} />,*/

      React.createElement(
        Todo,
        {
          key: todo.id,
          ...todo,
          param0: "<test>",
          textColor: todo.textColor,
          editTodo: () => toggleTodo(todo.id),
          remTodo: () => removeTodo(todo.id),
          changeTodoTextColor: () =>
            changeTodoTextColor(todo.id, genRandomColor())
        },
        null
      )
    )}
  </ul>
);

function genRandomColor() {
  const randColor = () => Math.floor(Math.random() * 255).toString();
  return "rgb(" + randColor() + ", " + randColor() + ", " + randColor() + ")";
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  changeTodoTextColor: PropTypes.func.isRequired
};

export default TodoList;
