import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../actions/index";

const RemoveTodo = ({ dispatch }) => {
  let input;

  return (
    <div style={{ marginTop: "2px" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(removeTodo(Number(input.value)));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
          style={{ marginRight: "2px" }}
        />
        <button type="submit">Remove Todo by id</button>
      </form>
    </div>
  );
};

export default connect()(RemoveTodo);
