import {Link, useNavigate} from "react-router-dom";
import "../register/register.scss";
import {useState} from "react";
import {Button} from "@mui/material";
import axios from "axios";

const TeacherLogin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()

  const handleLogin = () => {
    axios({
      method: "POST",
      url: "http://localhost:8080/login/teacher",
      data: {
        email: email,
        password: password
      }
    }).then(res => {
      localStorage.setItem("umrikey", res.data.user.id)
      navigate("/home/dashboard")
    }).catch(error => alert("Authentication failed"))
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Urmi</h1>
          <h2>FOUNDATION</h2>

          <p>
            We stand for special ones.
          </p>
        </div>
        <div className="right">
          <h1>Login Teacher</h1>
          <form>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <Button
              onClick={handleLogin}>
              Login Teacher
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;