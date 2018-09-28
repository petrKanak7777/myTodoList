import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import RemoveTodo from "../containers/RemoveTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  /* JSX - syntactic sugar for 
               React.createElement(component, props, ...children) fun */
  /*<div>
    <AddTodo />
    <RemoveTodo />
    <VisibleTodoList />
    <Footer />
  </div>*/

  <div>
    {[
      React.createElement(AddTodo, { key: "app_0" }, null),
      React.createElement(RemoveTodo, { key: "app_1" }, null),
      React.createElement(VisibleTodoList, { key: "app_2" }, null),
      React.createElement(Footer, { key: "app_3" }, null)
    ]}
  </div>
);

export default App;
