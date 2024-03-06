import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState(false);
  const checkStatus = useOnlineStatus();
  return (
    <nav>
      <div className="flex justify-between shadow-2xl">
        <div>
          <img className="w-28" src={LOGO_URL} />
        </div>

        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {checkStatus ? "🟢" : "🔴"}</li>
            <li className="px-4">
              <Link to="/"> Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about"> About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact"> Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery"> Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
            <button className="px-4" onClick={() => setLogin(!login)}>
              {login ? "Log out" : "Log in"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
