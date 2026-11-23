"use client";

import { services } from "./service-showcase";
import Link from "next/link";
import { LanguageToggle, useLocale } from "./locale-provider";

const pages = [["Home", "/"], ["Services", "/services"], ["Case studies", "/work"], ["About us", "/about"]];

export function SiteFooter() {
  const { t, isArabic } = useLocale();
  return <footer className="site-footer">
    <div className="footer-cta"><div><span>{t("HAVE A GOOD PROBLEM?")}</span><h2>{isArabic ? <>لنجعل فكرتك<br/><em>تصنع فرقًا.</em></> : <>Let’s make it<br/><em>matter.</em></>}</h2></div><a className="footer-start" href="/contact">{t("Start your journey")} <span>↗</span></a><span className="footer-cta-orbit" aria-hidden="true"/></div>
    <div className="footer-grid">
      <div className="footer-brand"><Link className="wordmark footer-mark" href="/">nexora<span className="wordmark-dot">.</span></Link><p>{t("Turning ideas into digital growth.")}<br/>{t("Independent by design. Built in Egypt.")}</p></div>
      <div className="footer-column"><h3>{t("OUR SERVICES")}</h3>{services.map((service) => <a href={`/services#service-${service.n}`} key={service.n}>{t(service.title)}</a>)}</div>
      <div className="footer-column"><h3>{t("EXPLORE")}</h3>{pages.map(([label, href]) => <a href={href} key={href}>{t(label)}</a>)}<a href="/contact">{t("Contact")}</a></div>
      <div className="footer-column footer-contact"><h3>{t("START A CONVERSATION")}</h3><a className="footer-email" href="mailto:hello@nexora.agency">hello@nexora.agency <span>↗</span></a><p>{isArabic ? "القاهرة، مصر" : "Cairo, Egypt"}<br/>{t("Working with good people everywhere.")}</p><a href="/contact">{t("Tell us what you’re building")} <span>↗</span></a></div>
    </div>
    <div className="footer-bottom"><span>© NEXORA 2026</span><span>{t("STRATEGY · CREATIVITY · TECHNOLOGY")}</span><LanguageToggle className="footer-language"/><a href="#top">{t("BACK TO TOP ↑")}</a></div>
  </footer>;
}
