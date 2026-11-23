"use client";

import { useState } from "react";
import { SiteHeader } from "./components/site-header";
import { ServiceShowcase } from "./components/service-showcase";
import { SiteFooter } from "./components/site-footer";
import { useLocale } from "./components/locale-provider";

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
  const [chatOpen, setChatOpen] = useState(false);
  const { t, isArabic } = useLocale();
  const shownProjects = filter === "All work" ? projects : projects.filter((project) => project.category === filter);

  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-art" aria-label={isArabic ? "عمل بصري لاستوديو نكسورا الإبداعي" : "NEXORA creative studio artwork"}><div className="art-photo photo-one"/><div className="art-photo photo-two"/><div className="art-photo photo-three"/><div className="art-photo photo-four"/><div className="art-photo photo-five"/><div className="art-shade"/></div>
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> {t("DIGITAL GROWTH PARTNER · CAIRO, EGYPT")}</div>
          <h1>{isArabic ? <>أفكار تصنع<br/><span className="hero-highlight">أثرًا<span className="highlight-star">✳</span></span><span className="hero-period">.</span></> : <>Ideas into<br /><span className="hero-highlight">impact<span className="highlight-star">✳</span></span><span className="hero-period">.</span></>}</h1>
          <div className="hero-bottom"><p>{t("Strategy, creativity and technology in one ambitious team. We build brands, digital products and growth that take your business further.")}</p><div className="hero-actions"><a className="button hero-journey" href="#contact">{t("Start your journey")} <Arrow diagonal /></a></div></div>
        </div>
        <div className="hero-foot"><a className="scroll-explore" href="#intro">{t("SCROLL TO EXPLORE")} <span className="scroll-arrow">↓</span></a></div>
      </section>

      <section className="intro section-pad" id="intro"><div className="section-label"><span>{t("01 / A DIFFERENT KIND OF PARTNER")}</span><span>{t("INDEPENDENT BY DESIGN")}</span></div><div className="intro-layout"><h2>{isArabic ? <>لسنا هنا<br/>لنكرر <span>المعتاد.</span></> : <>We don&apos;t do<br />business as <span>usual.</span></>}</h2><div className="intro-copy"><p className="lead">{t("We're a digital growth partner for businesses ready to think bigger and move with purpose.")}</p><p>{t("Part creative studio, part technology partner. We get close to your business, find the opportunity others miss, and bring the right people together to make it real.")}</p><a className="under-link" href="#about">{t("A little more about us")} <Arrow /></a></div></div><div className="stats"><div><strong>6<span>+</span></strong><small>{t("DISCIPLINES, ONE PARTNER")}</small></div><div><strong>01</strong><small>{t("FOCUSED TEAM, FULL PICTURE")}</small></div><div><strong>∞</strong><small>{t("ROOM TO THINK BIGGER")}</small></div><div className="stats-note">{isArabic ? <>صُنع في مصر.<br/>وجاهز للعالم.</> : <>Made in Egypt.<br />Ready for everywhere.</>}</div></div></section>

      <section className="services-section section-pad" id="services"><div className="section-label"><span>{t("02 / WHAT WE DO")}</span><span>{t("GOOD WORK, BUILT TO WORK")}</span></div><div className="services-heading"><h2>{t("Ambition is the brief.")}</h2><p>{isArabic ? <>ستة تخصصات.<br/>فريق واحد متكامل.</> : <>Six capabilities.<br/>One connected team.</>}</p></div><ServiceShowcase /><div className="services-foot"><span>{t("ONE TEAM. NO HANDOFFS.")}</span><a href="/services">{t("Explore all services")} <Arrow /></a></div></section>

      <section className="work-section section-pad" id="work"><div className="section-label"><span>{t("03 / SELECTED WORK")}</span><span>{t("ILLUSTRATIVE CONCEPTS")}</span></div><div className="work-heading"><h2>{t("Made to move people.")}</h2><p>{isArabic ? <>لمحة عن العلامات التجارية والتجارب الرقمية<br/>التي نطمح إلى إنجازها.</> : <>A glimpse at the brands and digital experiences<br />we&apos;re here to make real.</>}</p></div><div className="filters">{["All work", "Branding", "Digital", "Technology"].map((item) => <button className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)} key={item}>{t(item)}</button>)}</div><div className="project-grid">{shownProjects.map((project, i) => <article className={`project-card ${i === 0 && shownProjects.length === 3 ? "project-featured" : ""}`} key={project.name}><div className={`project-visual ${project.tone}`}><span className="project-kicker">{t("CONCEPT PROJECT")} &nbsp; / &nbsp; 0{i + 1}</span><div className="project-art-type"><span>{project.mark}</span><strong>{t(project.art)}</strong></div><span className="project-orbit"/><span className="project-open"><Arrow diagonal /></span><span className="project-image-foot">{t(project.type).toUpperCase()}</span></div><div className="project-meta"><div><h3>{project.name}</h3><span>{t(project.type)}</span></div><strong>{t(project.metric)}</strong></div></article>)}</div><div className="work-foot"><span>{t("CONCEPT WORK · PROJECTS COMING SOON")}</span><a href="#contact">{t("Have a good problem?")} <Arrow /></a></div></section>

      <section className="manifesto" id="about"><div className="manifesto-top"><span>{t("04 / WHY NEXORA")}</span><span>{t("SMALL ENOUGH TO CARE. BIG ENOUGH TO DELIVER.")}</span></div><div className="manifesto-main"><span className="manifesto-star">✳</span><h2>{isArabic ? <>العمل الجيد<br/>يجب أن يحرّك <em>شيئًا.</em></> : <>Good work should<br />move <em>something.</em></>}</h2><p>{t("Not just a needle on a dashboard. A business, a category, a way of seeing what's possible. That's the standard we hold ourselves to.")}</p></div><div className="manifesto-bottom"><span>{t("STRATEGY WITH SUBSTANCE.")}</span><span>{t("CREATIVITY WITH DIRECTION.")}</span><span>{t("TECHNOLOGY WITH A JOB TO DO.")}</span></div></section>

      <section className="approach section-pad"><div className="section-label"><span>{t("05 / HOW WE WORK")}</span><span>{t("A CLEAR PATH FROM BRIEF TO GROWTH")}</span></div><div className="approach-layout"><div className="approach-intro"><h2>{isArabic ? <>عمل متقن.<br/><span>بمنهج واضح.</span></> : <>Good work.<br/><span>Good process.</span></>}</h2><p>{t("Know what happens next at every step.")}</p></div><div className="steps"><article><span>01</span><div><h3>{t("Discover")}</h3><p>{t("We learn your goals, audience and constraints.")}</p></div></article><article><span>02</span><div><h3>{t("Plan")}</h3><p>{t("We agree on the strategy, scope and measures of success.")}</p></div></article><article><span>03</span><div><h3>{t("Build")}</h3><p>{t("Our team creates, shares progress and refines with you.")}</p></div></article><article><span>04</span><div><h3>{t("Grow")}</h3><p>{t("We launch, review results and improve what comes next.")}</p></div></article></div></div></section>

      <section className="reviews-section section-pad"><div className="section-label"><span>{t("06 / PARTNER NOTES")}</span><span>{t("SAMPLE COPY · NOT CLIENT TESTIMONIALS")}</span></div><div className="reviews-heading"><h2>{isArabic ? <>شراكات<br/><em>تصنع فرقًا.</em></> : <>Built around<br/><em>good partnerships.</em></>}</h2><p>{t("These short examples show the kind of outcomes we value. They are placeholders, not real client reviews.")}</p></div><div className="reviews-grid"><article className="review-card"><span className="review-kind">{t("PRODUCT · SAMPLE")}</span><span className="review-quote">“</span><blockquote>{t("Complex idea, clear product, ready for people to use.")}</blockquote><div className="review-source"><span className="review-avatar">S</span><div><strong>{t("SpeakFlow concept")}</strong><small>{t("Illustrative example")}</small></div></div></article><article className="review-card"><span className="review-kind">{t("BRAND · SAMPLE")}</span><span className="review-quote">“</span><blockquote>{t("A brand and digital experience that finally feel like one.")}</blockquote><div className="review-source"><span className="review-avatar">S</span><div><strong>{t("Solis House concept")}</strong><small>{t("Illustrative example")}</small></div></div></article><article className="review-card"><span className="review-kind">{t("GROWTH · SAMPLE")}</span><span className="review-quote">“</span><blockquote>{t("Clear priorities, steady collaboration, visible progress.")}</blockquote><div className="review-source"><span className="review-avatar">N</span><div><strong>{t("NØRTH concept")}</strong><small>{t("Illustrative example")}</small></div></div></article></div></section>

      <section className="contact-section section-pad" id="contact"><div className="section-label"><span>{t("07 / YOUR MOVE")}</span><span>{t("CAIRO · EVERYWHERE")}</span></div><div className="contact-layout"><div className="contact-copy"><h2>{isArabic ? <>كل بداية رائعة<br/>تنطلق <span>من هنا.</span></> : <>Something good<br />starts <span>here.</span></>}</h2><p>{t("Tell us what you're thinking. The big ambition, the knotty challenge, the idea you can't quite shake. We're listening.")}</p><a className="contact-email" href="mailto:hello@nexora.agency">hello@nexora.agency <Arrow diagonal /></a><a className="whatsapp-link" href="https://wa.me/201000000000" target="_blank" rel="noreferrer">{t("Or say hello on WhatsApp")} <Arrow diagonal /></a></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><div className="form-row"><label>{t("Your name")}<input required name="name" placeholder={t("The name we should know")} /></label><label>{t("Work email")}<input required type="email" name="email" placeholder="you@company.com" /></label></div><label>{t("What are you looking to make happen?")}<select name="interest" defaultValue=""><option value="" disabled>{t("Choose a starting point")}</option><option>{t("Build a digital product")}</option><option>{t("Grow my brand")}</option><option>{t("Put AI to work")}</option><option>{t("Make something else")}</option></select></label><label>{t("A little about it")}<textarea required name="message" placeholder={t("The more context, the better. No deck needed.")} rows={3} /></label><button className="button button-dark form-submit" type="submit">{sent ? t("Thanks — we'll be in touch") : t("Send the first note")} <Arrow diagonal /></button><span className="form-privacy">{t("JUST A REAL CONVERSATION. NO SALES SCRIPT.")}</span></form></div></section>

      <SiteFooter />

      <aside className={`contact-chat ${chatOpen ? "is-open" : ""}`} aria-label={t("Quick contact")}>
        {chatOpen && <div className="chat-card">
          <div className="chat-card-top"><span className="chat-avatar">n.</span><div><strong>{t("Let’s talk")}</strong><small><i /> {t("Usually replies within a day")}</small></div><button className="chat-close" onClick={() => setChatOpen(false)} aria-label={isArabic ? "إغلاق نافذة التواصل" : "Close contact panel"}>×</button></div>
          <p>{t("Have something in mind? We’d love to hear about it.")}</p>
          <a className="chat-email" href={`mailto:hello@nexora.agency?subject=${encodeURIComponent(isArabic ? "لنتحدث عن مشروعك" : "Let’s talk")}`}>{t("Start a conversation")} <Arrow diagonal /></a>
          <a className="chat-form-link" href="#contact" onClick={() => setChatOpen(false)}>{t("Or send us a project brief")} <span>↗</span></a>
        </div>}
        <button className="chat-launcher" onClick={() => setChatOpen(!chatOpen)} aria-label={chatOpen ? (isArabic ? "إغلاق نافذة التواصل" : "Close contact panel") : (isArabic ? "افتح نافذة التواصل" : "Open contact panel")} aria-expanded={chatOpen}>
          {chatOpen ? <span className="chat-launcher-close">×</span> : <><span className="chat-launcher-icon" aria-hidden="true"><i /><i /><i /></span><span className="chat-launcher-label">{t("Let’s talk")}</span></>}
        </button>
      </aside>
    </main>
  );
}
