import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <nav>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>

        <div className="nav-items">
          <ul>
            <li>Search</li>
            <li>Offers</li>
            <li>Help</li>
            <li>List</li>
            <button className="filter-btn" onClick={() => setLogin(!login)}>
              {login ? "Log out" : "Log in"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
