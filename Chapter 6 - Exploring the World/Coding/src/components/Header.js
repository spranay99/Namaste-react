import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
