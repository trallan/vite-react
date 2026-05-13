import { useState, useEffect } from 'react'
import './App.css'
import randomData from './randomData.json'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [data, setData] = useState(randomData)

  const users = data.users

  function handleClick(){
  	setCount(count + 1)
  }

  function handleChange(e){
  	setName(e.target.value)
  }

  return (
	<>
	<div>
	<h1>Hello !</h1>
	<button onClick={handleClick}>Count: {count}</button>
	<label>Enter your name</label>
	<input name="name" type="text" onChange={handleChange}></input>
	<h3>Your name is: {name}</h3>

	<button onClick={() => alert(`${name}, why did you press the button...`)}>Dont Press</button>
	</div>
	<div>
	{users.map((user) => (<li key={user.id}>{user.name} | {user.email} | {user.age} | {user.role}</li>))}
	</div>
	</>
  )
}

export default App
