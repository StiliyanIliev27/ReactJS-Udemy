import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import demoImage from './assets/demo-image.avif'
import './App.css'

const reactDescriptions = [1, 2, 3];

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [count, setCount] = useState(0)
  const desc = reactDescriptions[getRandomInt(2)];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Random number when reload the page: {desc}</p>
      <img className="img" src={demoImage} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input type="text" placeholder="type..."/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
