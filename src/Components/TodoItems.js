import React from "react";
import "../App.css";

const TodoItems = (props) => {
  const deleteHandler = () => {
    props.settodos(props.todos.filter((el) => el.id !== props.todo.id));
  };

  const taskdoneHandler = () => {
    props.settodos(
      props.todos.map((todo1) => {
        if (todo1 === props.todo) {
          return {
            ...todo1,
            completed: !todo1.completed,
          };
        }
        return todo1;
      })
    );
  };

  <button onClick={taskdoneHandler} className="complete-btn1">
    <i className="fas fa-check"> </i>
  </button>;
  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.todo.text}
      </li>
      <button
        onClick={taskdoneHandler}
        className={`todo-item ${
          props.todo.completed ? "custom-btn99 btn-6" : "custom-btn99 btn-8"
        }`}
      >
        <i className="fas fa-check"> </i>
      </button>
      <button onClick={deleteHandler} className="custom-btn99 btn-7">
        <i className="fas fa-trash"> </i>
      </button>
    </div>
  );
};
export default TodoItems;
