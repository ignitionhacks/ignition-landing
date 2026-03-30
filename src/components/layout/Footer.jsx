import './Footer.css';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import emailIcon from '../../assets/icons/email-icon.svg';

const MAIL_IGNITION = 'mailto:ignitionhacks@gmail.com';

export default function Footer() {
  return (
    <div id="footer-container">
      <div id="icons-container">
        <a
          href="https://www.instagram.com/ignitionhacks/"
          className="footer-social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IgnitionHacks on Instagram (opens in new tab)"
        >
          <img src={instagramIcon} alt="" className="clickable-icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/ignition-hacks/"
          className="footer-social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IgnitionHacks on LinkedIn (opens in new tab)"
        >
          <img src={linkedinIcon} alt="" className="clickable-icon" />
        </a>
        <a
          href={MAIL_IGNITION}
          className="footer-social-link"
          aria-label="Email IgnitionHacks"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = MAIL_IGNITION;
          }}
        >
          <img src={emailIcon} alt="" className="clickable-icon" />
        </a>
      </div>
      <div>2026 IgnitionHacks</div>
    </div>
  );
}
