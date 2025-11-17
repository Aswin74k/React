import React from 'react'
// import { ThemeProvider } from './functional-component/Hooks/useContext/theme/ThemeContext'
// import Home from './functional-component/Hooks/useContext/theme/Home'
// import { UserApiProvider } from './functional-component/Hooks/useContext/theme/user-list/UserApiContext'
// import UserList from './functional-component/Hooks/useContext/theme/user-list/UserList'
// import UseReducerExample from './functional-component/Hooks/useReducer/useReducer'
// import Navbar from './nested-routing/Navbar'
// import ShopcartPage from './nested-routing/pages/ShopcartPage'
import SimpleForm from './form/SimpleForm'
const App = () => {
  return (
    <>
      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}

      {/* 2.user List */}
      {/* <UserApiProvider>
      <UserList/>
      </UserApiProvider> */}

{/*----- nested-routing -----*/}
   {/* <Navbar/> */}
  
  <SimpleForm/>
      
    </>
  )
}

export default App
