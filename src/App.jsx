import {
  Gauge,
  Globe,
  LayoutTemplate,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
  ShoppingBag,
  Sparkles,
  Wrench,
  ArrowUpRight,
  Menu,
  X,
  Check,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

const services = [
  ["Business Websites", "Build trust with a polished digital home for your business.", Globe, "business"],
  ["E-Commerce Websites", "Turn browsing into buying with a storefront built to convert.", ShoppingBag, "commerce"],
  ["Landing Pages", "Focused pages that make your next campaign impossible to miss.", LayoutTemplate, "landing"],
  ["UI/UX Design", "Clear, considered interfaces designed around real people.", Palette, "uiux"],
  ["Responsive Design", "A seamless experience across every screen and device.", Smartphone, "responsive"],
  ["Website Maintenance", "Keep your website current, secure, and running smoothly.", Wrench, "maintenance"],
  ["SEO Optimization", "Help the right customers find you when they are looking.", Search, "seo"],
];

const reasons = [
  ["Fast Performance", "A quick, smooth experience keeps customers moving.", Gauge],
  ["Mobile Friendly", "Your business looks its best wherever customers find it.", Smartphone],
  ["Modern UI", "Interfaces that feel current, clear, and easy to use.", Sparkles],
  ["Professional Design", "A digital presence that earns attention and trust.", Palette],
  ["Secure & Reliable", "A dependable foundation for your business online.", ShieldCheck],
];

const whatsappUrl = "https://wa.me/918148060443?text=Hi%20HEMOS%20Studio%2C%20I'm%20interested%20in%20launching%20a%20website%20for%20my%20business.%20I%20would%20like%20to%20know%20more%20about%20your%20services.";
const instagramUrl = "https://www.instagram.com/hemostudio/";
const processSteps = [
  ["01", "Discover", "Understand the business and requirements."],
  ["02", "Design", "Create a modern and professional UI/UX."],
  ["03", "Develop", "Build the responsive website using modern technology."],
  ["04", "Launch", "Deploy the website and make it ready for customers."],
];

function ServicePreview({ type }) {
  if (type === "commerce") return <div className="service-art art-commerce"><div className="art-top"><b>HEMOS SHOP</b><span>Cart (2)</span></div><strong>Curated for<br /><em>everyday.</em></strong><div className="art-products"><i /><i /><i /></div><small>$ 129.00 &nbsp; $ 84.00 &nbsp; $ 56.00</small></div>;
  if (type === "landing") return <div className="service-art art-landing"><small>THE NEW STANDARD</small><strong>Make an<br /><em>impression.</em></strong><span>Explore the experience <ArrowUpRight size={11} /></span><i /></div>;
  if (type === "uiux") return <div className="service-art art-uiux"><div className="ui-phone"><b>H</b><small>Good morning</small><strong>Find your<br /><em>flow.</em></strong><i /><i /></div><div className="ui-phone ui-phone-back"><b>H</b><i /><i /><i /></div></div>;
  if (type === "responsive") return <div className="service-art art-responsive"><div className="art-desktop"><b>H</b><i /><i /><i /><strong>One idea.<br /><em>Everywhere.</em></strong></div><div className="art-tablet"><i /><strong>Designed<br /><em>to move.</em></strong></div><div className="art-mobile"><b>H</b><strong>01<br /><em>03</em></strong></div></div>;
  if (type === "maintenance") return <div className="service-art art-maintenance"><div className="art-top"><b>SYSTEM STATUS</b><span>Live</span></div><strong>All systems<br /><em>operational.</em></strong><div className="status-list"><span>Performance <b>98%</b></span><span>Security <b>100%</b></span><span>Updates <b>04 ready</b></span></div></div>;
  if (type === "seo") return <div className="service-art art-seo"><div className="art-top"><b>GROWTH / 30D</b><span>+42.8%</span></div><strong>Visibility<br /><em>in motion.</em></strong><div className="seo-chart"><i /><i /><i /><i /><i /><i /><i /></div><small>Traffic &nbsp; Keywords &nbsp; Ranking</small></div>;
  return <div className="service-art art-business"><div className="art-browser"><div className="art-top"><b>HEMOS</b><i /><i /></div><strong>Build your<br /><em>presence.</em></strong><span>For businesses ready to be seen.</span><i /></div><div className="art-mini-phone"><b>H</b><strong>YOUR<br /><em>STORY.</em></strong></div></div>;
}

export default function App() {
  const reduced = usePrefersReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;
    const revealItems = document.querySelectorAll(".section-wrap, .service-card, .reason-card, .process-step, .showcase-visual");
    revealItems.forEach((item) => item.classList.add("reveal-target"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [reduced]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`site ${reduced ? "reduce-motion" : ""}`}>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="HEMOS Studio home">
          <span className="brand-mark">H</span>
          <span><strong>HEMOS</strong><small>Studio</small></span>
        </a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#top" onClick={closeMenu}>Home</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why HEMOS</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Get Started <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="kicker"><span /> High End Modern Online Solution</p>
            <h1>Does your business <em>have a website?</em></h1>
            <p className="hero-support">If not, you're losing potential customers every day.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">🚀 Launch Your Business Online Today <ArrowUpRight size={18} /></a>
              <a className="button button-quiet" href="#contact">Contact Us <ArrowUpRight size={18} /></a>
            </div>
            <div className="hero-proof"><span className="proof-dots"><i /><i /><i /></span> Websites that work as hard as you do</div>
          </div>
          <div className="device-stage" aria-label="Website shown on a laptop and mobile phone">
            <div className="glow" />
            <div className="laptop"><div className="screen"><div className="mock-nav"><b>HEMOS<span>.</span></b><i /><i /><i /></div><div className="mock-content"><small>MAKE YOUR MARK</small><strong>Build something<br /><span>worth finding.</span></strong><div className="mock-line" /><div className="mock-pill">Explore work <ArrowUpRight size={10} /></div></div><div className="mock-grid"><i /><i /><i /></div></div><div className="base" /></div>
            <div className="phone"><div className="phone-screen"><div className="phone-top"><b>H</b><i /><i /></div><small>01 / 03</small><strong>YOUR<br /><span>STORY</span><br />ONLINE.</strong><div className="phone-orb" /><div className="phone-bottom"><span>Scroll to explore</span><ArrowUpRight size={12} /></div></div></div>
            <span className="stage-label label-one">Digital presence / 001</span><span className="stage-label label-two">Designed to convert</span>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading"><div><p className="kicker"><span /> What we do</p><h2>What We <em>Build</em></h2></div><p>From first impression to final click, we create digital experiences that move your business forward.</p></div>
          <div className="service-grid">{services.map(([title, description, Icon, type]) => <article className="service-card" key={title}><button className="service-preview" type="button" onClick={() => setSelectedService({ title, description, Icon, type })} aria-label={`View ${title} preview`}><ServicePreview type={type} /><span className="preview-overlay">View Project <ArrowUpRight size={15} /></span></button><div className="service-card-meta"><div className="icon-box"><Icon size={20} /></div><div><h3>{title}</h3><p>{description}</p></div></div><button className="view-service" type="button" onClick={() => setSelectedService({ title, description, Icon, type })}>View Service <ArrowUpRight size={15} /></button></article>)}</div>
        </section>

        <section className="why-section section-wrap" id="why-us"><div className="why-intro"><p className="kicker"><span /> The HEMOS standard</p><h2>Built for<br /><em>Modern Businesses</em></h2><p>Every HEMOS website is made to make a strong first impression and keep working long after launch.</p></div><div className="reason-grid">{reasons.map(([title, description, Icon]) => <article className="reason-card" key={title}><Icon size={21} /><div><h3>{title}</h3><p>{description}</p></div><Check size={16} /></article>)}</div></section>

        <section className="process-section section-wrap" id="process"><div className="section-heading"><div><p className="kicker"><span /> How we build</p><h2>From idea<br /><em>to online.</em></h2></div><p>A clear, collaborative process that takes your business from first conversation to launch day.</p></div><div className="process-grid">{processSteps.map(([number, title, description]) => <article className="process-step" key={number}><span>{number}</span><div className="process-line" /><h3>{title}</h3><p>{description}</p></article>)}</div></section>

        <section className="showcase-section section-wrap"><div className="showcase-copy"><p className="kicker"><span /> One responsive system</p><h2>One Website.<br /><em>Every Screen.</em></h2><p>From desktop to tablet to mobile, your customers get a clear and consistent experience wherever they meet your business.</p><div className="screen-tags"><span>Desktop</span><span>Tablet</span><span>Mobile</span></div></div><div className="showcase-visual"><div className="showcase-desktop"><div className="showcase-bar" /><div className="showcase-hero"><small>HEMOS STUDIO</small><strong>Make your<br /><em>mark.</em></strong><i /></div><div className="showcase-cards"><i /><i /><i /></div></div><div className="showcase-tablet"><div className="showcase-bar" /><strong>Good design<br /><em>gets noticed.</em></strong><i /></div><div className="showcase-phone"><span>H</span><small>01 / 03</small><strong>BUILD<br /><em>BETTER.</em></strong></div></div></section>

        <section className="contact-section section-wrap" id="contact"><div><p className="kicker"><span /> Your next step</p><h2>Launch Your Business<br /><em>Online Today</em></h2></div><div className="contact-side"><p>Give your business a professional online presence with HEMOS Studio.</p><div className="contact-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">🚀 Launch Your Business Online Today <ArrowUpRight size={18} /></a><a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Us <ArrowUpRight size={18} /></a></div><div className="contact-details"><span>WhatsApp <strong>+91 8148060443</strong></span><span>Instagram <strong>@hemostudio</strong></span></div></div></section>
      </main>

      <footer className="site-footer"><div className="brand"><span className="brand-mark">H</span><span><strong>HEMOS</strong><small>Studio</small></span></div><p>High End Modern Online Solution</p><div className="footer-links"><a href="#services">Services</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div><small>© {new Date().getFullYear()} HEMOS Studio</small></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with HEMOS Studio on WhatsApp"><span>WA</span></a>
      {selectedService && <div className="service-modal-backdrop" role="presentation" onClick={() => setSelectedService(null)}><div className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" onClick={() => setSelectedService(null)} aria-label="Close service preview"><X size={20} /></button><div className="modal-preview"><ServicePreview type={selectedService.type} /></div><div className="modal-copy"><div className="icon-box"><selectedService.Icon size={20} /></div><h2 id="service-modal-title">{selectedService.title}</h2><p>{selectedService.description}</p></div></div></div>}
    </div>
  );
}
