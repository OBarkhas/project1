"use client";

import { useState } from "react";

const Page = () => {
  const [inputValue, setinputValue] = useState("");
  const [todos, settodos] = useState([]);

  const Handleinputvalue = () => {
    setinputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue === "") return;
    settodos([...todos, { task: inputValue, id: Date.now() }]);
    setinputValue("");
  };

  const deleteTodo = (todoId) => {
    const newTodo = todos.filter((todo) => todo.id !== todoId);
    settodos(newTodo);
  };

  return (
    <div>
      <input
        className=" border border-indigo-600"
        value={inputValue}
        onChange={(e) => Handleinputvalue(e)}
        placeholder="write here..."
      />
      <button onClick={addTodo} className="text-2xl">
        Add
      </button>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex gap-4">
            <div>{todo.task}</div>
            <div>{todo.id}</div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default Page;
