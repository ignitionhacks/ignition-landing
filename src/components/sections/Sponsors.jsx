import './Sponsors.css';
import sponsorsData from '../../data/sponsors.json';

const logoModules = import.meta.glob(
  '../../assets/sponsors/**/*.{png,jpg,jpeg,svg}',
  { eager: true }
);

function getLogoUrl(logoPath) {
  const key = `../../assets/sponsors/${logoPath}`;
  return logoModules[key]?.default;
}

const tiers = [
  { key: 'blaze', title: 'Blaze Sponsors' },
  { key: 'flame', title: 'Flame Sponsors' },
  { key: 'spark', title: 'Spark Sponsors' },
  { key: 'regular', title: 'Sponsors' },
];

export default function Sponsors() {
  const grouped = {};
  for (const tier of tiers) grouped[tier.key] = [];
  for (const s of sponsorsData) {
    if (grouped[s.tier]) grouped[s.tier].push(s);
  }

  return (
    <section className="sponsors-section" id="sponsors">
      <div className="sponsors-content">
        {tiers.map((tier) => (
          <div key={tier.key} className={`sponsors-tier sponsors-tier--${tier.key}`}>
            <h3 className="sponsors-tier__title">{tier.title}</h3>
            <div className="sponsors-grid">
              {grouped[tier.key].map((sponsor, i) => (
                <a
                  key={i}
                  className="sponsor-card"
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${sponsor.name} (opens in new tab)`}
                >
                  <img
                    className="sponsor-card__logo"
                    src={getLogoUrl(sponsor.logo)}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
