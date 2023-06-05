import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      
    });
  
    return () => {
      window.removeEventListener('scroll', () => {
       
      });
    };
    
  }, []);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Trauma Informed Growth</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/PVT">
              What's PVT? 
            </Link>

            <Link className="navLink" to="/feedback">
              Feedback 
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
