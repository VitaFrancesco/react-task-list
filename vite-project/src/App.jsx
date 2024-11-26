import { useState } from 'react'
import './App.css'
import tasks from '../data/tasks.js'

function App() {
  const completedTasks = tasks.filter((el) => el.state === 'completed');
  const currentTasks = tasks.filter((el) => el.state !== 'completed');
  return (
    <>
      <header>
        <nav className='container'>
          <h1>Task Manager</h1>
        </nav>
      </header>
      <main className='container'>
        <section>
          <h2>Current Tasks</h2>
          <ul>
            {currentTasks.map((el, id) => (
              <li key={el.id}>
                <div className='headerTask'>
                  <h5>{el.title}</h5>
                  <div className='stateTasks'>{el.state}</div>
                </div>
                <p>Priority: {el.priority}</p>
                <p>Est. Time {el.estimatedTime}</p>
              </li>
            ))}
          </ul>
        </section>
        <hr />
        <section>
          <h2>Completed Tasks</h2>
          <ul>
            {completedTasks.map((el, id) => (
              <li key={el.id}>
                <div className='headerTask'>
                  <h5>{el.title}</h5>
                  <div className='stateTasks'>{el.state}</div>
                </div>
                <p>Priority: {el.priority}</p>
                <p>Est. Time {el.estimatedTime}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
