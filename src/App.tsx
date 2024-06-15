import React, { useState } from 'react';
import './App.css';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Tarefa 1', completed: false },
    { id: '2', text: 'Tarefa 2', completed: false },
    { id: '3', text: 'Tarefa 3', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem: Todo = {
        id: new Date().toISOString(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Adicionar nova tarefa..."
      />
      <button onClick={addTodo}>Adicionar</button>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
