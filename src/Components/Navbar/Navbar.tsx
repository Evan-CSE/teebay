import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import { useState } from "react";

function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  return (
        <nav className='navbar'>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li>
              <Link to = {'/products'} className={`${styles.navLink}`}>Home</Link>
            </li>
            <li>
              <Link to = {'/products'} className={`${styles.navLink}`}>All products</Link>
            </li>
            <li>
              <Link to = {'/bought'} className={`${styles.navLink}`}>Bought</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
  );
}
export default Navbar;