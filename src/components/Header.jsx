import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
const Header = () => {
  const [login, setLogin] = useState('Login');
  const handleLogin = () => {
    login == 'Login' ? setLogin('logout') : setLogin('Login');
  };
  return (
    <div className="header">
      <div className="logo">
        <img className="logo_img" src={LOGO_URL} alt="" />
      </div>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact</li>
          <li>Cart</li>
          <button onClick={handleLogin} style={{ cursor: 'pointer' }}>
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
