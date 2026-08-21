import './Team.css';
import teamBg from '../../assets/backgrounds/Meet the team background with no borders.svg';

import abdullah from '../../assets/headshots/abdullah.webp';
import adam from '../../assets/headshots/adam.webp';
import ali from '../../assets/headshots/ali.webp';
import anushka from '../../assets/headshots/anushka.webp';
import aryan from '../../assets/headshots/aryan.webp';
import ava from '../../assets/headshots/ava.webp';
import basil from '../../assets/headshots/basil.webp';
import ben from '../../assets/headshots/ben.webp';
import caden from '../../assets/headshots/caden.webp';
import chris from '../../assets/headshots/chris.webp';
import daisy from '../../assets/headshots/daisy.webp';
import emily from '../../assets/headshots/emily.webp';
import erin from '../../assets/headshots/erin.webp';
import franklin from '../../assets/headshots/franklin.webp';
import harshpreet from '../../assets/headshots/harshpreet.webp';
import ivan from '../../assets/headshots/ivan.webp';
import jamie from '../../assets/headshots/jamie.webp';
import jeremy from '../../assets/headshots/jeremy.webp';
import lily from '../../assets/headshots/lily.webp';
import nahyun from '../../assets/headshots/nahyun.webp';
import newsha from '../../assets/headshots/newsha.webp';
import parth from '../../assets/headshots/parth.webp';
import peter from '../../assets/headshots/peter.webp';
import philip from '../../assets/headshots/philip.webp';
import sayeon from '../../assets/headshots/sayeon.webp';
import shaeshan from '../../assets/headshots/shaeshan.webp';
import shinena from '../../assets/headshots/shinena.webp';
import sunny from '../../assets/headshots/sunny.webp';
import thanusshan from '../../assets/headshots/thanusshan.webp';
import vickie from '../../assets/headshots/vickie.webp';
import vishal from '../../assets/headshots/vishal.webp';
import winston from '../../assets/headshots/winston.webp';
import youssef from '../../assets/headshots/youssef.webp';

const members = {
  ali:        { name: 'Ali',        role: 'Development Executive' },
  abdullah:   { name: 'Abdullah',   role: 'Development Executive' },
  anushka:    { name: 'Anushka',    role: 'Sponsorship Executive' },
  aryan:      { name: 'Aryan',      role: 'Development Executive' },
  adam:       { name: 'Adam',       role: 'UI/UX Executive' },
  ava:        { name: 'Ava',        role: 'UI/UX Director' },
  basil:      { name: 'Basil',      role: 'Sponsorship Executive' },
  ben:        { name: 'Ben',        role: 'Sponsorship Executive' },
  caden:      { name: 'Caden',      role: 'Logistics Executive' },
  chris:      { name: 'Chris',      role: 'Marketing Executive' },
  daisy:      { name: 'Daisy',      role: 'Sponsorship Director' },
  emily:      { name: 'Emily',      role: 'Logistics Director' },
  erin:       { name: 'Erin',       role: 'Sponsorship Director' },
  franklin:   { name: 'Franklin',   role: 'IgnitionHacks Advisor' },
  harshpreet: { name: 'Harshpreet', role: 'IgnitionHacks Chair' },
  ivan:       { name: 'Ivan',       role: 'Marketing Executive' },
  jamie:      { name: 'Jamie',      role: 'Sponsorship Executive' },
  jeremy:     { name: 'Jeremy',     role: 'Development Executive' },
  lily:       { name: 'Lily',       role: 'UI/UX Executive' },
  nahyun:     { name: 'Nahyun',     role: 'Marketing Executive' },
  newsha:     { name: 'Newsha',     role: 'Sponsorship Executive' },
  parth:      { name: 'Parth',      role: 'Sponsorship Executive' },
  philip:     { name: 'Philip',     role: 'Logistics Executive' },
  shinena:    { name: 'Shinena',    role: 'Logistics Executive' },
  sunny:      { name: 'Sunny',      role: 'Development Director' },
  sayeon:     { name: 'Sayeon',     role: 'Marketing Executive' },
  thanusshan: { name: 'Thanusshan', role: 'Marketing Director' },
  vishal:     { name: 'Vishal',     role: 'Logistics Executive' },
  vickie:     { name: 'Vickie',     role: 'UI/UX Executive' },
  peter:      { name: 'Peter',      role: 'UI/UX Executive' },
  shaeshan:   { name: 'Shaeshan',   role: 'Logistics Executive' },
  winston:    { name: 'Winston',    role: 'UI/UX Executive' },
  youssef:    { name: 'Youssef',    role: 'Development Director' },

};

function Pin({ src, id, className }) {
  const { name, role } = members[id];
  return (
    <div className={`hs-wrap ${className}`}>
      <div className="hs-label">
        <span className="hs-label-name">{name}</span>
        <span className="hs-label-role">{role}</span>
      </div>
      <img src={src} alt={name} className="hs-img" loading="lazy" decoding="async" />
    </div>
  );
}

export default function MeetTheTeam() {
  return (
    <section className="team" id="team">
      <img src={teamBg} alt="Meet the Team" className="team-bg" loading="lazy" decoding="async" />

      <Pin src={abdullah}    id="abdullah"    className="hs-abdullah" />
      <Pin src={adam}        id="adam"        className="hs-adam" />
      <Pin src={ali}         id="ali"         className="hs-ali" />
      <Pin src={anushka}     id="anushka"     className="hs-anushka" />
      <Pin src={aryan}       id="aryan"       className="hs-aryan" />
      <Pin src={ava}         id="ava"         className="hs-ava" />
      <Pin src={basil}       id="basil"       className="hs-basil" />
      <Pin src={ben}         id="ben"         className="hs-ben" />
      <Pin src={caden}       id="caden"       className="hs-caden" />
      <Pin src={chris}       id="chris"       className="hs-chris" />
      <Pin src={daisy}       id="daisy"       className="hs-daisy" />
      <Pin src={emily}       id="emily"       className="hs-emily" />
      <Pin src={erin}        id="erin"        className="hs-erin" />
      <Pin src={franklin}    id="franklin"    className="hs-franklin" />
      <Pin src={harshpreet}  id="harshpreet"  className="hs-harshpreet" />
      <Pin src={ivan}        id="ivan"        className="hs-ivan" />
      <Pin src={jamie}       id="jamie"       className="hs-jamie" />
      <Pin src={jeremy}      id="jeremy"      className="hs-jeremy" />
      <Pin src={lily}        id="lily"        className="hs-lily" />
      <Pin src={nahyun}      id="nahyun"      className="hs-nahyun" />
      <Pin src={newsha}      id="newsha"      className="hs-newsha" />
      <Pin src={parth}       id="parth"       className="hs-parth" />
      <Pin src={peter}       id="peter"       className="hs-peter" />
      <Pin src={philip}      id="philip"      className="hs-philip" />
      <Pin src={sayeon}      id="sayeon"      className="hs-sayeon" />
      <Pin src={shaeshan}    id="shaeshan"    className="hs-shaeshan" />
      <Pin src={shinena}     id="shinena"     className="hs-shinena" />
      <Pin src={sunny}       id="sunny"       className="hs-sunny" />
      <Pin src={thanusshan}  id="thanusshan"  className="hs-thanusshan" />
      <Pin src={vickie}      id="vickie"      className="hs-vickie" />
      <Pin src={vishal}      id="vishal"      className="hs-vishal" />
      <Pin src={winston}     id="winston"     className="hs-winston" />
      <Pin src={youssef}     id="youssef"     className="hs-youssef" />
    </section>
  );
}
