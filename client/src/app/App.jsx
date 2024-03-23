import { useState } from 'react'
import InputTodo from './views/components/InputTodo'
import ListTodo from './views/components/ListTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <InputTodo />
        <ListTodo />
      </div>
    </>
  )
}

export default App
