import React from 'react'
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css';
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
    </div>
  )
}

export default App