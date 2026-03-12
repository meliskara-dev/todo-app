export function createTodo(text) {
  return { id: Date.now(), text: text };
}

export function getTodos() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}