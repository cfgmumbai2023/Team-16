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
          <h1>Urmi.</h1>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p> */}
          {/* <span>Don't you have an account?</span> */}
          {/* <Link to="/register"> */}
            {/* <button>Register</button> */}
          {/* </Link> */}
        </div>
        <div className="right">
          {/* <h1>Login</h1> */}
          <form>
            {/* <input type="text" placeholder="Username" /> */}
            {/* <input type="password" placeholder="Password" /> */}
            <div className="division">
              <Link to="/register">
                <button>Admin Login</button>
               </Link>
              <button>Teacher Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;