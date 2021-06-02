import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const members = [
    { name: "shawon", major: "eee" },
    { name: "masum", major: "eee" },
    { name: "arafat", major: "cse" }
  ]
  return (
    <div className="App">
      <Counter />
      <Users />
      {
        members.map((member, index) => <Profile member={member} key={index} />)
      }
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10)
  const handleIncrease = () => setCount(count + 1)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>

  )
}
function Users() {
  const [users, setusers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setusers(data))

  }, [])


  return (
    <div>
      <h1>Dynamic Users : {users.length}</h1>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
      {
        console.log(users)
      }
    </div>
  )
}

function Profile(props) {
  var style = {
    border: '2px solid grey',
    borderRadius: '20px',
    margin: '10px',
    width: '400px',
    height: '200px',
    float: 'left'
  }

  const { name, major } = props.member

  return (
    <div style={style}>
      <h1>Name : {name}</h1>
      <h3>Major : {major}</h3>
    </div>
  )
}

export default App;
