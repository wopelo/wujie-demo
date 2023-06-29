import { useState } from 'react'

function Sub(props) {
  <div>{ props.count }</div>
}

function Project1() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        project1 count is {count}
      </button>
      <Sub count={count} />
    </div>
  )
}

export default Project1
