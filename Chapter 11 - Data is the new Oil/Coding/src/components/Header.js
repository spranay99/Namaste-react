import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState(false);
  const checkStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <nav>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>

        <div className="nav-items">
          <ul>
            <li>Online Status: {checkStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
            <li>
              <Link to="/grocery"> Grocery</Link>
            </li>
            <li>Cart</li>
            <button className="filter-btn" onClick={() => setLogin(!login)}>
              {login ? "Log out" : "Log in"}
            </button>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
