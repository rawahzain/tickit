import React, { useState } from 'react';
import AddTaskButton from './components/AddTaskButton';
import DeleteTaskButton from './components/DeleteTaskButton';
import CompleteTaskButton from './components/CompleteTaskButton';
import Header from './components/Header';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };


  return (
    
<div style={{ padding: '20px' }}> 
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <Header />
    <h2 style={{ margin: 0 }}>Tick-It</h2>
  </div>
  <br></br>
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Enter a task"
  />
  <AddTaskButton onClick={addTask} />

  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
    {tasks.map((task, index) => (
      <li key={index}>
        <span
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            marginRight: '10px',
          }}
        >
          {task.text}
        </span>
        <CompleteTaskButton onClick={() => toggleComplete(index)} />
        <DeleteTaskButton onClick={() => deleteTask(index)} />
      </li>
    ))}
  </ul>
</div>

  );
}

export default App;