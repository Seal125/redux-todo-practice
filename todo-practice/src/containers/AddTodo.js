import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!input.value) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input type='text' ref={(e) => (input = e)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
