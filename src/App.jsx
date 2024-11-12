import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import addnew from './addnew' // i attempted to add new todo but by importing it from add new but everytim i tried tp import
// my code broke 



const App = () => {
  
  // Initial list of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Walk The Dog', complete: false, isEditing: false },
    { id: 2, text: 'Code for 1hr', complete: false, isEditing: false },
    { id: 3, text: 'Meal Prep', complete: false, isEditing: false },
  ]);

  // Function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to handle editing a todo
  const startEditing = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: true } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to handle saving the edited todo
  const saveEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to handle text change in the edit input
  const handleEditChange = (e, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: e.target.value } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      {/* Render the todo list */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {/* If the todo is being edited, show a text input */}
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => handleEditChange(e, todo.id)}
                />
                <button onClick={() => saveEdit(todo.id, todo.text)}>Save</button>
              </>
            ) : (
              <>
                {/* Display the todo text, apply strikethrough if complete */}
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => toggleComplete(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.complete ? 'line-through' : 'none',
                    marginLeft: '8px',
                  }}
                >
                  {todo.text}
                </span>

                {/* Edit and Delete buttons */}
                <button onClick={() => startEditing(todo.id)}>Edit</button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  disabled={!todo.complete} // Delete button is only enabled if the todo is complete
                  style={{
                    backgroundColor: todo.complete ? '#f44336' : '#ddd',
                    cursor: todo.complete ? 'pointer' : 'not-allowed',
                    color: todo.complete ? 'white' : '#aaa',
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    

  
  </div>
  );
};


export default App;












