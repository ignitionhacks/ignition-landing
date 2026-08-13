import './Faq.css';

import lightPinkTowel from '../../assets/illustrations/towels/light-pink-first-towel.svg';
import yellowTowel from '../../assets/illustrations/towels/yellow-second-towel.svg';
import lightBlueTowel from '../../assets/illustrations/towels/light-blue-third-towel.svg';
import darkBlueTowel from '../../assets/illustrations/towels/dark-blue-fourth-towel.svg';
import greenTowel from '../../assets/illustrations/towels/green-fifth-towel.svg';
import faqOverlay from '../../assets/illustrations/faq-overlay.svg';
import faqOverlayMobile from '../../assets/illustrations/faq-overlay-mobile.svg';

const towels = [
  {
    id: 1,
    src: lightPinkTowel,
    alt: 'Light pink towel',
    className: 'faq-towel--1',
    lines: ['How many people', 'on a team?'],
    answer: 'Teams can have up to 4 people.',
  },
  {
    id: 2,
    src: yellowTowel,
    alt: 'Yellow towel',
    className: 'faq-towel--2',
    lines: ['What if I don\u2019t', 'have a team?'],
    answer: 'You can sign up solo and we\u2019ll help match you with a team!',
  },
  {
    id: 3,
    src: lightBlueTowel,
    alt: 'Light blue towel',
    className: 'faq-towel--3',
    lines: ['How much does it', 'cost to attend?'],
    answer: 'It\u2019s completely free to attend.',
  },
  {
    id: 4,
    src: darkBlueTowel,
    alt: 'Dark blue towel',
    className: 'faq-towel--4',
    lines: ['How long will the', 'hackathon last?'],
    answer: 'Typically 24 hours from start to submission.',
  },
  {
    id: 5,
    src: greenTowel,
    alt: 'Green towel',
    className: 'faq-towel--5',
    lines: ['Who can', 'participate?'],
    answer: 'All high school and university students are welcome!',
  },
];

export default function Faq() {
  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-towels">
        {towels.map((towel) => (
          <div key={towel.id} className={`faq-towel ${towel.className}`}>
            <img src={towel.src} alt={towel.alt} loading="lazy" decoding="async" />
            <div className="faq-towel-content">
              <span className="faq-towel-text">
                {towel.lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < towel.lines.length - 1 && <br />}
                  </span>
                ))}
              </span>
              <p className="faq-towel-answer">{towel.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="faq-shadow faq-shadow--coconut" />
      <div className="faq-shadow faq-shadow--redball" />
      <div className="faq-overlay faq-overlay--desktop">
        <img src={faqOverlay} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="faq-overlay faq-overlay--mobile">
        <img src={faqOverlayMobile} alt="" loading="lazy" decoding="async" />
      </div>
    </section>
  );
}
