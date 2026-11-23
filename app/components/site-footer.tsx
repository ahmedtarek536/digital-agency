import { services } from "./service-showcase";

const pages = [["Home", "/"], ["Services", "/services"], ["Case studies", "/work"], ["About us", "/about"]];

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-cta"><div><span>HAVE A GOOD PROBLEM?</span><h2>Let’s make it<br/><em>matter.</em></h2></div><a className="footer-start" href="/contact">Start your journey <span>↗</span></a><span className="footer-cta-orbit" aria-hidden="true"/></div>
    <div className="footer-grid">
      <div className="footer-brand"><a className="wordmark footer-mark" href="/">nexora<span className="wordmark-dot">.</span></a><p>Turning ideas into digital growth.<br/>Independent by design. Built in Egypt.</p></div>
      <div className="footer-column"><h3>OUR SERVICES</h3>{services.map((service) => <a href={`/services#service-${service.n}`} key={service.n}>{service.title}</a>)}</div>
      <div className="footer-column"><h3>EXPLORE</h3>{pages.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a href="/contact">Contact</a></div>
      <div className="footer-column footer-contact"><h3>START A CONVERSATION</h3><a className="footer-email" href="mailto:hello@nexora.agency">hello@nexora.agency <span>↗</span></a><p>Cairo, Egypt<br/>Working with good people everywhere.</p><a href="/contact">Tell us what you’re building <span>↗</span></a></div>
    </div>
    <div className="footer-bottom"><span>© NEXORA 2026</span><span>STRATEGY · CREATIVITY · TECHNOLOGY</span><a href="#top">BACK TO TOP ↑</a></div>
  </footer>;
}
