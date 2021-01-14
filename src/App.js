import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./store/actions/todo";
import "./styles.css";

export default function App() {
  // const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const addTodoItem = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  const toggleTodoItem = (id) => {
    dispatch(toggleTodo(id));
  };

  const deleteTodoItem = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="App">
      <form onSubmit={addTodoItem}>
        <input
          style={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </form>
      <ul>
        {todos.map((i) => (
          <div
            key={i.id}
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <li
              style={i.finished ? { textDecoration: "line-through" } : {}}
              onClick={() => toggleTodoItem(i.id)}
            >
              {i.title}
            </li>

            <button onClick={() => deleteTodoItem(i.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
