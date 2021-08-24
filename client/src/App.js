import { useMutation, useQuery } from '@apollo/client'
import react, { useEffect, useState } from 'react'
import './App.scss'
import { CREATE_USER } from './mutation/user'
import { GET_ALL_USERS } from './query/user'

function App() {
  // const { data, loading, error, refetch } = useQuery(GET_ALL_USERS, {
  //   pollInterval: 500,
  // })
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS)
  const [users, setUsers] = useState([])
  const [newUser] = useMutation(CREATE_USER)
  // const [newUser] = useMutation(CREATE_USER)
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)

  useEffect(() => {
    console.log(data)
  }, [data])

  const addUser = () => {
    console.log(username, age)
    newUser({
      variables: {
        input: {
          username,
          age: parseInt(age),
        },
      },
    }).then(({ data }) => {
      console.log(data)
    })
  }

  return (
    <div className="App">
      <div className="form_input">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
        />
        <button onClick={() => refetch()}>get</button>
        <button onClick={addUser}>create</button>
      </div>
      <div className="content">
        <p>content</p>
      </div>
    </div>
  )
}

export default App
