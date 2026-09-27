'use client';

import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Database,
  GraduationCap,
  Laptop,
  Mail,
  Menu,
  Network,
  Palette,
  Play,
  Server,
  X,
} from 'lucide-react';
import Logo from './Logo';

const navItems = [
  ['About', 'about'],
  ['Expertise', 'expertise'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Services', 'services'],
  ['Contact', 'contact'],
];

const expertise = [
  { icon: GraduationCap, number: '01', title: 'ICT Education', text: 'Teaching ICT, digital literacy and computer applications with a practical, learner-centred approach.' },
  { icon: Laptop, number: '02', title: 'ICT Facilitation', text: 'Digital skills workshops, technology support and capacity development for people and organisations.' },
  { icon: Code2, number: '03', title: 'Web Development', text: 'Responsive personal, school, educational and institutional websites with clear content architecture.' },
  { icon: Database, number: '04', title: 'Data Systems', text: 'Structured data preparation, validation, uploads, organisation and reporting support.' },
  { icon: Server, number: '05', title: 'Systems Support', text: 'Computer setup, software configuration, troubleshooting and dependable user support.' },
  { icon: Palette, number: '06', title: 'Creative Media', text: 'Graphic design, audio, video and digital content that communicates clearly.' },
];

const projects = [
  { category: 'WEB', title: 'Digital Portfolio Platform', text: 'A premium personal-brand experience for presenting education, technology and creative work.', tags: ['Next.js', 'TypeScript', 'UI Design'] },
  { category: 'DATA', title: 'School Data Workflow', text: 'A demonstration workflow for organising, validating and preparing education data for reporting.', tags: ['Data Quality', 'Reporting', 'Excel'] },
  { category: 'EDUCATION', title: 'Digital Learning Resources', text: 'Practical digital resources designed to help learners connect classroom concepts with technology.', tags: ['ICT', 'Content', 'Training'] },
];

const skillGroups = [
  ['Education', ['Teaching', 'Facilitation', 'Assessment', 'Lesson Planning']],
  ['Technology', ['ICT', 'Computer Applications', 'Web Development', 'Systems Support']],
  ['Data', ['EMIS', 'AMIS', 'Data Uploads', 'Reporting']],
  ['Creative', ['Graphics', 'Audio', 'Video', 'Digital Content']],
  ['Geography', ['Fieldwork', 'Map Reading', 'Field Organisation']],
  ['Professional', ['Communication', 'Teamwork', 'Problem Solving', 'Organisation']],
];

const services = ['ICT Training', 'Website Development', 'School Data Support', 'Digital Systems Support', 'Graphic Design', 'Audio & Video', 'Report Development', 'Bulk SMS Management'];

export default function PortfolioHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
        <div className="container nav-wrap">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="Tumwebaze Benson home">
            <Logo width={52} height={52} />
            <span className="brand-copy"><small>TUMWEBAZE</small><strong>BENSON</strong></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <a className="button button-small button-primary nav-cta" href="#contact">Let&apos;s connect <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}<a className="button button-primary" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={15} /></a></nav>}
      </header>

      <section id="top" className="hero section-grid">
        <div className="hero-grid container">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> ICT EDUCATOR / DIGITAL SYSTEMS / CREATIVE TECHNOLOGY</p>
            <h1>TUMWEBAZE <em>BENSON</em></h1>
            <p className="hero-role">ICT Educator <span>•</span> Digital Technology Professional</p>
            <p className="hero-text">I combine education, technology, data, digital systems and creative media to develop practical solutions for learning, communication and organisational needs.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ChevronRight size={17} /></a><a className="button button-outline" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a></div>
            <div className="hero-proof"><span>EDUCATION</span><span>TECHNOLOGY</span><span>DATA</span><span>CREATIVITY</span></div>
          </div>
          <div className="hero-mark reveal delay-2"><div className="orbital orbital-one" /><div className="orbital orbital-two" /><div className="hero-logo-card"><Logo width={290} height={290} /><div className="orbit-label label-one">EDU</div><div className="orbit-label label-two">DATA</div><div className="orbit-label label-three">WEB</div><div className="orbit-label label-four">MEDIA</div></div></div>
        </div>
      </section>

      <section className="marquee" aria-label="Brand disciplines"><div className="marquee-track"><span>TUMWEBAZE BENSON ✦ ICT EDUCATOR ✦ DIGITAL TECHNOLOGY ✦ EDUCATION ✦ DATA ✦ SYSTEMS ✦</span><span aria-hidden="true">TUMWEBAZE BENSON ✦ ICT EDUCATOR ✦ DIGITAL TECHNOLOGY ✦ EDUCATION ✦ DATA ✦ SYSTEMS ✦</span></div></section>
      <section className="marquee marquee-alt"><div className="marquee-track"><span>WEB DEVELOPMENT • TRAINING • DESIGN • MEDIA • GEOGRAPHY • DIGITAL SOLUTIONS •</span><span aria-hidden="true">WEB DEVELOPMENT • TRAINING • DESIGN • MEDIA • GEOGRAPHY • DIGITAL SOLUTIONS •</span></div></section>

      <section id="about" className="section container about"><div className="section-heading"><p className="eyebrow">01 / PROFILE</p><h2>More than an <em>ICT professional.</em></h2></div><div className="about-grid"><p className="statement">Teach. Build.<br /><em>Manage. Design.<br />Train. Create.</em></p><div className="body-copy"><p>I am a multidisciplinary professional working at the intersection of education, ICT, digital systems, data, creative media and fieldwork.</p><p>My focus is practical problem-solving: helping learners build confidence, helping organisations use technology effectively, and creating digital experiences that are useful, accessible and meaningful.</p></div></div></section>

      <section className="section ecosystem-section"><div className="container"><div className="section-heading centered"><p className="eyebrow">02 / ECOSYSTEM</p><h2>One professional ecosystem.<br /><em>Many ways to create impact.</em></h2></div><div className="ecosystem"><div className="eco-ring ring-one" /><div className="eco-ring ring-two" /><div className="eco-center"><Logo width={78} height={78} /><strong>TB</strong><small>TUMWEBAZE BENSON</small></div>{['Education', 'Technology', 'Data', 'Systems', 'Web', 'Design', 'Media', 'Geography'].map((item, index) => <a className={`eco-node node-${index + 1}`} href="#expertise" key={item}>{item}</a>)}</div></div></section>

      <section id="expertise" className="section container"><div className="section-heading split-heading"><div><p className="eyebrow">03 / EXPERTISE</p><h2>Built for practical<br /><em>digital impact.</em></h2></div><p className="section-intro">Connecting education, technology and creativity to the real needs of people, schools and organisations.</p></div><div className="card-grid">{expertise.map(({ icon: Icon, number, title, text }) => <article className="feature-card" key={title}><div className="card-top"><span className="card-number">{number}</span><Icon size={25} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Discuss ${title}`}>Explore <ArrowUpRight size={16} /></a></article>)}</div></section>

      <section className="section feature-band"><div className="container feature-band-grid"><div><p className="eyebrow">04 / TEACHING TECHNOLOGY</p><h2>Technology is most powerful when people can <em>use it with confidence.</em></h2><p className="section-intro">From computer literacy and digital learning to practical workshops, I design learning experiences that explain, demonstrate, practise and apply.</p><a className="button button-outline" href="#contact">Discuss training <ArrowUpRight size={16} /></a></div><div className="process-list">{['Explain', 'Demonstrate', 'Practise', 'Apply', 'Improve'].map((item, index) => <div className="process-item" key={item}><b>0{index + 1}</b><span>{item}</span><ChevronRight size={17} /></div>)}</div></div></section>

      <section id="projects" className="section container"><div className="section-heading split-heading"><div><p className="eyebrow">05 / SELECTED WORK</p><h2>Projects &<br /><em>practical work.</em></h2></div><p className="section-intro">A growing portfolio of work across web, education and data. Demonstrations use anonymised or placeholder information.</p></div><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className={`project-visual visual-${index + 1}`}><span>{project.category}</span><div className="visual-lines" /></div><div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.text}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section id="skills" className="section skills-section"><div className="container"><div className="section-heading centered"><p className="eyebrow">06 / CAPABILITIES</p><h2>Skills shaped by <em>practice.</em></h2></div><div className="skills-grid">{skillGroups.map(([title, items]) => <div className="skill-group" key={title as string}><h3>{title as string}</h3><div>{(items as string[]).map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

      <section id="services" className="section container"><div className="section-heading"><p className="eyebrow">07 / SERVICES</p><h2>How I can <em>help.</em></h2></div><div className="service-list">{services.map((service, index) => <a href="#contact" className="service-item" key={service}><span>0{index + 1}</span><strong>{service}</strong><ArrowUpRight size={21} /></a>)}</div></section>

      <section id="contact" className="section contact-section"><div className="container contact-grid"><div><p className="eyebrow">08 / CONTACT</p><h2>Let&apos;s build something <em>useful.</em></h2><p className="section-intro">Have a project, training need, website idea, digital systems challenge or collaboration opportunity?</p><div className="privacy-note"><Mail size={18} /><span>Your message is handled professionally. Private personal and institutional information is never displayed publicly.</span></div></div><form className="contact-form" onSubmit={submit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="your@email.com" /></label><label>Organisation<input name="organisation" placeholder="School or organisation" /></label><label>Service<select name="service"><option>ICT Training</option><option>Website Development</option><option>School Data Support</option><option>Graphic Design</option><option>Other</option></select></label><label className="full">Message<textarea required name="message" rows={5} placeholder="Tell me about your project or idea" /></label><button className="button button-primary full" type="submit">{sent ? <>Message sent successfully <Check size={17} /></> : <>Send message <ArrowUpRight size={17} /></>}</button></form></div></section>

      <section className="final-cta"><div className="container"><p>EDUCATION.</p><p className="blue">TECHNOLOGY.</p><p>DATA.</p><p className="blue">CREATIVITY.</p><div className="final-cta-bottom"><span>Practical skills. Digital solutions. Meaningful impact.</span><a className="button button-primary" href="#contact">Let&apos;s connect <ArrowUpRight size={17} /></a></div></div></section>
      <footer className="footer"><div className="container footer-grid"><div className="brand"><Logo width={55} height={55} /><span className="brand-copy"><small>TUMWEBAZE</small><strong>BENSON</strong></span></div><p>ICT Educator • Digital Technology Professional</p><p>© 2026 Tumwebaze Benson. All Rights Reserved.</p></div></footer>
    </main>
  );
}
