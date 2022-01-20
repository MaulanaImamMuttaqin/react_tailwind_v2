import React from 'react'
import Body from './components/main/Body'
import SideBar from './components/main/SideBar'
import ContextProvider from './context/Provider'
// import TypingField from './pages/ContentLogic/TypingField'

function App() {
  return (
    <ContextProvider>
      <div className='h-screen w-screen bg-gradient-to-tr from-cyan-900 to-cyan-700 flex'>
        <SideBar />
        <Body />
      </div>
    </ContextProvider>
  )
}

export default App
