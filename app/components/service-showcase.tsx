import Image from "next/image";
import { useLocale } from "./locale-provider";

export const services = [
  { n: "01", title: "Web & app development", short: "Web & digital products", text: "Digital experiences and products engineered around the way your business works.", details: "Websites · E-commerce · Web apps · Mobile apps · Custom software · UI/UX", icon: "⌘", art: "BUILD WHAT'S\nNEXT", motif: "build", image: "/services/web-apps.png" },
  { n: "02", title: "AI automation & solutions", short: "AI & automation", text: "Give your best people more room to think, make and move the business forward.", details: "AI agents · Workflow automation · Integrations · Custom AI · Process optimization", icon: "✳", art: "MAKE ROOM\nFOR BETTER", motif: "intelligence", image: "/services/ai-automation.png" },
  { n: "03", title: "Social media management", short: "Social media", text: "Turn the feed into a real relationship between your brand and its people.", details: "Strategy · Account management · Content calendars · Community · Brand positioning · Growth", icon: "◉", art: "EARN THE\nATTENTION", motif: "social", image: "/services/social-media.png" },
  { n: "04", title: "Digital marketing & paid ads", short: "Digital growth", text: "Connect strategy and media to turn the right attention into action.", details: "Meta Ads · Google Ads · Campaign management · Lead generation · CRO · Analytics", icon: "↗", art: "GROW WITH\nINTENTION", motif: "growth", image: "/services/digital-marketing.png" },
  { n: "05", title: "Content & production", short: "Content & production", text: "Make stories people choose to spend time with—and remember afterwards.", details: "Video · Reels, TikTok & Shorts · Photography · Promotional films · Storytelling", icon: "▶", art: "MAKE THEM\nFEEL IT", motif: "content", image: "/services/content-production.png" },
  { n: "06", title: "Branding & design", short: "Branding & design", text: "Give your business a distinctive point of view people recognize everywhere.", details: "Brand identity · Logo design · Social design · Marketing materials · Creative assets", icon: "◈", art: "LOOK LIKE\nNO ONE ELSE", motif: "identity", image: "/services/branding.png" },
];

export function ServiceShowcase({ compact = false }: { compact?: boolean }) {
  const { t } = useLocale();
  return <div className={compact ? "service-showcase compact" : "service-showcase"}>
    {services.map((service) => <a id={`service-${service.n}`} className={`service-card motif-${service.motif}`} href={`/services#service-${service.n}`} key={service.n}>
      <div className="service-card-visual"><Image className="service-card-image" src={service.image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 33vw"/><span className="service-image-shade" aria-hidden="true"/><span className="service-card-index">NEXORA / {service.n}</span><span className="service-card-icon">{service.icon}</span><span className="service-card-arrow">↗</span></div>
      <div className="service-card-body"><span className="service-card-kicker">{service.n} / {t(service.short).toUpperCase()}</span><h3>{t(service.title)}</h3><p>{t(service.text)}</p><div className="service-chips">{t(service.details).split(" · ").map((detail) => <span key={detail}>{detail}</span>)}</div></div>
    </a>)}
  </div>;
}
