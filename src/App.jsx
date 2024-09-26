import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Navbar from './components/NavBar.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import './App.css'

function App() {

  return (
    <>
     
      <nav>

      <h1>Vite + React</h1>
      </nav>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<HomePage />}/>
        
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/profile/:id' 
        element={<ProfilePage />}/>

        {/* have to  use : before id*/}
        </Routes>
    
   
    </>
  )
}

export default App
