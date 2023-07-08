import React from 'react'
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css';
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import { HomePage } from './pages/HomePage';
import TeacherLogin from "./pages/teacher-login/TeacherLogin";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home/:tab" element={<HomePage/>}/>
          <Route path="/teacher-login" element={<TeacherLogin/>}/>
        </Routes>
    </div>
  )
}

export default App