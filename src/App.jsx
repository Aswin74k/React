import React from 'react'
import { ThemeProvider } from './functional-component/Hooks/useContext/theme/ThemeContext'
import Home from './functional-component/Hooks/useContext/theme/Home'
import { UserApiProvider } from './functional-component/Hooks/useContext/theme/user-list/UserApiContext'
import UserList from './functional-component/Hooks/useContext/theme/user-list/UserList'

const App = () => {
  return (
    <>
      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}

      {/* 2.user List */}
      <UserApiProvider>
      <UserList/>
      </UserApiProvider>
    </>
  )
}

export default App
