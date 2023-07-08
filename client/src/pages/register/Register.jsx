import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Urmi</h1>
          <h2>FOUNDATION</h2>

          <p>
            We stand for special ones.
          </p>
          <Link to="/login">
          <button id="admin_dash">Go To Admin Dashboard</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register Teacher</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register Teacher</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;