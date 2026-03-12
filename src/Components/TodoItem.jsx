import { useState } from "react";

export default function TodoItem({ todo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleSave() {
    if (!editText.trim()) return;
    onUpdate(todo.id, editText);
    setIsEditing(false);
  }

  return (
    <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 border-2 border-purple-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={handleSave}
            className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-3 py-1 rounded-lg text-sm transition-colors"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="flex-1 text-gray-700 text-sm">{todo.text}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded-lg text-sm transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg text-sm transition-colors"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}