"use client";

import { useState } from "react";
import { SiteHeader } from "./components/site-header";
import { ServiceShowcase } from "./components/service-showcase";
import { SiteFooter } from "./components/site-footer";

const projects = [
  { name: "Solis House", type: "Brand & digital concept", category: "Branding", metric: "Illustrative concept", tone: "project-solis", mark: "solis", art: "A slower kind\nof somewhere." },
  { name: "NØRTH Athletics", type: "E-commerce concept", category: "Digital", metric: "Illustrative concept", tone: "project-north", mark: "NØRTH", art: "MOVE WITH\nINTENTION" },
  { name: "Morrow Finance", type: "AI product concept", category: "Technology", metric: "Illustrative concept", tone: "project-morrow", mark: "morrow", art: "Money, made\nmore human." },
  { name: "SpeakFlow", type: "AI communication concept", category: "Technology", metric: "Illustrative concept", tone: "project-speakflow", mark: "SpeakFlow", art: "SAY IT\nWITH CLARITY." },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>; }

export default function Home() {
  const [filter, setFilter] = useState("All work");
  const [sent, setSent] = useState(false);
  const shownProjects = filter === "All work" ? projects : projects.filter((project) => project.category === filter);

  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-art" aria-label="NEXORA creative studio artwork"><div className="art-photo photo-one"/><div className="art-photo photo-two"/><div className="art-photo photo-three"/><div className="art-photo photo-four"/><div className="art-photo photo-five"/><div className="art-shade"/></div>
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> DIGITAL GROWTH PARTNER · CAIRO, EGYPT</div>
          <h1>Ideas into<br /><span className="hero-highlight">impact<span className="highlight-star">✳</span></span><span className="hero-period">.</span></h1>
          <div className="hero-bottom"><p>Strategy, creativity and technology in one ambitious team. We build brands, digital products and growth that take your business further.</p><div className="hero-actions"><a className="button hero-journey" href="#contact">Start your journey <Arrow diagonal /></a></div></div>
        </div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE <span className="scroll-arrow">↓</span></span></div>
      </section>

      <section className="intro section-pad"><div className="section-label"><span>01 / A DIFFERENT KIND OF PARTNER</span><span>INDEPENDENT BY DESIGN</span></div><div className="intro-layout"><h2>We don't do<br />business as <span>usual.</span></h2><div className="intro-copy"><p className="lead">We're a digital growth partner for businesses ready to think bigger and move with purpose.</p><p>Part creative studio, part technology partner. We get close to your business, find the opportunity others miss, and bring the right people together to make it real.</p><a className="under-link" href="#about">A little more about us <Arrow /></a></div></div><div className="stats"><div><strong>6<span>+</span></strong><small>DISCIPLINES, ONE PARTNER</small></div><div><strong>01</strong><small>FOCUSED TEAM, FULL PICTURE</small></div><div><strong>∞</strong><small>ROOM TO THINK BIGGER</small></div><div className="stats-note">Made in Egypt.<br />Ready for everywhere.</div></div></section>

      <section className="services-section section-pad" id="services"><div className="section-label"><span>02 / WHAT WE DO</span><span>GOOD WORK, BUILT TO WORK</span></div><div className="services-heading"><h2>Ambition is the brief.</h2><p>Seven capabilities.<br/>One connected team.</p></div><ServiceShowcase /><div className="services-foot"><span>ONE TEAM. NO HANDOFFS.</span><a href="/services">Explore all services <Arrow /></a></div></section>

      <section className="work-section section-pad" id="work"><div className="section-label"><span>03 / SELECTED WORK</span><span>ILLUSTRATIVE CONCEPTS</span></div><div className="work-heading"><h2>Made to move people.</h2><p>A glimpse at the brands and digital experiences<br />we're here to make real.</p></div><div className="filters">{["All work", "Branding", "Digital", "Technology"].map((item) => <button className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="project-grid">{shownProjects.map((project, i) => <article className={`project-card ${i === 0 && shownProjects.length === 3 ? "project-featured" : ""}`} key={project.name}><div className={`project-visual ${project.tone}`}><span className="project-kicker">CONCEPT PROJECT &nbsp; / &nbsp; 0{i + 1}</span><div className="project-art-type"><span>{project.mark}</span><strong>{project.art}</strong></div><span className="project-orbit"/><span className="project-open"><Arrow diagonal /></span><span className="project-image-foot">{project.type.toUpperCase()}</span></div><div className="project-meta"><div><h3>{project.name}</h3><span>{project.type}</span></div><strong>{project.metric}</strong></div></article>)}</div><div className="work-foot"><span>CONCEPT WORK · PROJECTS COMING SOON</span><a href="#contact">Have a good problem? <Arrow /></a></div></section>

      <section className="manifesto" id="about"><div className="manifesto-top"><span>04 / WHY NEXORA</span><span>SMALL ENOUGH TO CARE. BIG ENOUGH TO DELIVER.</span></div><div className="manifesto-main"><span className="manifesto-star">✳</span><h2>Good work should<br />move <em>something.</em></h2><p>Not just a needle on a dashboard. A business, a category, a way of seeing what's possible. That's the standard we hold ourselves to.</p></div><div className="manifesto-bottom"><span>STRATEGY WITH SUBSTANCE.</span><span>CREATIVITY WITH DIRECTION.</span><span>TECHNOLOGY WITH A JOB TO DO.</span></div></section>

      <section className="approach section-pad"><div className="section-label"><span>05 / HOW WE WORK</span><span>A CLEAR PATH FROM BRIEF TO GROWTH</span></div><div className="approach-layout"><div className="approach-intro"><h2>Good work.<br/><span>Good process.</span></h2><p>Know what happens next at every step.</p></div><div className="steps"><article><span>01</span><div><h3>Discover</h3><p>We learn your goals, audience and constraints.</p></div></article><article><span>02</span><div><h3>Plan</h3><p>We agree on the strategy, scope and measures of success.</p></div></article><article><span>03</span><div><h3>Build</h3><p>Our team creates, shares progress and refines with you.</p></div></article><article><span>04</span><div><h3>Grow</h3><p>We launch, review results and improve what comes next.</p></div></article></div></div></section>

      <section className="reviews-section section-pad"><div className="section-label"><span>06 / PARTNER NOTES</span><span>SAMPLE COPY · NOT CLIENT TESTIMONIALS</span></div><div className="reviews-heading"><h2>Built around<br/><em>good partnerships.</em></h2><p>These short examples show the kind of outcomes we value. They are placeholders, not real client reviews.</p></div><div className="reviews-grid"><article className="review-card"><span className="review-kind">PRODUCT · SAMPLE</span><span className="review-quote">“</span><blockquote>Complex idea, clear product, ready for people to use.</blockquote><div className="review-source"><span className="review-avatar">S</span><div><strong>SpeakFlow concept</strong><small>Illustrative example</small></div></div></article><article className="review-card"><span className="review-kind">BRAND · SAMPLE</span><span className="review-quote">“</span><blockquote>A brand and digital experience that finally feel like one.</blockquote><div className="review-source"><span className="review-avatar">S</span><div><strong>Solis House concept</strong><small>Illustrative example</small></div></div></article><article className="review-card"><span className="review-kind">GROWTH · SAMPLE</span><span className="review-quote">“</span><blockquote>Clear priorities, steady collaboration, visible progress.</blockquote><div className="review-source"><span className="review-avatar">N</span><div><strong>NØRTH concept</strong><small>Illustrative example</small></div></div></article></div></section>

      <section className="contact-section section-pad" id="contact"><div className="section-label"><span>07 / YOUR MOVE</span><span>CAIRO · EVERYWHERE</span></div><div className="contact-layout"><div className="contact-copy"><h2>Something good<br />starts <span>here.</span></h2><p>Tell us what you're thinking. The big ambition, the knotty challenge, the idea you can't quite shake. We're listening.</p><a className="contact-email" href="mailto:hello@nexora.agency">hello@nexora.agency <Arrow diagonal /></a><a className="whatsapp-link" href="https://wa.me/201000000000" target="_blank" rel="noreferrer">Or say hello on WhatsApp <Arrow diagonal /></a></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><div className="form-row"><label>Your name<input required name="name" placeholder="The name we should know" /></label><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label></div><label>What are you looking to make happen?<select name="interest" defaultValue=""><option value="" disabled>Choose a starting point</option><option>Build a digital product</option><option>Grow my brand</option><option>Put AI to work</option><option>Make something else</option></select></label><label>A little about it<textarea required name="message" placeholder="The more context, the better. No deck needed." rows={3} /></label><button className="button button-dark form-submit" type="submit">{sent ? "Thanks — we'll be in touch" : "Send the first note"} <Arrow diagonal /></button><span className="form-privacy">JUST A REAL CONVERSATION. NO SALES SCRIPT.</span></form></div></section>

      <SiteFooter />
    </main>
  );
}
