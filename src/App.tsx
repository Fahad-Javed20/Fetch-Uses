import { useEffect, useState } from 'react'
import './App.css'
import UserListComponent from './components/UserListComponent'
import type { UserType } from './types/UserType'

function App() {

  const [users, setUsers] = useState<UserType[]>([])

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users")
      const data = await response.json()
      setUsers(data.users)
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <UserListComponent users={users} />
    </>
  )
}

export default App
