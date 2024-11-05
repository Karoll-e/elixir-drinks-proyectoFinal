import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Tarea 1", "Tarea 2"]);
  const addTodo = (todo) => setTodos([...todos, todo]);

  return (
    <div>
      <h2>Lista de tareas</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
        <AddTodo onAddTodo={addTodo} />
      </ul>
    </div>
  );
}

function AddTodo({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar Tarea</button>
    </div>
  );
}

export { TodoList, AddTodo };
