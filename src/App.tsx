import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowDownRight, ArrowRight, Award, BarChart3, CalendarDays, Check,
  ChevronDown, Clock3, ExternalLink, Facebook, Globe2, Instagram, Lightbulb,
  Linkedin, MapPin, Menu, MoveUpRight, Rocket, ShieldCheck, Sparkles,
  Target, Trophy, Users, X, Youtube,
} from 'lucide-react';

const event = {
  shortDates: '28 — 29 OCT 2026',
  time: '10:00 AM — 6:00 PM',
  registrationUrl: 'https://forms.gle/v95W2UdKuG1YYir98',
  mapUrl: '#location',
};

const topics = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Production Services',
    copy: 'Innovative solutions that improve production, efficiency, and sustainable operations.'
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Oil Conservation & Energy Sustainability',
    copy: 'Ideas focused on conserving energy, improving efficiency, and building a sustainable energy future.'
  },
  {
    number: '03',
    icon: Globe2,
    title: 'Water Conservation & Resources Sustainability',
    copy: 'Solutions for responsible water use, conservation, management, and sustainable resource development.'
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Pollution Prevention',
    copy: 'Innovative approaches to reduce pollution, waste, and environmental impact.'
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'AI Devices',
    copy: 'AI-powered devices and technologies designed to solve real-world sustainability challenges.'
  },
];
const timeline = [
  ['01', 'Registration', 'Open now · Details to be announced'],
  ['02', 'Business plan submission', 'Date to be announced'],
  ['03', 'Shortlisting', 'Date to be announced'],
  ['04', 'Presentation / pitching', '28 — 29 October 2026'],
  ['05', 'Final evaluation', '28 — 29 October 2026'],
  ['06', 'Results', 'To be announced'],
];

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label"><span />{children}</p>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-10-28T10:00:00+05:30').getTime();
    const tick = () => {
      const difference = Math.max(target - Date.now(), 0);
      setTimeLeft({ days: Math.floor(difference / 86400000), hours: Math.floor((difference / 3600000) % 24), minutes: Math.floor((difference / 60000) % 60), seconds: Math.floor((difference / 1000) % 60) });
    };
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('main section:not(.hero)');
    sections.forEach((s) => s.setAttribute('data-reveal', ''));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Business Plan 2026 home"><span className="brand-mark"><Sparkles size={18} /></span><span><b>VENTURE X 2026</b><small>BIT MESRA - NOIDA CAMPUS · 2026</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {['About', 'Challenge', 'Prizes', 'Timeline', 'Location'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href={event.registrationUrl} onClick={closeMenu}>Register <MoveUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-copy reveal"><SectionLabel>National Level Sustainable Innovation and Startup Pitch Competition "VentureX 2026"</SectionLabel><h1>VENTURE<br /><em>X</em> <strong>2026</strong></h1><p className="hero-lede">Where ideas become ventures, and ventures become <span>impact.</span></p><div className="hero-actions"><a className="button button-primary" href={event.registrationUrl}>Register now <MoveUpRight size={17} /></a><a className="button button-ghost" href="#about">Explore event <ArrowDownRight size={17} /></a></div><div className="hero-meta"><span><CalendarDays size={17} /> {event.shortDates}</span><span><Clock3 size={17} /> {event.time}</span></div></div>
          <div className="hero-art reveal delay-one" aria-hidden="true"><div className="art-ring ring-large" /><div className="art-ring ring-small" /><div className="lightbulb-art"><Lightbulb size={74} strokeWidth={1.15} /><div className="bulb-spark spark-a" /><div className="bulb-spark spark-b" /><div className="bulb-spark spark-c" /></div><div className="chart-bars"><i /><i /><i /><i /><i /></div><Rocket className="rocket-art" size={46} strokeWidth={1.2} /><Globe2 className="globe-art" size={58} strokeWidth={1} /><div className="art-caption">CREATE<br /><b>YOUR</b><br />OPPORTUNITY</div></div>
          <div className="countdown-card"><div><span className="eyebrow">THE CLOCK IS RUNNING</span><b>Until the big idea day</b></div><div className="countdown"><strong>{String(timeLeft.days).padStart(3, '0')}<small>days</small></strong><i>:</i><strong>{String(timeLeft.hours).padStart(2, '0')}<small>hrs</small></strong><i>:</i><strong>{String(timeLeft.minutes).padStart(2, '0')}<small>min</small></strong><i>:</i><strong>{String(timeLeft.seconds).padStart(2, '0')}<small>sec</small></strong></div></div>
        </section>

        <section id="about" className="about section-pad section-light"><div className="section-intro"><SectionLabel>The opportunity</SectionLabel><h2>A VENTURE X 2026 is<br /><span>just the beginning.</span></h2></div><div className="about-copy"><p className="lead-copy">VentureX 2026 is a national-level sustainable innovation and startup pitch competition by the Entrepreneurship Club, BIT Mesra – Noida Campus.
</p><p>A platform for young innovators to pitch ideas, connect with industry experts, gain valuable feedback, and develop innovative solutions to real-world sustainability challenges.</p><a className="text-link" href="#challenge">Discover the challenge <ArrowRight size={16} /></a></div><div className="about-stats"><div><b>01</b><span>Big idea<br />to business</span></div><div><b>04</b><span>People<br />per team</span></div><div><b>IN</b><span>Across India<br />invited</span></div></div></section>

        <section id="challenge" className="challenge section-pad"><div className="section-intro intro-row"><div><SectionLabel>The challenge</SectionLabel><h2>Make your move.</h2></div><p>Three lanes. One opportunity to think bigger. Official challenge topics will be released to registered participants.</p></div><div className="topic-grid">{topics.map(({ number, icon: Icon, title, copy }) => <article className="topic-card" key={number}><span className="card-number">{number}</span><Icon size={29} strokeWidth={1.4} /><h3>{title}</h3><p>{copy}</p><span className="card-arrow"><MoveUpRight size={17} /></span></article>)}</div></section>

        <section className="participants section-pad section-dark"><div className="participant-visual"><div className="visual-grid" /><Users size={62} strokeWidth={1} /><div className="four-count">04</div><span>people in<br />each team</span></div><div className="participant-copy"><SectionLabel>Who should enter</SectionLabel><h2>Ideas are better<br /><span>when shared.</span></h2><p>We’re inviting teams from B-Schools, Engineering Colleges, Universities and Higher Education Institutions from across India.</p><div className="check-list"><span><Check size={16} /> Student-led teams</span><span><Check size={16} /> Four people per team</span><span><Check size={16} /> Institutions across India</span></div></div></section>

        <section id="prizes" className="prizes section-pad section-light"><div className="prize-heading"><SectionLabel>The reward</SectionLabel><h2>Ideas worth<br /><span>investing in.</span></h2><p>Bring the plan. Earn the platform. Take your first step toward BIT-NISHAN.</p></div><div className="prize-list"><div className="prize-card first"><span className="prize-place">01 / FIRST PRIZE</span><Trophy size={39} strokeWidth={1.2} /><b>₹31,000</b><small>For the boldest business plan</small></div><div className="prize-card second"><span className="prize-place">02 / SECOND PRIZE</span><Award size={35} strokeWidth={1.2} /><b>₹21,000</b><small>For a plan with momentum</small></div><div className="prize-card third"><span className="prize-place">03 / THIRD PRIZE</span><Target size={32} strokeWidth={1.2} /><b>₹11,000</b><small>For an idea with promise</small></div></div></section>

        <section className="people section-pad"><div className="section-intro intro-row"><div><SectionLabel>The room</SectionLabel><h2>Meet the minds<br /><span>behind the next big thing.</span></h2></div><p>Investors, mentors and judges who will help ideas get sharper. Profiles will be announced soon.</p></div><div className="people-grid">{['Investors', 'Mentors', 'Judges'].map((label, index) => <div className="person-card" key={label}><div className="person-orb">{index === 0 ? <BarChart3 /> : index === 1 ? <Lightbulb /> : <ShieldCheck />}</div><span>Coming soon</span><h3>{label}</h3><p>Profiles and participation details will be added here.</p><button aria-label={`Learn more about ${label}`}>Learn more <ArrowRight size={16} /></button></div>)}</div></section>

        <section id="timeline" className="timeline section-pad section-dark"><div className="section-intro"><SectionLabel>The journey</SectionLabel><h2>From first spark<br /><span>to final pitch.</span></h2></div><div className="timeline-list">{timeline.map(([number, title, detail]) => <div className="timeline-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div><ArrowRight size={17} /></div>)}</div></section>

        <section id="location" className="location section-pad section-light"><div className="location-map"><div className="map-lines" /><div className="map-pin"><MapPin size={28} fill="currentColor" /></div><span className="map-label">BIT MESRA</span><div className="map-coord">23°24' N<br />85°26' E</div></div><div className="location-copy"><SectionLabel>Save the date</SectionLabel><h2>See you<br /><span>at BIT MESRA - NOIDA Campus.</span></h2><div className="date-block"><CalendarDays /><div><b>28th — 29th October 2026</b><span>10:00 AM — 6:00 PM</span></div></div><div className="date-block"><MapPin /><div><b>BIT Mesra</b><span>Ranchi, Jharkhand</span></div></div><a className="text-link" href={event.mapUrl}>Open map <ExternalLink size={15} /></a></div></section>

        <section id="registration" className="register section-pad"><div className="register-stamp"><Rocket size={28} /><span>YOUR<br />MOMENT<br />IS NOW</span></div><div><SectionLabel>Take the first step</SectionLabel><h2>Don’t wait for<br /><span>opportunity.</span></h2><p>Opportunities don’t happen. You create them.</p></div><a className="button button-primary button-large" href={event.registrationUrl}>Register now <MoveUpRight size={18} /></a><p className="editable-note">Registration link will be updated here.</p></section>

        <section className="organizers section-pad">
  <div>
    <SectionLabel>In collaboration with</SectionLabel>
    <h2>
      Built by a community<br />
      that <span>believes.</span>
    </h2>
  </div>

  <div className="org-list">
    <div>
      <b>Institute Innovation Cell</b>
      <span>BIT Mesra - Noida Campus</span>
    </div>

    <div>
      <b>EDC</b>
      <span>Entrepreneurship Development Cell</span>
    </div>
  </div>
</section>
        <section id="contact" className="contact section-pad section-light"><div><SectionLabel>Stay connected</SectionLabel><h2>Let’s build<br /><span>what’s next.</span></h2></div><div className="contact-fields"><div><small>CONTACT PERSON</small><b>Shristi Kashyap</b>
<b>Harshita Jaiswal</b>
<b>Dhrubajyoti Paul</b></div><div><small>PHONE</small><b>To be updated</b></div><div><small>EMAIL</small><b>To be updated</b></div><div><small>WEBSITE</small><b>edcbitmesra.in</b></div></div></section>
      </main>

      <footer className="footer"><div className="footer-top"><a className="brand" href="#top"><span className="brand-mark"><Sparkles size={18} /></span><span><b>BUSINESS PLAN</b><small>BIT MESRA - NOIDA Campus · 2026</small></span></a><p><br /><i></i></p><div className="socials"><a href="https://www.instagram.com/bitnoidacampus/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a><a href="https://www.linkedin.com/company/bit-noida-campus/posts/?feedView=all" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a><a href="https://www.facebook.com/share/19EnUHWRmc/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={18} /></a><a href="https://youtube.com/@bitmesranoidacampus?si=WRuPEwLyefx9cuVM" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
  <Youtube size={18} />
</a></div></div><div className="footer-bottom"><span>© 2026 Business Plan · BIT Mesra</span><div><a href="#about">About</a><a href="#prizes">Prizes</a><a href="#registration">Register</a><a href="#contact">Contact</a></div><a href="#top">Back to top <ChevronDown size={15} className="rotate-180" /></a></div></footer>
    </div>
  );
}

export default App;
