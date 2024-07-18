import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, i start Creating</h1>

      <div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <a href="#">test A</a>
      <p>
        Vite createt
      </p>
    </>
  )
}

export default App
