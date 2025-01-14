import React from 'react'
import Home from './components/Home'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Addblog from './components/Addblog'
import Navbar from './components/Navbar'
import Main from './components/Main'


const App = () => {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/blogs' element={<Main child={<Home />}/>}></Route>
        <Route path='/addblogs' element={<Main child={<Addblog />}/>}></Route>  {/*  used props*/}
        </Routes>               
    </>
  )
}

export default App