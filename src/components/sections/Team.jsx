import './Team.css';
import teamBg from '../../assets/backgrounds/meet-the-team.png';

import adam from '../../assets/headshots/adam.png';
import anushka from '../../assets/headshots/anushka.png';
import aryan from '../../assets/headshots/aryan.png';
import ava from '../../assets/headshots/ava.png';
import caden from '../../assets/headshots/caden.png';
import chris from '../../assets/headshots/chris.png';
import daisy from '../../assets/headshots/daisy.png';
import emily from '../../assets/headshots/emily.png';
import erin from '../../assets/headshots/erin.png';
import haardik from '../../assets/headshots/haardik.png';
import harshpreet from '../../assets/headshots/harshpreet.png';
import ivan from '../../assets/headshots/ivan.png';
import jamie from '../../assets/headshots/jamie.png';
import jeremy from '../../assets/headshots/jeremy.png';
import lily from '../../assets/headshots/lily.png';
import nahyun from '../../assets/headshots/nahyun.png';
import philip from '../../assets/headshots/philip.png';
import sanidhya from '../../assets/headshots/sanidhya.png';
import sebastian from '../../assets/headshots/sebastian.png';
import shinena from '../../assets/headshots/shinena.png';
import sunny from '../../assets/headshots/sunny.png';
import thanusshan from '../../assets/headshots/thanusshan.png';
import vishal from '../../assets/headshots/vishal.png';
import winston from '../../assets/headshots/winston.png';
import youssef from '../../assets/headshots/youssef.png';

const members = {
  adam:       { name: 'Adam',       role: 'Development Executive' },
  anushka:    { name: 'Anushka',    role: 'Sponsorship Executive' },
  aryan:      { name: 'Aryan',      role: 'Development Executive' },
  ava:        { name: 'Ava',        role: 'UI/UX Executive' },
  caden:      { name: 'Caden',      role: 'Logistics Executive' },
  chris:      { name: 'Chris',      role: 'Marketing Director' },
  daisy:      { name: 'Daisy',      role: 'Sponsorship Executive' },
  emily:      { name: 'Emily',      role: 'Logistics Director' },
  erin:       { name: 'Erin',       role: 'Sponsorship Director' },
  haardik:    { name: 'Haardik',    role: 'Sponsorship Executive' },
  harshpreet: { name: 'Harshpreet', role: 'IgnitionHacks Chair' },
  ivan:       { name: 'Ivan',       role: 'Marketing Executive' },
  jamie:      { name: 'Jamie',      role: 'Sponsorship Director' },
  jeremy:     { name: 'Jeremy',     role: 'Development Executive' },
  lily:       { name: 'Lily',       role: 'UI/UX Director' },
  nahyun:     { name: 'Nahyun',     role: 'Marketing Executive' },
  philip:     { name: 'Philip',     role: 'Logistics Executive' },
  sanidhya:   { name: 'Sanidhya',   role: 'Logistics Executive' },
  sebastian:  { name: 'Sebastian',  role: 'Logistics Executive' },
  shinena:    { name: 'Shinena',    role: 'Logistics Executive' },
  sunny:      { name: 'Sunny',      role: 'Development Director' },
  thanusshan: { name: 'Thanusshan', role: 'Marketing Executive' },
  vishal:     { name: 'Vishal',     role: 'Logistics Executive' },
  winston:    { name: 'Winston',    role: 'UI/UX Executive' },
  youssef:    { name: 'Youssef',    role: 'Development Executive' },
};

function Pin({ src, id, className }) {
  const { name, role } = members[id];
  return (
    <div className={`hs-wrap ${className}`}>
      <div className="hs-label">
        <span className="hs-label-name">{name}</span>
        <span className="hs-label-role">{role}</span>
      </div>
      <img src={src} alt={name} className="hs-img" />
    </div>
  );
}

export default function MeetTheTeam() {
  return (
    <section className="team" id="team">
      <img src={teamBg} alt="Meet the Team" className="team-bg" />

      <Pin src={adam}        id="adam"        className="hs-adam" />
      <Pin src={anushka}     id="anushka"     className="hs-anushka" />
      <Pin src={aryan}       id="aryan"       className="hs-aryan" />
      <Pin src={ava}         id="ava"         className="hs-ava" />
      <Pin src={caden}       id="caden"       className="hs-caden" />
      <Pin src={chris}       id="chris"       className="hs-chris" />
      <Pin src={daisy}       id="daisy"       className="hs-daisy" />
      <Pin src={emily}       id="emily"       className="hs-emily" />
      <Pin src={erin}        id="erin"        className="hs-erin" />
      <Pin src={haardik}     id="haardik"     className="hs-haardik" />
      <Pin src={harshpreet}  id="harshpreet"  className="hs-harshpreet" />
      <Pin src={ivan}        id="ivan"        className="hs-ivan" />
      <Pin src={jamie}       id="jamie"       className="hs-jamie" />
      <Pin src={jeremy}      id="jeremy"      className="hs-jeremy" />
      <Pin src={lily}        id="lily"        className="hs-lily" />
      <Pin src={nahyun}      id="nahyun"      className="hs-nahyun" />
      <Pin src={philip}      id="philip"      className="hs-philip" />
      <Pin src={sanidhya}    id="sanidhya"    className="hs-sanidhya" />
      <Pin src={sebastian}   id="sebastian"   className="hs-sebastian" />
      <Pin src={shinena}     id="shinena"     className="hs-shinena" />
      <Pin src={sunny}       id="sunny"       className="hs-sunny" />
      <Pin src={thanusshan}  id="thanusshan"  className="hs-thanusshan" />
      <Pin src={vishal}      id="vishal"      className="hs-vishal" />
      <Pin src={winston}     id="winston"     className="hs-winston" />
      <Pin src={youssef}     id="youssef"     className="hs-youssef" />
    </section>
  );
}
