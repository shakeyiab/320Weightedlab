import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'

function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Walk Dog', complete: false },
    { id: 2, text: 'Code for 1hr ', complete: false },
    { id: 3, text: 'Meal Prep', complete: false }
  ]);

  // Handle checkbox toggle (mark todo as complete/incomplete)
  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    ));
  };

  // Handle deleting a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
              {todo.text}
            </span>

            {/* Delete button */}
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              disabled={!todo.complete}  // Disable delete unless the todo is complete
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;












