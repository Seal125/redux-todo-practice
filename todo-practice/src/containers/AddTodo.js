import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onFocus={(e) => (e.target.value = "")}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
