import { useState } from 'react'

function project2() {
  const [count, setCount] = useState(100)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count - 1)}>
        project2 count is {count}
      </button>
    </div>
  )
}

export default project2
