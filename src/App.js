import "./App.css";
import Form from "./Components/Form";
import React, { useEffect } from "react";
import { useState } from "react";
import Todolist from "./Components/Todolist";

function App() {
  const [inputText, setinputText] = useState("");
  const [todos, settodos] = useState([]);
  useEffect(() => {
    getLocal();
  }, []);
  useEffect(() => {
    saveLocal();
  });

  const saveLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let Local = JSON.parse(
        localStorage.getItem("todos", JSON.stringify("todos"))
      );
      settodos(Local);
    }
  };

  return (
    <div className="App">
      <header>TO DO LIST</header>
      <Form
        inputText={inputText}
        setinputText={setinputText}
        todos={todos}
        settodos={settodos}
      />
      <Todolist todos={todos} settodos={settodos} />
    </div>
  );
}

export default App;
