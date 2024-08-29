import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Sumz from './pages/Sumz/Sumz'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/sumz' element={<Sumz/>} />
        <Route path='/your' element={<Sumz/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
