import "./Navbar.css";
import logo from "../../assets/illustrations/nav/logo.svg";
import loginBtn from "../../assets/illustrations/nav/login.svg";
import registrationBtn from "../../assets/illustrations/nav/registration.svg";
import insta from "../../assets/illustrations/nav/insta.svg";
import linkedin from "../../assets/illustrations/nav/linkedin.svg";
import email from "../../assets/illustrations/nav/email.svg";

export default function Navbar() {
  const goToPortal = (route) => {
    window.location.href = `https://portal.ignitionhacks.org/${route}`;
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Ignition Hacks Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <div className="navbar-buttons">
            <button className="navbar-btn" onClick={() => goToPortal("login")}>
              <img src={loginBtn} alt="Login" />
            </button>
            <button className="navbar-btn" onClick={() => goToPortal("signup")}>
              <img src={registrationBtn} alt="Registration" />
            </button>
          </div>
          <div className="navbar-socials">
            <a
              href="https://www.instagram.com/ignitionhacks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" />
            </a>
            <a
              href="https://linkedin.com/company/ignition-hacks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="mailto:contact@ignitionhacks.org">
              <img src={email} alt="Email" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
