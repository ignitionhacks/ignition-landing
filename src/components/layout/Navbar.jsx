import "./Navbar.css";
import logo from "../../assets/illustrations/nav/logo.svg";
import insta from "../../assets/illustrations/nav/insta.svg";
import linkedin from "../../assets/illustrations/nav/linkedin.svg";
import email from "../../assets/illustrations/nav/email.svg";

const PACKAGE_URL =
  "https://drive.google.com/file/d/1ckH3ViA48qnRfCsN2CnGqUJt48AJQajA/view?usp=sharing";
const MAIL_IGNITION = "mailto:ignitionhacks@gmail.com";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Ignition Hacks Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <div className="navbar-buttons">
            <a
              className="navbar-sponsor-btn"
              href={PACKAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our 2027 sponsorship package (opens in new tab)"
            >
              View our 2027 sponsorship package
            </a>
            <a
              className="navbar-sponsor-btn navbar-sponsor-btn--secondary"
              href={MAIL_IGNITION}
            >
              Become a sponsor
            </a>
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
