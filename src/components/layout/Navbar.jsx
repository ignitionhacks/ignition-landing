import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/illustrations/nav/logo.png';
import loginBtn from '../../assets/illustrations/nav/login.png';
import registrationBtn from '../../assets/illustrations/nav/registration.png';
import insta from '../../assets/illustrations/nav/insta.png';
import linkedin from '../../assets/illustrations/nav/linkedin.png';
import email from '../../assets/illustrations/nav/email.svg';

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Ignition Hacks Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <div className="navbar-buttons">
          <button className="navbar-btn" onClick={() => setShowPopup(true)}>
            <img src={loginBtn} alt="Login" />
          </button>
          <button className="navbar-btn" onClick={() => setShowPopup(true)}>
            <img src={registrationBtn} alt="Registration" />
          </button>
        </div>
        <div className="navbar-socials">
          <a href="https://www.instagram.com/ignitionhacks/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://linkedin.com/company/ignition-hacks/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:contact@ignitionhacks.org">
            <img src={email} alt="Email" />
          </a>
        </div>
      </div>
    </nav>

    {showPopup && (
      <div className="popup-overlay" onClick={() => setShowPopup(false)}>
        <div className="popup-box" onClick={e => e.stopPropagation()}>
          <p>Hacker applications are not open yet. Keep an eye on our social media for updates on when they go live!</p>
          <button onClick={() => setShowPopup(false)}>Got it!</button>
        </div>
      </div>
    )}
    </>
  );
}
