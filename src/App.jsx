import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Navbar from './pages/Navbar'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Appointment from './pages/Appointment'

function App() {
  return (
   
    <div className='max-4 sm:mx-[10%]'>
     <Navbar />
     
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/doctors'element={<Doctors/>} />
        <Route path='/docters/:speciality'element={<Doctors />} />
        <Route path='/login'element={<Login />} />
        <Route path='/about'element={<About />} />
        <Route path='/my-profile'element={<MyProfile/>} />
        <Route path='/contact'element={<Contact />} />
        <Route path='/my-appontments'element={<MyAppointments />} />
        <Route path='/appointment/:docId'element={<Appointment />} />
      </Routes>

    </div>
  )
}


export default App