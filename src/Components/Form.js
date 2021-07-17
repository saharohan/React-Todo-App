import React from "react";

const Form = (props) => {
  const inputHandler = (e) => {
    props.setinputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (props.inputText) {
      props.settodos([
        ...props.todos,
        { text: props.inputText, completed: false, id: Math.random() * 1000 },
      ]);
    } else {
      alert("Please Write Your Task First!");
    }
    props.setinputText("");
  };

  return (
    <form>
      <input
        type="text"
        onChange={inputHandler}
        className="todo-input"
        value={props.inputText}
        placeholder="Write Your Task Here"
      />

      <button
        className="custom-btn btn-6"
        onClick={submitHandler}
        type="submit"
      >
        <span>ADD</span>
      </button>
    </form>
  );
};
export default Form;
