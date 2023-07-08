import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import {HomePage} from "./pages/HomePage";
import {LoginPage} from "./pages/LoginPage";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route index element={<LoginPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage/>} />
        </Routes>
      </div>
  );
}

export default App;
