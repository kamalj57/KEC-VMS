

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ showMenu, toggleMenu }) => {
  return (
    <>
      <nav data-aos="zoom-in">
        <input type="checkbox" id="check" checked={showMenu} />
        <label htmlFor="check" className="checkbtn" onClick={toggleMenu}>
        </label>
        <label className="logo">
          Kongu - VMS
        </label>
        <ul id="navbar" className={showMenu ? "show" : ""}>
          <li className="active" >
            <Link className='Admin' to="/sign-in" spy={true} smooth={true} offset={-70} duration={800} onClick={toggleMenu}>
              Admin
            </Link>
            <Link className='Tamil' to="/tamil" spy={true} smooth={true} offset={-70} duration={800} onClick={toggleMenu}>
              Tamil
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
