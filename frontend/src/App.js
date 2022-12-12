// import './App.css';
// import logo from './logo.svg';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from "./components/navbar.components";
import Home from "./components/home.components";  
import Approve from './components/approval.components';
import Display from './components/printApproved.component';
import CourseList from'./components/course.components';
import CourseForm from './components/courseForm.components';

function App() {

  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" exact element = {<Home/>} />
          <Route path='/update' exact element={<Approve />}/>
          <Route path='/Print' exact element={<Display />} />
          <Route path='/list' exact element={<CourseList />} />
          <Route path='/courseForm' exact element={<CourseForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
