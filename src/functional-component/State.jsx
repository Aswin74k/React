import React, { useState } from 'react'

const State = () => {
  const [time, setTime] = useState(0);

  const incrementTime = () => {
    setTime(time + 1);
  }
  return (
    <div>
      <h2>Time: {time}</h2>
      <button onClick={incrementTime}>Increment</button>
    </div>
  )
}

export default State
