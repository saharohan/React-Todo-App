import React from "react";
import TodoItems from "./TodoItems";

const Todolist = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            todos={props.todos}
            settodos={props.settodos}
          />
        ))}
      </ul>
    </div>
  );
};
export default Todolist;
