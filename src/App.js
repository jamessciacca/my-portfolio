import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

//component imports
import Home from './components/Home';
import MoreAbout from './components/MoreAbout';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/MoreAbout' element={<MoreAbout />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
