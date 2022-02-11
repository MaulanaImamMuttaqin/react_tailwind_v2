import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Components from './components'
import Login from './components/main/Login'
import ContextProvider, { GlobalContext } from './context/Provider'
// import TypingField from './pages/ContentLogic/TypingField'

function App() {
  const location = useLocation()


  return (
    <ContextProvider>
      <Routes location={location} key={location.pathname}>
        <Route path='Admin/Auth/login' element={<Login />} />
        <Route path='Admin/*' element={<Components />} />
      </Routes>
    </ContextProvider>
  )
}

export default App
