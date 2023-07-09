// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  //   const { login } = useContext(AuthContext);

  //   const handleLogin = () => {
  // login();
  //   };

  return (
    <div className="login">
      
      <div className="card">
        <div className="left">
          <h1>Urmi</h1>
          <h2>FOUNDATION</h2>
          <p>We stand for special ones.</p>
        </div>
        <div className="right">
          {/* <h1>Login</h1> */}
          <form>
            {/* <input type="text" placeholder="Username" /> */}
            {/* <input type="password" placeholder="Password" /> */}
            <div className="division">
              <Link to="/register">
                <div class="button">
                  <span>TEACHER LOGIN</span>
                </div>
                <div class="button">
                  <span>ADMIN LOGIN</span>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
