import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Chats from './Chats';
import Index from './Index';
import Chatting from './Chatting';
import Find from './Find';
import More from './More';
import Profile from './Profile';
import Login from '../routes/Login';

function AppRouter() {
  const [isLoggedIn, setIsLggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? ( 
        <>
          <Route path='/' element={<Chats />} />
          <Route path='/Chatting' element={<Chatting />} />
        </>
        ) : (
          <Route path='/' element={<Login />} />
        )}


      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter