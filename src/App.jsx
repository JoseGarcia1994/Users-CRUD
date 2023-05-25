import axios from 'axios'
import './App.css'
import { useState, useEffect } from 'react'
import UsersList from './components/UsersList'
import Form from './components/Form'
import Warning from './components/Warning'
import NoUser from './components/NoUser'

function App() {

  const [users, setUsers] = useState([ ])
  const [updateUser, setUpdateUser] = useState(null)
  const [warning, setWarning] = useState(false)
  const [eliminateUser, setEliminateUser] = useState(null)
  const [showForm, setShowForm] = useState(false)

  /* ===================READ================= */

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setUsers(resp.data))
      .catch(error => console.error(error))
  }

  /* ===================CREATE================= */

  const createUser = (user) => {
    axios
      .post("https://users-crud.academlo.tech/users/", user)
      .then(() => getUsers())
      .catch(error => console.error(error))
  }

  /* ===================UPDATE================= */

  const UserSelected = userData => {
    setUpdateUser(userData)
  }

  const updatedUser = userData => {

    axios
      .put(`https://users-crud.academlo.tech/users/${userData.id}/`, userData)
      .then(() => {
        getUsers()
        setUpdateUser(null)
      })
      .catch(error => console.error(error))
  }

  /* =================== DELETE ================= */

  const deleteUser = eliminateUser => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${eliminateUser.id}/`)
      .then(() => {
        getUsers()
        setWarning()
        setEliminateUser(null)
      })
      .catch(error => console.error(error))
  }

  const getWarning = (user) => {
    setWarning(true)
    setEliminateUser(user)
  }

  const deleteCancel = () => {
    setWarning(false)
    setEliminateUser(null)
  }


  return (
    <div className='App'>

      <div className='nav__bar'>
        <h2 className='nav__title'>Users</h2>
        <button className='nav__btn' onClick={() => setShowForm(!showForm)}><i className='bx bx-plus bx-xs'></i>Add User</button>
      </div>

      {
        showForm && <Form 
        addUser={createUser}
        updUser={updatedUser}
        selectedUser={updateUser}
        setShowForm={setShowForm}
      />
      }

      {
        users.length <= 0 ? <NoUser /> : 
        <div className='card__container'>
        <UsersList
          usersData={users}
          selectUser={UserSelected}
          getWarning={getWarning}
          setShowForm={setShowForm}
        />
      </div>
      }
      
      
      
      
      {
        warning && <Warning 
        deleteUser={deleteUser}
        eliminateUser={eliminateUser}
        cancel={deleteCancel}
      />
      } 

        
    </div>
  )
}

export default App
