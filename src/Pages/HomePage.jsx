import { useState, useEffect } from "react";
import TodoForm from "../Components/TodoForm";
import TodoItem from "../Components/TodoItem";
import { createTodo, getTodos, saveTodos } from "../Interfaces/todo";

export default function HomePage() {
  const [todos, setTodos] = useState(() => getTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  function addTodo(text) {
    setTodos([...todos, createTodo(text)]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  function updateTodo(id, newText) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-300 to-red-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-2">
          TO DO LIST
        </h1>
        <p className="text-center text-gray-400 text-sm mb-6">
          Follow your tasks and stay organized!
        </p>
        <TodoForm onAdd={addTodo} />
        {todos.length > 0 && (
          <p className="text-sm text-gray-400 mb-3">{todos.length} tasks.</p>
        )}
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
          ))}
        </div>
        {todos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-4xl mb-2">📝</p>
            <p className="text-gray-400">No tasks yet.</p>
            <p className="text-gray-300 text-sm">You can add tasks from above.</p>
          </div>
        )}
      </div>
    </div>
  );
}