import './App.css';

import React, {useCallback, useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home';
import Details from './components/Details';
import Quiz from './components/Quiz'

function App() {
 
  return (
   <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/home/details' element={<Details/>} />
        <Route path='/home/details/quiz' element={<Quiz/>} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
