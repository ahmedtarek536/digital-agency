"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type Language = "en" | "ar";

const ar: Record<string, string> = {
  "DIGITAL GROWTH PARTNER · CAIRO, EGYPT": "شريكك للنمو الرقمي · القاهرة، مصر",
  "SCROLL TO EXPLORE": "مرّر لتكتشف ما هو ممكن",
  "01 / A DIFFERENT KIND OF PARTNER": "01 / شريك مختلف بطبيعته",
  "INDEPENDENT BY DESIGN": "مستقلون بطبيعتنا",
  "DISCIPLINES, ONE PARTNER": "تخصصات متعددة، شريك واحد",
  "FOCUSED TEAM, FULL PICTURE": "فريق مركز، ورؤية متكاملة",
  "ROOM TO THINK BIGGER": "مساحة لطموح أكبر",
  "02 / WHAT WE DO": "02 / ما نقدّمه",
  "GOOD WORK, BUILT TO WORK": "إبداع ينجز عملًا حقيقيًا",
  "Ambition is the brief.": "طموحك هو نقطة الانطلاق.",
  "ONE TEAM. NO HANDOFFS.": "فريق واحد. من الفكرة إلى الإنجاز.",
  "03 / SELECTED WORK": "03 / أعمال مختارة",
  "What we do": "ما نقدّمه",
  "Made to move people.": "نبتكر ما يحرّك الناس.",
  "04 / WHY NEXORA": "04 / لماذا نكسورا",
  "SMALL ENOUGH TO CARE. BIG ENOUGH TO DELIVER.": "قريبون بما يكفي لنهتم. ومجهزون بما يكفي لننجز.",
  "Not just a needle on a dashboard. A business, a category, a way of seeing what's possible. That's the standard we hold ourselves to.": "لا نكتفي بتحريك رقم على لوحة مؤشرات؛ نطمح إلى تحريك عملٍ كامل، أو تغيير فئة، أو فتح أفق جديد. هذا هو مستوى العمل الذي نلتزم به.",
  "STRATEGY WITH SUBSTANCE.": "استراتيجية تصنع فرقًا.",
  "CREATIVITY WITH DIRECTION.": "إبداع يعرف وجهته.",
  "TECHNOLOGY WITH A JOB TO DO.": "تقنية لها أثر واضح.",
  "05 / HOW WE WORK": "05 / كيف نعمل",
  "A CLEAR PATH FROM BRIEF TO GROWTH": "مسار واضح من الفكرة إلى النمو",
  "Know what happens next at every step.": "تعرف إلى خطوتك التالية في كل مرحلة.",
  "06 / PARTNER NOTES": "06 / ملاحظات عن الشراكة",
  "SAMPLE COPY · NOT CLIENT TESTIMONIALS": "أمثلة توضيحية · ليست شهادات عملاء",
  "These short examples show the kind of outcomes we value. They are placeholders, not real client reviews.": "تعكس هذه الأمثلة نوع النتائج التي نؤمن بها. النصوص توضيحية وليست آراء حقيقية لعملاء.",
  "PRODUCT · SAMPLE": "منتج · مثال توضيحي",
  "Complex idea, clear product, ready for people to use.": "فكرة معقدة، صارت منتجًا واضحًا وجاهزًا للناس.",
  "BRAND · SAMPLE": "علامة · مثال توضيحي",
  "A brand and digital experience that finally feel like one.": "علامة وتجربة رقمية تتحدثان بصوت واحد.",
  "GROWTH · SAMPLE": "نمو · مثال توضيحي",
  "Clear priorities, steady collaboration, visible progress.": "أولويات واضحة، تعاون ثابت، وتقدم يراه الجميع.",
  "Illustrative example": "مثال توضيحي",
  "07 / YOUR MOVE": "07 / خطوتك التالية",
  "CAIRO · EVERYWHERE": "القاهرة · إلى العالم",
  "Or say hello on WhatsApp": "أو ابدأ حديثًا معنا على واتساب",
  "Let’s talk": "لنتحدث",
  "Have something in mind? We’d love to hear about it.": "تدور في بالك فكرة؟ يسعدنا أن نسمعها.",
  "Or send us a project brief": "أو أرسل لنا نبذة عن مشروعك",
  "Tell us what you're thinking. The big ambition, the knotty challenge, the idea you can't quite shake. We're listening.": "أخبرنا بما يشغل تفكيرك: طموح كبير، أو تحدٍ معقد، أو فكرة لا تفارقك. نحن هنا لنصغي ونفكر معك.",
  "Strategy, creativity and technology in one ambitious team. We build brands, digital products and growth that take your business further.": "نجمع الاستراتيجية والإبداع والتقنية في فريق واحد طموح. نبني علامات تجارية ومنتجات رقمية ونصنع مسارات نمو ترتقي بأعمالك.",
  "We're a digital growth partner for businesses ready to think bigger and move with purpose.": "نحن شريك نمو رقمي للشركات المستعدة لتوسيع طموحها والتحرك نحو أهدافها بوضوح.",
  "Part creative studio, part technology partner. We get close to your business, find the opportunity others miss, and bring the right people together to make it real.": "نحن استوديو إبداعي وشريك تقني في آنٍ واحد. نفهم أعمالك عن قرب، ونكشف الفرص التي قد تفوت الآخرين، ثم نجمع الخبرات المناسبة لتحويلها إلى واقع.",
  "A little more about us": "اكتشف حكايتنا",
  "Discover": "نكتشف",
  "We learn your goals, audience and constraints.": "نفهم أهدافك وجمهورك وما يحيط بمشروعك من فرص وتحديات.",
  "Plan": "نرسم المسار",
  "We agree on the strategy, scope and measures of success.": "نحدد معًا الاستراتيجية ونطاق العمل ومعايير النجاح التي تهمك.",
  "Build": "نحوّلها إلى واقع",
  "Our team creates, shares progress and refines with you.": "نبتكر ونشاركك التقدم ونصقل كل تفصيل بالتعاون معك.",
  "Grow": "نوسّع الأثر",
  "We launch, review results and improve what comes next.": "نطلق العمل، ونقيس أثره، ونطوّر الخطوة التالية باستمرار.",
  "Home": "الرئيسية", "Services": "خدماتنا", "Case studies": "أعمالنا", "About us": "من نحن", "Contact": "تواصل معنا",
  "Start a project": "ابدأ مشروعك", "Contact us": "تواصل معنا", "Show services": "عرض الخدمات", "WHAT WE DO": "ماذا نقدم",
  "Everything you need<br/>to move forward.": "كل ما تحتاجه<br/>لتتقدم بثقة.", "Explore all services": "اكتشف خدماتنا",
  "Web & app development": "تطوير المواقع والتطبيقات", "Digital products built to scale.": "منتجات رقمية تنمو مع أعمالك.", "AI & automation": "الذكاء الاصطناعي والأتمتة", "Make intelligent work flow.": "حوّل الذكاء إلى سير عمل فعّال.", "Social media": "إدارة منصات التواصل", "Build a community around your brand.": "ابنِ مجتمعًا يتفاعل مع علامتك.", "Digital marketing & paid ads": "التسويق الرقمي والإعلانات", "Turn attention into action.": "حوّل الاهتمام إلى نتائج.", "Content & production": "المحتوى والإنتاج", "Create stories people stop for.": "اصنع قصصًا تستحق الانتباه.", "Branding & design": "الهوية والتصميم", "Make your difference visible.": "اجعل اختلافك واضحًا.",
  "HAVE A GOOD PROBLEM?": "لديك تحدٍ يستحق الحل؟", "Let’s make it<br/><em>matter.</em>": "لنجعل فكرتك<br/><em>تصنع فرقًا.</em>", "Start your journey": "ابدأ رحلتك", "Turning ideas into digital growth.": "نحوّل الأفكار إلى نمو رقمي.", "Independent by design. Built in Egypt.": "مستقلون بطبيعتنا. جذورنا في مصر.", "OUR SERVICES": "خدماتنا", "EXPLORE": "اكتشف", "START A CONVERSATION": "لنبدأ حوارًا", "Working with good people everywhere.": "نعمل مع شركاء رائعين أينما كانوا.", "Tell us what you’re building": "أخبرنا بما تخطط لبنائه", "STRATEGY · CREATIVITY · TECHNOLOGY": "استراتيجية · إبداع · تقنية", "BACK TO TOP ↑": "إلى الأعلى ↑",
  "Web & digital products": "المواقع والمنتجات الرقمية", "Digital experiences and products engineered around the way your business works.": "تجارب ومنتجات رقمية مصممة لتناسب طريقة عملك وتدفعها إلى الأمام.", "Websites · E-commerce · Web apps · Mobile apps · Custom software · UI/UX": "مواقع · تجارة إلكترونية · تطبيقات ويب · تطبيقات جوال · برمجيات مخصصة · تجربة المستخدم",
  "AI automation & solutions": "حلول الذكاء الاصطناعي والأتمتة", "Give your best people more room to think, make and move the business forward.": "امنح فريقك مساحة أكبر للتفكير والابتكار وتحريك أعمالك إلى الأمام.", "AI agents · Workflow automation · Integrations · Custom AI · Process optimization": "وكلاء ذكاء اصطناعي · أتمتة سير العمل · تكامل الأنظمة · حلول مخصصة · تحسين العمليات",
  "Social media management": "إدارة منصات التواصل الاجتماعي", "Turn the feed into a real relationship between your brand and its people.": "حوّل حضورك الرقمي إلى علاقة حقيقية بين علامتك وجمهورها.", "Strategy · Account management · Content calendars · Community · Brand positioning · Growth": "استراتيجية · إدارة الحسابات · خطط المحتوى · بناء المجتمع · تموضع العلامة · نمو",
  "Digital growth": "النمو الرقمي", "Connect strategy and media to turn the right attention into action.": "نجمع الاستراتيجية والإعلام لنحوّل انتباه الجمهور المناسب إلى خطوات ملموسة.", "Meta Ads · Google Ads · Campaign management · Lead generation · CRO · Analytics": "إعلانات ميتا · إعلانات جوجل · إدارة الحملات · جذب العملاء · تحسين التحويل · التحليلات",
  "Make stories people choose to spend time with—and remember afterwards.": "نصنع محتوى يختار الناس قضاء وقتهم معه ويتذكرونه بعد ذلك.", "Video · Reels, TikTok & Shorts · Photography · Promotional films · Storytelling": "فيديو · ريلز وتيك توك وشورتس · تصوير · أفلام ترويجية · سرد القصص",
  "Give your business a distinctive point of view people recognize everywhere.": "امنح عملك شخصية متفردة يتعرف عليها الناس أينما رأوها.", "Brand identity · Logo design · Social design · Marketing materials · Creative assets": "هوية العلامة · تصميم الشعار · تصاميم التواصل · مواد تسويقية · أصول إبداعية", "Selected work": "أعمال مختارة", "The people behind the progress": "الأشخاص وراء التقدم", "Let’s make something matter": "لنجعل شيئًا مهمًا يحدث",
  "OUR CAPABILITIES": "قدراتنا", "CONCEPT WORK · PROJECTS COMING SOON": "أعمال تصورية · مشاريع قادمة", "INDEPENDENT STUDIO · CAIRO, EGYPT": "استوديو مستقل · القاهرة، مصر",
  "A connected set of capabilities for the full journey: finding the opportunity, making the thing, and helping it grow.": "قدرات متكاملة ترافق رحلتك كاملة: نكتشف الفرصة، ونحوّلها إلى واقع، ثم نساعدها على النمو.", "A few early directions for the kind of thoughtful, ambitious work we want to make with our partners.": "ملامح أولى لنوع العمل الطموح والمدروس الذي نريد إنجازه مع شركائنا.", "NEXORA brings ambitious businesses and multidisciplinary makers together to turn ideas into lasting progress.": "تجمع نكسورا بين الشركات الطموحة والمواهب متعددة التخصصات لتحويل الأفكار إلى تقدم مستدام.", "Tell us what you’re building, where you’re stuck, or what you want to make possible. We’ll take it from there.": "أخبرنا عمّا تبنيه، أو ما يعيق تقدمك، أو ما تطمح إلى تحقيقه. ومن هنا نبدأ.",
  "STRATEGY × CREATIVITY × TECHNOLOGY · SIX WAYS TO MOVE FORWARD": "استراتيجية × إبداع × تقنية · ستة مسارات نحو التقدم", "One good conversation<br/>can change the brief.": "حوار واحد جيد<br/>قد يغيّر مسار المشروع.", "All work": "كل الأعمال", "Branding": "الهوية", "Digital": "رقمي", "Technology": "تقنية", "Illustrative concept": "تصور إبداعي", "Illustrative concepts": "تصورات إبداعية", "These are illustrative concepts, not client engagements. Case studies will be added as projects launch.": "هذه تصورات توضيحية وليست مشاريع منفذة لعملاء. سنضيف دراسات الحالة مع إطلاق المشاريع.",
  "OUR POINT OF VIEW": "رؤيتنا", "Close to the work.<br/>Close to the people.<br/><em>Always moving forward.</em>": "قريبون من العمل.<br/>قريبون من الناس.<br/><em>ونتقدم دائمًا.</em>", "01 / MISSION": "01 / رسالتنا", "Make progress tangible.": "نجعل التقدم ملموسًا.", "We pair clear thinking with focused execution, helping businesses build the next thing their customers and teams actually need.": "نجمع وضوح الرؤية مع التنفيذ المركّز، لنساعد الشركات على بناء ما يحتاجه عملاؤها وفرقها فعلًا.", "02 / VISION": "02 / رؤيتنا", "From Cairo, outward.": "من القاهرة إلى العالم.", "We’re building an Egyptian digital partner with the craft, curiosity and ambition to work confidently across the region and beyond.": "نبني شريكًا رقميًا مصريًا يجمع الحرفية والفضول والطموح للعمل بثقة في المنطقة وما بعدها.", "03 / VALUES": "03 / قيمنا", "Care is a competitive edge.": "الاهتمام يصنع فارقًا.", "Stay curious. Say the useful thing. Take responsibility for the details. Make the work better together.": "نحافظ على فضولنا، ونقول ما يفيد، ونتحمل مسؤولية التفاصيل، ونحسّن العمل معًا.", "FOUNDER": "المؤسس", "CAIRO, EGYPT": "القاهرة، مصر", "MEET THE FOUNDER": "تعرّف على المؤسس", "Founder, NEXORA": "مؤسس نكسورا", "Bringing strategy, creativity and technology together to help ambitious businesses move forward.": "أجمع الاستراتيجية والإبداع والتقنية لمساعدة الشركات الطموحة على التقدم.", "OUR APPROACH": "منهجنا", "Small, multidisciplinary teams work directly with your people. No mystery handoffs; a shared plan, open collaboration and steady progress from first conversation to launch.": "تعمل فرق صغيرة ومتعددة التخصصات مباشرة مع فريقك. خطة مشتركة وتعاون واضح وتقدم مستمر من أول حوار حتى الإطلاق.", "Meet your project team": "تعرّف على فريق مشروعك",
  "GOOD WORK STARTS WITH A CONVERSATION.": "العمل الجيد يبدأ بحوار.", "WhatsApp ↗": "واتساب ↗", "Your name": "اسمك", "The name we should know": "الاسم الذي نناديك به", "Work email": "بريد العمل", "you@company.com": "you@company.com", "What are you looking to make happen?": "ما الذي تطمح إلى تحقيقه؟", "Choose a starting point": "اختر نقطة البداية", "Build a digital product": "إنشاء منتج رقمي", "Grow my brand": "تنمية علامتي التجارية", "Put AI to work": "توظيف الذكاء الاصطناعي", "Make something else": "شيء آخر", "A little about it": "أخبرنا قليلًا عنه", "The more context, the better. No deck needed.": "كلما زادت التفاصيل كان أفضل. لا حاجة لعرض تقديمي.", "JUST A REAL CONVERSATION. NO SALES SCRIPT.": "حوار حقيقي، بلا نصوص مبيعات.", "Send the first note": "أرسل رسالتك الأولى", "Thanks — we’ll be in touch": "شكرًا — سنتواصل معك",
  "CONCEPT PROJECT": "مشروع تصوري", "Brand & digital concept": "تصور للعلامة والتجربة الرقمية", "E-commerce concept": "تصور للتجارة الإلكترونية", "AI product concept": "تصور لمنتج ذكاء اصطناعي", "AI communication concept": "تصور لتجربة تواصل ذكية", "Quick contact": "تواصل سريع", "Open contact panel": "افتح نافذة التواصل", "Close contact panel": "أغلق نافذة التواصل",
  "Brand and digital identity concept": "تصور لهوية العلامة وتجربتها الرقمية", "E-commerce experience concept": "تصور لتجربة تجارة إلكترونية", "A slower kind\nof somewhere.": "وجهة\nعلى مهل.", "MOVE WITH\nINTENTION": "تحرّك\nبهدف.", "Money, made\nmore human.": "مالٌ أكثر\nإنسانية.", "SAY IT\nWITH CLARITY.": "قُلها\nبوضوح.",
  "Thanks — we'll be in touch": "شكرًا — سنتواصل معك", "Usually replies within a day": "نرد عادةً خلال يوم", "Toggle navigation": "تبديل القائمة", "SpeakFlow concept": "تصور سبيك فلو", "Solis House concept": "تصور سوليس هاوس", "NØRTH concept": "تصور نورث",
};

type LocaleContextValue = { language: Language; isArabic: boolean; t: (english: string) => string; toggle: () => void };
const LocaleContext = createContext<LocaleContextValue>({ language: "en", isArabic: false, t: (value) => value, toggle: () => {} });

function subscribeToLanguage(notify: () => void) {
  window.addEventListener("nexora-language-change", notify);
  window.addEventListener("storage", notify);
  return () => {
    window.removeEventListener("nexora-language-change", notify);
    window.removeEventListener("storage", notify);
  };
}

function getLanguageSnapshot(): Language {
  return window.localStorage.getItem("nexora-language") === "ar" ? "ar" : "en";
}

function getServerLanguageSnapshot(): Language { return "en"; }

export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const language = useSyncExternalStore<Language>(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.classList.toggle("is-arabic", language === "ar");
  }, [language]);
  useEffect(() => {
    const arabicPage = pathname === "/" ? "الرئيسية" : pathname === "/services" ? "خدماتنا" : pathname === "/work" ? "أعمال مختارة" : pathname === "/about" ? "من نحن" : pathname === "/contact" ? "تواصل معنا" : "نكسورا";
    const englishPage = pathname === "/" ? "NEXORA — Turning Ideas Into Digital Growth" : pathname === "/services" ? "Services — NEXORA" : pathname === "/work" ? "Selected Work — NEXORA" : pathname === "/about" ? "About — NEXORA" : pathname === "/contact" ? "Contact — NEXORA" : "NEXORA";
    document.title = language === "ar" ? `${arabicPage} — نكسورا` : englishPage;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = language === "ar"
      ? "نكسورا شريكك المستقل للنمو الرقمي. نجمع الاستراتيجية والإبداع والتقنية لنصنع ما يدفع أعمالك إلى الأمام."
      : "An independent digital growth partner based in Cairo, Egypt. We bring strategy, creativity and technology together to build what’s next.";
  }, [language, pathname]);
  const value = useMemo<LocaleContextValue>(() => ({
    language,
    isArabic: language === "ar",
    t: (english) => language === "ar" ? ar[english] ?? english : english,
    toggle: () => {
      const next: Language = language === "en" ? "ar" : "en";
      window.localStorage.setItem("nexora-language", next);
      window.dispatchEvent(new Event("nexora-language-change"));
    },
  }), [language]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() { return useContext(LocaleContext); }

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, toggle, isArabic } = useLocale();
  return <button className={`language-toggle ${className}`} type="button" onClick={toggle} aria-label={isArabic ? "التبديل إلى الإنجليزية" : "Switch to Arabic"}>
    <span className={language === "en" ? "language-active" : ""}>EN</span><i aria-hidden="true"/><span className={language === "ar" ? "language-active" : ""}>عربي</span>
  </button>;
}
