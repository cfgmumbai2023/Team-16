import React from 'react'
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          
        </Routes>
    </div>
  )
}

export default App