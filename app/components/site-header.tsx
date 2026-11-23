"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "./locale-provider";

const menuServices = [
  ["01", "Web & app development", "Digital products built to scale."],
  ["02", "AI & automation", "Make intelligent work flow."],
  ["03", "Social media", "Build a community around your brand."],
  ["04", "Digital marketing & paid ads", "Turn attention into action."],
  ["05", "Content & production", "Create stories people stop for."],
  ["06", "Branding & design", "Make your difference visible."],
];

export function SiteHeader() {
  const { t, isArabic } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return <header className={`site-header${isArabic ? " header-arabic" : ""}`}>
    <Link className="wordmark" href="/" aria-label={isArabic ? "نكسورا، الرئيسية" : "NEXORA home"}>nexora<span className="wordmark-dot">.</span></Link>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={t("Toggle navigation")} aria-expanded={menuOpen}>{menuOpen ? "×" : "☰"}</button>
    <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}>
      <Link href="/">{t("Home")}</Link>
      <div className={servicesOpen ? "nav-services services-open" : "nav-services"} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
        <a href="/services" className="nav-services-link">{t("Services")}</a>
        <button className="nav-caret-button" aria-label={t("Show services")} aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}><span className="nav-caret-icon" aria-hidden="true"/></button>
        <div className="mega-menu"><div className="mega-intro"><span>{t("WHAT WE DO")}</span><h2>{isArabic ? <>كل ما تحتاجه<br/>لتتقدم بثقة.</> : <>Everything you need<br/>to move forward.</>}</h2><a href="/services">{t("Explore all services")} <span>↗</span></a></div><div className="mega-grid">{menuServices.map(([num, name, note]) => <a href={`/services#service-${num}`} className="mega-item" key={num}><span>{num}</span><div><strong>{t(name)}</strong><small>{t(note)}</small></div><b>↗</b></a>)}</div></div>
      </div>
      <a href="/work">{t("Case studies")}</a><a href="/about">{t("About us")}</a>
    </nav>
    <a className="header-cta header-secondary" href="/contact">{t("Start a project")} <span>↗</span></a>
    <a className="header-cta header-primary" href="/contact">{t("Contact us")} <span>↗</span></a>
  </header>;
}
